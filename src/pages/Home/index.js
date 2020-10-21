import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { indexProductsRequest } from '~/store/modules/products/actions';

import View from './view';

import image_1 from '~/assets/images/banner/image-1.png';

function Home() {
  const products = useSelector(state => state.products.products);
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const banners = [
    {
      src: image_1,
      label: 'Olá, o que você está buscando?',
      title: 'Criar ou migrar o seu e-commerce?',
    },
    {
      src: image_1,
      label: 'Olá, o que você está buscando?',
      title: 'Criar ou migrar o seu e-commerce?',
    },
  ];

  useEffect(() => {
    window.addEventListener('resize', onResize);
    dispatch(indexProductsRequest());

    return () => window.removeEventListener('resize', onResize);
  }, []);

  function onResize({ target: { innerWidth } }) {
    setWidth(innerWidth);
  }

  return <View width={width} banners={banners} products={products} />;
}

export default Home;
