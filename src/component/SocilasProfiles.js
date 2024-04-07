import React from "react";
import SOCIAL from "../data/Socile_profiles";
import Social from "./Social";
const SocilasProfiles = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>My social Profile </h2>
      <div className="social">
        {SOCIAL.map((item) => {
          return <Social socila={item} />;
        })}
      </div>
    </div>
  );
};

export default SocilasProfiles;
