import React, { useContext }  from "react";
import { Context } from "./ContextProvider";
import styled from "styled-components";
import GlobalStyles from "./global.styles";
import Moment from "react-moment";


const Favorites = () => {
    let {favorite, temperatureConverter, favoriteWeather} = useContext(Context);
    console.log({favorite});
    console.log({favoriteWeather});
    return (
        <Box>
            <Ul>
                {favoriteWeather.map(({i, w}) => {
                    return(
                        <Li
                            key={i.code}>
                            <h4>{i.city}</h4>
                            <Moment format='ddd' >{w.DailyForecasts[0].Date}</Moment>
                       <Img
                            src={`https://developer.accuweather.com/sites/default/files/${
                                w.DailyForecasts[0].Day.Icon >= 10
                                ? w.DailyForecasts[0].Day.Icon
                                : "0" + w.DailyForecasts[0].Day.Icon
                            }-s.png`}
                            alt="weather-icon"
                        />
                       <h5>{`${temperatureConverter(w.DailyForecasts[0].Temperature.Maximum.Value)} °C`}</h5>
                        </Li>
                    )
                })}
            </Ul>
            <GlobalStyles />
        </Box>

    );
};
export default Favorites;

const Box = styled.div`
  grid-area: 2/1/3/2; 
  height:100%;
  background: Cornsilk;
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows:auto 1fr ;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
`;
const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);   
    // grid-template-rows: repeat(3, 1fr);
    list-style: none;
    margin: 3px;
    padding: 0;
    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);   
        // grid-template-rows: 100%;
    }
`
const Li = styled.li`
    text-align: center;
    align-self: stretch;
    border-radius: 0.4rem;
    border: darkgrey 0.2rem dashed;
    background-color: #90a4b7;
    margin: 5px;
    display: grid;
`
const Img = styled.img`
    width:auto;
    justify-self: center;
`