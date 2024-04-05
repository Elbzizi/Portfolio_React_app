import React from "react";
import Portfolio from "./component/Portfolio";
import Qualification from "./component/Qualification";
import "./index.css";
import Cours from "./component/Cours";
const App = () => {
  return (
  <div className="content">
      <div className="row">
        <Portfolio />
        <Qualification />
      </div>
        <Cours/>
  </div>
  );
};

export default App;
