import React from 'react';
import PropTypes from 'prop-types';

import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';
import Banner from './components/Banner';
import MostSelled from './components/MostSelled';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function View({ width, banners, products }) {
  return (
    <>
      {width >= 1024 ? <HeaderDesktop /> : <HeaderMobile />}
      <Banner width={width} data={banners} />
      <MostSelled width={width} products={products} />
      <NewsLetter />
      <Footer />
    </>
  );
}

View.propTypes = {
  width: PropTypes.number,
  banners: PropTypes.array,
  products: PropTypes.array,
};

View.defaultProps = {
  width: window.innerWidth,
  banners: [],
  products: [],
};

export default View;
