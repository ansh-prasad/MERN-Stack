import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";

function App() {
  return (
    <>
      {/* <Home/>
     <Course/> */}
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
