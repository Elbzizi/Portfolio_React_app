import React, { useEffect, useState } from "react";

const Amthal = () => {
  const [amthal, setAmthal] = useState([]);
  const [one, setOne] = useState({});

  useEffect(() => {
    fetch("http://localhost:3005/amthal/One")
      .then((res) => res.json())
      .then((json) => setOne(json));
  }, []);

  const tin = () => {
    fetch("http://localhost:3005/amthal/Dix")
      .then((res) => res.json())
      .then((json) => setOne(json));
  };

  return (
    <div className="amthal">
      <h1>مثال اليوم</h1>
      <p>{one.title}</p>
      {/* <ul>
        {amthal.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Amthal;
