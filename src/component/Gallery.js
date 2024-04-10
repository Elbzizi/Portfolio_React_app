import React from "react";

const Gallery = (props) => {
  return (
    <div className="gallery">
      <h4>{props.gallery.title}</h4>
      <img src={props.gallery.img} alt="" />
      <p> {props.gallery.img}</p>
    </div>
  );
};

export default Gallery;
