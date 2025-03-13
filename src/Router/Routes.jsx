import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import SignupForm from "../Pages/SingUp/SignupForm";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="singup" element={<SignupForm />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
