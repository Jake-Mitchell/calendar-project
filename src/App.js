import React from "react";
import { Calendar } from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log("App is running!");
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
    </Routes>
  );
}

export default App;
