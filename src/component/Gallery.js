import React from "react";
import IMAGES from "../data/Images";
import ImageShadow from "react-image-shadow";
const Gallery = () => {
  return (
    <div className="container">
      {IMAGES.map((item) => {
        return (
          <div className="gallery">
            <h4>{item.title}</h4>
            <img src={item.image} alt="" />
            <p>{item.description}</p>
          </div>
          // <ImageShadow src={item.image}/>
        );
      })}
    </div>
  );
};

export default Gallery;
