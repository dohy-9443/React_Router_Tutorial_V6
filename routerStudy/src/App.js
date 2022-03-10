import React from 'react';
import { Routes, Route } from "react-router-dom";

/* page */
import MainPage from './views/main/MainPage';
import SubPage from './views/sub/SubPage';
import Anything from './views/mypage/Anything';

export default function App(){

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="sub" element={<SubPage />} />
      <Route path='anything/*' element={<Anything />} />
    </Routes>
  );
}