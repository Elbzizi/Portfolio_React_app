import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-4">
        <h3 className="m-1 ">
          <Link to="/">Home</Link>
        </h3>
        <h3 className="m-1 ">
          <Link to="/Amthal">Amthal</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
