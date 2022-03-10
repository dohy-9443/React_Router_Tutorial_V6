import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

/* page */
import MainPage from './views/main/MainPage';
import SubPage from './views/sub/SubPage';
import Anything from './views/mypage/Anything';

import ProductDetailPage from './views/product/ProductDetailPage';
import ProductListPage from './views/product/ProductListPage';
import ProductTwo from './views/product/ProductTwo';
import ProductStar from './views/product/ProductStar';

export default function App(){

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='product' element={<ProductTwo />}> {/* 얘는 /product */}

        <Route index element={<ProductDetailPage />} /> {/* 얘가 인덱스임 */}
        <Route path=':listTitle' element={<ProductListPage />} /> {/* 얘는 product/:listTitle */}
        <Route path='1' element={<ProductStar />} /> {/* 얘는 /* */}  
      
      </Route>
      
    </Routes>
  );
}