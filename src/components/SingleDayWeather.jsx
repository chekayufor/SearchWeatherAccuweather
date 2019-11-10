import React, { useContext, useState } from "react";
import { Context } from "./ContextProvider";
import styled from "styled-components";
import Moment from "react-moment";

const SingleDayWeather = () => {
  let {weatherForcast, selectedCity,selectedCountry, selectedDay, temperatureConverter, pick, isAdd, check} = useContext(Context);
  check();
  // console.log({isAdd})
  // console.log({selectedCity})
  let {city, code} = selectedCity;
  
  return (
    <SingleDayWeatherContainer>
       {weatherForcast[0] ? (
        <Container>
             <Div>
                <h2>{`${city}, (${selectedCountry})`}</h2>
                  <Button onClick={()=> {pick(selectedCity)}}>{isAdd}</Button>
                <h5><Moment format="dddd, MMM Do YYYY">{weatherForcast[selectedDay].Date}</Moment></h5>
                <Text>
                  <h5>{`Max temperature: ${temperatureConverter(weatherForcast[selectedDay].Temperature.Maximum.Value)} °C`} </h5>
                  <span> ~ </span>
                  <h5>{`Min temperature: ${temperatureConverter(weatherForcast[selectedDay].Temperature.Minimum.Value)} °C`}</h5>
                </Text>
              </Div>
              <Div>
                <Img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    weatherForcast[selectedDay].Day.Icon >= 10
                      ? weatherForcast[selectedDay].Day.Icon
                      : "0" + weatherForcast[selectedDay].Day.Icon
                  }-s.png`}
                  alt="weather-icon"
                />
                <h2>{weatherForcast[selectedDay].Day.IconPhrase}</h2>
              </Div>
        </Container>
      ) : null}
    </SingleDayWeatherContainer>
  );
};

export default SingleDayWeather;

const SingleDayWeatherContainer = styled.div`
  grid-area:1/1/2/2;
  display: grid;
  justify-content: center;
  align-content: center;
  color: slategrey;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;   
  grid-template-rows: repeat(2, 1fr);
  align-self: center;
  justify-items: center;
`
const Div = styled.div`
  text-align: center;
  display: grid;
`
const Img = styled.img`
  height: 200px;
  justify-self: center;
`
const Text = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto 1fr;   
    grid-template-rows: 100%;
  }
`
const Button = styled.button`
margin: 0;
padding: 0;
border: 0;
position: relative;
font-size: 5rem;
color: red;
background-color: #dadcd3;
`