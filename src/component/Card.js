import React from "react";
const Card = (props) => {
  const { title, description, image, link } = props.cours;
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        onClick={() => {
          window.location.href = link;
        }}
      >
        cours
      </button>
    </div>
  );
};

export default Card;
