import React from "react";
import Card from "./Card";
import COURSES from "../data/courses";
const Cours = () => {
  return (
    <div>
      <h1>Mes Cours</h1>
      <div className="cours">
        {COURSES.map((item) => {
          return <Card cours={item} />;
        })}
      </div>
    </div>
  );
};

export default Cours;
