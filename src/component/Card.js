import React from "react";
import image from "../assets/WhatsApp Image 2023-10-13 at 00.35.04.jpeg";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.cours.image} alt="" />
      <h3>{props.cours.title}</h3>
      <p>{props.cours.description}</p>
      <button>cours</button>
    </div>
  );
};

export default Card;
