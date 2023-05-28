import React from 'react'
import New from '../../Components/New'
import ButtonAppBar from '../../Components/AppBar'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

const Employe = () => {
  return (
    <>
        <h1>Employe</h1>
        <Navbar/>
        <Sidebar/>
        <ButtonAppBar/>
        <New/>
        </>
  )
}

export default Employe