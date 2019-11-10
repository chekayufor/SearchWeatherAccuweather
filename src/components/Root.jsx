import React from "react";
import App from "./App";
import Favorites from "./Favorites";
// import { Context } from "./ContextProvider";
import TopBar from "./TopBar";
import Links from "./Links";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import SingleDayWeather from "./SingleDayWeather";
// import WeeklyWeatherContainer from "./WeeklyWeatherContainer";

// import { styled } from "./global.styles";
import styled from "styled-components";

const Root = () => {
  // let weatherForcast = useContext(Context);
  return (
    <Router>
      <AppContainer>
        <TopBar>
          <Links/>
        </TopBar>
        <Route exact path="/" component={App} />
        <Route path="/favorites" component={Favorites} />         
      </AppContainer>
    </Router>

  );
};

export default Root;

const AppContainer = styled.div`
  text-align: left;
  background-color: #9da9c1;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px auto ;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

