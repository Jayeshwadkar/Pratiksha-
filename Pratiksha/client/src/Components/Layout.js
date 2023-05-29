import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar/>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
