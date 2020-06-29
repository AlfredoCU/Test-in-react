import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
// import App from "./App";
import "./index.css";

ReactDOM.render(<CounterApp value={0} />, document.getElementById("root"));

// ReactDOM.render(
//   <App dev="Alfredo CU" age={23} />,
//   document.getElementById("root")
// );
