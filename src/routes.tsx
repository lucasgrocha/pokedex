import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
