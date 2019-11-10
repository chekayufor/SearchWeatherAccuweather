import React, { useContext } from "react";
import styled from "styled-components";
import GlobalStyles from "./global.styles";
import { Context } from "./ContextProvider";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import SingleDayWeather from "./SingleDayWeather";


const App = ({ children }) => {
  const { is_loading } = useContext(Context);
  console.log({ is_loading });
  //console.log({ children });
  return (
    <Box>
      {/* {is_loading === false ? children : <h1>I am Loding...</h1>} */}
           <SearchContainer />
            <ContentBox>
              <SingleDayWeather/>
              <WeatherForecast/>
            </ContentBox>
      <GlobalStyles />
    </Box>
  );
};

export default App;

const Box = styled.div`
  grid-area: 2/1/3/2; 
  height:100%;
  background: Cornsilk;
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows:auto 1fr ;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  justify-items:center;
  padding: 40px 0;
`;
const SearchContainer = styled(Search)`
  grid-area: 1/1/2/2; 
  width:80%;

`
const ContentBox = styled.div`
  grid-area: 2/1/3/2; 
  width:80%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows:2fr 1fr;
  background-color: #dadcd3;
  height: 100%;
  margin-bottom: 20px;
`;
