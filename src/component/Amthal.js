import React, { useEffect, useState } from "react";

const Amthal = () => {
  const [amthal, SetAmthal] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/amthal/Dix")
      .then((res) => res.json())
      .then((json) => SetAmthal(json));
  }, []);

  return (
    <div className="amthal">
      <ul>
        {amthal.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Amthal;
