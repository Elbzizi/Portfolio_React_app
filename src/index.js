import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Amthal from "./component/Amthal";
import Header from "./component/Header";
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Amthal" element={<Amthal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
