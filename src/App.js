import React from "react";
import Portfolio from "./component/Portfolio";
import Qualification from "./component/Qualification";
import "./index.css";
import Cours from "./component/Cours";
import SocilasProfiles from "./component/SocilasProfiles";
const App = () => {
  return (
    <div className="content">
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
