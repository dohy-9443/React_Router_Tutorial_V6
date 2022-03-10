import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

/* page */
import MainPage from './views/main/MainPage';
import SubPage from './views/sub/SubPage';


export default function App(){

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="sub" element={<SubPage />} />
    </Routes>
  );
}