import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import AppBar from "./Components/AppBar";
import New from "./Components/New"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <AppBar/>
      <New/>
    </div>
  );
}

export default App;
