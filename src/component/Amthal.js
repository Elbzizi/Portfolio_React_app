import React, { useEffect, useState } from "react";

const Amthal = () => {
  const [amthal, SetAmthal] = useState([]);
  const [One, SetOne] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/amthal/One")
      .then((res) => res.json())
      .then((json) => SetOne(json));
  }, []);
  Tin(){
    fetch("http://localhost:3005/amthal/Dix")
    .then((res) => res.json())
    .then((json) => SetOne(json));
  }
  return (
    <div className="amthal">
      <h1>مثال اليوم</h1>
      <p>{One.title}</p>
      {/* <ul>
        {amthal.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Amthal;
