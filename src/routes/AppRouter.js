import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Index from '../pages/Index';
import AppBar from "../components/AppBar";


function AppRouter() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;