import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
