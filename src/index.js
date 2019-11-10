import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import { ContextProvider } from "./components/ContextProvider";
import RootComponent from "./components/Root";
// import "./styles.css";

ReactDOM.render(
  <ContextProvider>
    <RootComponent />
  </ContextProvider>,
  document.getElementById("root")
);
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
