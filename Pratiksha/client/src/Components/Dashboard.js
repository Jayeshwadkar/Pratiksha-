import React from 'react'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ButtonAppBar from "./AppBar";
import New from "./New"

const Dashboard = () => {
  return (
    <>
    <Navbar />
      <Sidebar /> 
      <ButtonAppBar/>
      <New/>
    </>
  )
}

export default Dashboard