import React, { useState, useEffect } from "react";
import * as API from './Api'

const Context = React.createContext();
const { Provider } = Context;

const ContextProvider = ({ children }) => {
  //state
  const [is_loading, setIs_loading] = useState(true);
  const [locationsApi, setLocationsApi] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const [weatherForcast, setWeatherForcast] = useState([]);
  const [selectedDayWeather, setSelectedDayWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const initialArray = () => JSON.parse(window.localStorage.getItem('favorites') || "[]");
  const [favorite, setFavorite] = useState(initialArray);
  const [favoriteWeather, setFavoriteWeather] = useState([]);
    const [isAdd, setIsAdd] = useState('📌');


  
  //component did mount
  useEffect(() => {
    getLocations();
    getStartGeolocation();
    setIs_loading(false);
  },[]);
  
  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorite));
    favWeather();
  }, [favorite])
  

  //get selected weather 
  const getForcast = async key => {
    const forecast = await API.getWeather(key);
    console.log({forecast})
    setWeatherForcast(forecast.DailyForecasts);
    setSelectedDayWeather(forecast.DailyForecasts[selectedDay])
  };

  const getForcastFavorite = async key => {
    const forecastFav = await API.getWeather(key);
    console.log({forecastFav});
    console.log('forecastFav.DailyForecasts[0],', forecastFav.DailyForecasts[0]);
    // setWeatherForcastFav(forecastFav.DailyForecasts[0]);
    return forecastFav;
  };
  const favWeather = async () => {
    let weather = []; 
    //  favorite.forEach(async i => {
    //   let key = i.code
    //  let w = await getForcastFavorite(key);
    //   return weather.push({i, w});
    // })
    for(let i of favorite){
      // console.log({i})
      let key = i.code;
      let w = await getForcastFavorite(key);
       weather.push({i, w});
      //  weather.push( w);
    }
    await Promise.all(weather);
    console.log({weather});
    setFavoriteWeather(weather)
  }

  //location Autocomplete
  const getLocations = async () => {
    const locations = await API.getLocations();
    console.log({ locations });
    const cityCountry = [];
    for (let location of locations) {
      let label = location.AdministrativeArea.EnglishName;
      let id = location.Country.ID;
      let value = location.Country.EnglishName;
      let code = location.Key;
      cityCountry.push({ id, label, value, code });
    }
    setLocationsApi(cityCountry);
  };

  //start point geolocation in Tel Aviv
  const getStartGeolocation = async() => {
    const geolocation = await API.getStartGeolocation();
    // console.log({geolocation})
    const city = geolocation.EnglishName;
    const code = geolocation.Key;
    const country = geolocation.Country.EnglishName
    let s = {city, code}
    setSelectedCity(s);
    getForcast(code);
    setSelectedCountry(country);
  }  

  const handleOnChange = (city, code, country) => {
    let s = {city, code}
    setSelectedCity(s);
    setSelectedCountry(country);
    getForcast(code);

  };

  const handleDaySelection = i => {
    setSelectedDay(i);
  };

  const temperatureConverter = (valNum)=> {
    valNum = parseInt(valNum);
    return Math.floor((valNum - 32) / 1.8);
  }

  const check = () =>{
    let check = false;
    let {city, code} = selectedCity;
    favorite.forEach(i => {
        if (i.city === city) return check = true;
    })
    return (check === true) ? setIsAdd('❤' ) : setIsAdd('📌');
  }
  
  const pick = (selectedCity) => {
    let check = false;
    let {city, code} = selectedCity;
    favorite.forEach(i => {
        if (i.city === city) return check = true;
    })
    if(check === true) setFavorite(favorite.filter(i => i.city !== city));
    else setFavorite([...favorite, selectedCity]);

  }

  

  const state = {
    locationsApi,
    selectedCity,
    selectedCountry,
    weatherForcast,
    selectedDay,
    is_loading,
    selectedDayWeather,
    favorite,
    isAdd
    };

  const actions = {
    handleOnChange,
    handleDaySelection,
    temperatureConverter,
    pick,
    check,
    favoriteWeather
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
};

export { ContextProvider, Context };
