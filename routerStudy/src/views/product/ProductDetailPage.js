import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {

  const urlData = [
    {url: '/product', title: 'product'},
    {url: '/product/list', title: 'product/:listTitle'},
    {url: '/product/1', title: 'product 1로감'}
  ]

  const navigator = useNavigate();

  return (
    <div>
      <h2>link로 url 이동해보기</h2>
      <ul>
        {
          urlData.map((item, index) => {
            const {url, title} = item
            return (
              <li key={index}>
                <Link to={url}>{title}</Link>
              </li>
            )
          })
        }
        <li 
          onClick={
            () => {
              navigator('/'); // history.push() 임
            }
          }>main</li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;