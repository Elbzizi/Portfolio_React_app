import React, { useEffect, useState } from "react";

const Title = () => {
  const [index, SetIndex] = useState(0);
  const [tit, SetTit] = useState(false);
  const title = [
    "an engineer developer",
    "a fitness athlete",
    "love play video games",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      SetIndex(index >= 2 ? 0 : index + 1);
      SetTit(!tit);
    }, 2000);
    return () => {
      SetTit(!tit);
      clearInterval(interval);
    };
  });
  return (
    <div className="text-center ">
      <h3 className={tit ? "fadeIn" : "fadeOut"}>I am {title[index]}</h3>
    </div>
  );
};

export default Title;
