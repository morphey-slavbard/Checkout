import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./Checkout";
import "./styles.css";

<script src="https://unpkg.com/@optimizely/optimizely-sdk/dist/optimizely.browser.umd.min.js"></script>


function App() {
  return <Checkout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
