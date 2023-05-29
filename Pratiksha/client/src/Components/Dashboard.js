import React from 'react'
import Sidebar from "./Sidebar";
import ButtonAppBar from "./AppBar";
import New from "./New"

const Dashboard = () => {
  return (
    <>
      <Sidebar /> 
      <ButtonAppBar/>
      <New/>
    </>
  )
}

export default Dashboard