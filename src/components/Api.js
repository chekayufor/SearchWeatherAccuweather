const API_KEY = "RceXNNQrrmcHJmkRllSgpfFP2oqIQ3YH";
const API_HOST = 'https://dataservice.accuweather.com/';
const API_VERSION = 'v1';


const LocationApiUrl = (param, group) => `${API_HOST}locations/${API_VERSION}/${param}/${group}?apikey=${API_KEY}`;

const Geolocation = `${API_HOST}locations/${API_VERSION}/cities/geoposition/search?apikey=${API_KEY}&q=32.045%2C%2034.77&language=en`;

const WeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/5day/${key}?apikey=${API_KEY}`;

export  const getLocations = async()=> {
    const response = await fetch(LocationApiUrl('topcities', 100));
    if (!response.ok) throw new Error("Network response was not ok.");
    const locations = await response.json();
    return locations
}

export  const getStartGeolocation = async()=> {
    const response = await fetch(Geolocation);
    if (!response.ok) throw new Error("Network response was not ok.");
    const geolocation = await response.json();
    return geolocation;
}

export const getWeather= async(key)=> {
    const response = await fetch(WeatherApiUrl(key));
    if (!response.ok) throw new Error("Network response was not ok.");
    const weather = await response.json();
    return weather;
}
