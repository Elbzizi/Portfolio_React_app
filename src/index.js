import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Amthal from "./component/Amthal";
import Header from "./component/Header";
import Gallery from "./component/Gallery";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Amthal" element={<Amthal />} />
      <Route path="/Gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
