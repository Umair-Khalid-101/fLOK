import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGES IMPORT
import { HomePage } from "../pages/index";

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppNavigator;
