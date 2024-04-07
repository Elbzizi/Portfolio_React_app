import React, { useEffect, useState } from "react";

const Title = () => {
  const [index, SetIndex] = useState(0);
  const title = [
    "an engineer developer",
    "a fitness athlete",
    "love play video games",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      SetIndex(index >= 2 ? 0 : index + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <div className="text-center">
      <h3>I am {title[index]}</h3>
    </div>
  );
};

export default Title;
