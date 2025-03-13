import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import SideNavbar from "../Components/SideNavbar/SideNavbar";

const MainLayout = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        {/* Side Navbar */}
        <div className="hidden md:block md:col-span-2 bg-violet-50">
          <SideNavbar />
        </div>
        {/* Content dashourd */}
        <div className="col-span-12 md:col-span-10 flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
