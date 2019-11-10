import React, { useContext} from "react";
import { Context } from "./ContextProvider";
import styled from "styled-components";
import Moment from "react-moment";

const WeatherForecast = () => {
  let {weatherForcast, handleDaySelection, temperatureConverter, selectedDay} = useContext(Context);
  console.log({ weatherForcast });

  return (
   <Div>
       <Ul>
           {weatherForcast.map(({Date, Day,Temperature}, index) => {
               return(
                   <Li
                        onClick = {() => handleDaySelection(index)}
                        key={weatherForcast[selectedDay].Day.EpochDate}>
                       <Moment format='ddd' >{Date}</Moment>
                       <Img
                            src={`https://developer.accuweather.com/sites/default/files/${
                            weatherForcast[index].Day.Icon >= 10
                                ? weatherForcast[index].Day.Icon
                                : "0" + weatherForcast[index].Day.Icon
                            }-s.png`}
                            alt="weather-icon"
                        />
                       <H1>{`${temperatureConverter(Temperature.Maximum.Value)} °C`}</H1>
                   </Li>
               )
           })}
       </Ul>
   </Div>
  );
};

export default WeatherForecast;

const Div = styled.div`
    grid-area: 2/1/3/2;
    display: grid;

`
const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);   
    grid-template-rows: repeat(3, 1fr);
    list-style: none;
    margin: 3px;
    padding: 0;
    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);   
        grid-template-rows: 100%;
    }
`
const Li = styled.li`
    text-align: center;
    align-self: stretch;
    align-items: center;
    border-radius: 0.4rem;
    border: darkgrey 0.2rem dashed;
    background-color: #90a4b7;
    margin: 5px;
    display: grid;
`
const H1 = styled.h1`
    font-size: 2.0rem;
`
const Img = styled.img`
    width:auto;
    justify-self: center;
`