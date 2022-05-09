import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./Checkout";
import "./styles.css";

function App() {
  return <Checkout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
