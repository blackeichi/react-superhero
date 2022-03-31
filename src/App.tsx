import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componens/Header";
import "./App.css";
import Home from "./Home";
import Marvel from "./Marvel";
import Search from "./Search";
import { useRecoilValue } from "recoil";
import { searchState } from "./atom";
import Comic from "./Comic";

function App() {
  const search = useRecoilValue(searchState);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home></Home>}></Route>
          <Route path={"/marvel"} element={<Marvel></Marvel>}></Route>
          <Route path={"/marvel/:Id"} element={<Marvel></Marvel>}></Route>
          <Route path={"/search"} element={<Search></Search>}></Route>
          <Route path={`/search/:Id`} element={<Search></Search>}></Route>
          <Route path={"/comic"} element={<Comic></Comic>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
