import React from 'react';
import image from "../assets/WhatsApp Image 2023-10-13 at 00.35.04.jpeg"
const Card = () => {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h3>Cours</h3>
      <p>first project react 3eme annes</p>
      <button>cours</button>
    </div>
  );
}

export default Card;
