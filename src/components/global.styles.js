import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Expletus+Sans|Raleway|Griffy|Yanone+Kaffeesatz:400,700");

    html,
    body {
      height: 100%;
      width:100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 10px;
    }
`;

export default GlobalStyles;
