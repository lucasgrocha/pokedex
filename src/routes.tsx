import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:searchTerm" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
