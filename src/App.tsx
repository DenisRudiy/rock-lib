import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { DetailPage } from "./components/DetailPage/DetailPage";
import { AdminPage } from "./components/AdminPage/AdminPage";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
