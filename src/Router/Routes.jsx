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
        <Route path="signUp" element={<h1>SingUP</h1>} />
        <Route path="12" element={<h1>one to two</h1>} />
        <Route path="23" element={<h1>two to three</h1>} />
        <Route path="34" element={<h1>three to four</h1>} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
