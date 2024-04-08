import React from "react";
import Card from "./Card";
import COURSES from "../data/courses";
const Cours = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Mes Cours</h1>
      <div className="cours">
        {COURSES.map((item,index) => {
          return <Card cours={item}  key={index}/>;
        })}
      </div>
    </div>
  );
};

export default Cours;
