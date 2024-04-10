import React from "react";
import IMAGES from "../data/Images";
import ImageShadow from "react-image-shadow";
const Gallery = () => {
  return (
    <div className="container">
      {IMAGES.map((item) => {
        return <Image key={item.id} src={item.image} desc={item.description} />;
      })}
    </div>
  );
};

const Image = ({ src, desc }) => {
  return (
    <div className="gallery">
      <a href={src} target="_blank" rel="noreferrer">
        <ImageShadow src={src} />
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default Gallery;
