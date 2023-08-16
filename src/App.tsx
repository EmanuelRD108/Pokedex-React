import React from "react";
import { Home } from "./pages/Pokedex/home";
import { Inicio } from "./pages/Home/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Pokedex" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
