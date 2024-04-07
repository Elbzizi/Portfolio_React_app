import React from "react";
import Portfolio from "./component/Portfolio";
import Qualification from "./component/Qualification";
import "./index.css";
import Cours from "./component/Cours";
import SocilasProfiles from "./component/SocilasProfiles";
import Title from "./component/Title";
const App = () => {
  return (
    <div className="container">
      <Title />
      <div className="row">
        <Portfolio />
        <Qualification />
      </div>
      <hr />
      <Cours />
      <hr />
      <SocilasProfiles />
    </div>
  );
};

export default App;
