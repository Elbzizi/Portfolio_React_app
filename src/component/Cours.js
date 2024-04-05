import React from "react";
import Card from "./Card";

const Cours = () => {
  return (
    <div>
      <h1>Mes Cours</h1>
      <div className="cours">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cours;
