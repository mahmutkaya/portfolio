import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./contact/Contact";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/AboutMe" element={<AboutMe />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/Resume" element={<Resume />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
);

export default Router;