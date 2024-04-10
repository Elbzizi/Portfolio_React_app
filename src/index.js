import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Amthal from "./component/Amthal";
import Header from "./component/Header";
import Gallery from "./component/Gallery";
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Amthal" element={<Amthal />} />
      <Route path="/Gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
