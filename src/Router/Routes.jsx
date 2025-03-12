import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default Routers;
