import React from "react";
import Portfolio from "./component/Portfolio";
import Qualification from "./component/Qualification";
import "./index.css";
const App = () => {
  return (
    <div className="row">
      <Portfolio />
      <Qualification />
    </div>
  );
};

export default App;
