import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Amtal from "./component/Amtal";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Amtal" element={<Amtal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
