import React from 'react';
import { Outlet } from 'react-router-dom';

const ProductTwo = () => {
  return (
    <div>
      나는 상품 페이지

      <Outlet /> {/* 서브 라우트가 Outlet에 렌더링된다. */}
    </div>
  );
};

export default ProductTwo;