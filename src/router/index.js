import React from "react";
import Registration from '../components/pages/loginPages/registration/registration';
import LoginPage from "../components/pages/loginPages/login/loginPage";
import { Routes, Route } from "react-router-dom";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/loginpage" element={<Registration/>} />
        <Route path="" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default RouterPage;
// Vs code commit
// Hello world
// Vs code commit
// Hello world
// Vs code commit
// Hello world
// Vs code commit
// Hello world
// Vs code commit
// Hello world
// Vs code commit
// Hello world
// Vs code commit
// Hello world
// Vs code commit
// Hello world