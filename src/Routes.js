import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default Rotas;
