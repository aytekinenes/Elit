import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from '../pages/Blogs/Blog';
import BlogLed from '../pages/Blogs/BlogLed';
import BlogLedScreen from '../pages/Blogs/BlogLedScreen';
import BlogPixelResolution from '../pages/Blogs/BlogPixelResolution';
import BlogPitchler from '../pages/Blogs/BlogPitchler';
import BlogViewingDistance from '../pages/Blogs/BlogViewingDistance';
import BlogModuls from '../pages/Blogs/BlogModuls';
import BlogSizeOption from '../pages/Blogs/BlogSizeOption';
import BlogInternetControl from '../pages/Blogs/BlogInternetControl';
import BlogHdPlayerUse from '../pages/Blogs/BlogHdPlayerUse';
import BlogUseArea from '../pages/Blogs/BlogUseArea';
import Index from '../pages/Index';
import AppBar from "../components/AppBar";


function AppRouter() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/led-nedir" element={<BlogLed />} />
          <Route path="/led-ekran-nedir" element={<BlogLedScreen />} />
          <Route path="/piksel-çozunurluk" element={<BlogPixelResolution />} />
          <Route path="/pitchler" element={<BlogPitchler />} />
          <Route path="/izleme-mesafesi" element={<BlogViewingDistance />} />
          <Route path="/moduller" element={<BlogModuls />} />
          <Route path="/blog-secenekleri" element={<BlogSizeOption />} />
          <Route path="/internet-uzerinden-kontrol" element={<BlogInternetControl />} />
          <Route path="/hd-player-kullanimi" element={<BlogHdPlayerUse />} />
          <Route path="/kullanim-alanlari" element={<BlogUseArea />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;