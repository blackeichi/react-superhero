import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componens/Header";
import "./App.css";
import Home from "./Home";
import Marvel from "./Marvel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home></Home>}></Route>
          <Route path={"/marvel"} element={<Marvel></Marvel>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
