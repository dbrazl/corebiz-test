import React from 'react';
import PropTypes from 'prop-types';

// import Scrollbar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Item from '../Item';

import {
  Section,
  Container,
  Box,
  Wrapper,
  BoxTitle,
  Title,
  Bar,
} from './styles';

function MostSelled({ width, products }) {
  function renderItemsMobile() {
    let items = [];

    for (let i = 0; i < products.length; i = i + 2) {
      items.push(
        <Wrapper key={`${i}`}>
          {products[0 + i] != null && (
            <Item
              imageUrl={products[0 + i].imageUrl}
              installments={products[0 + i].installments}
              listPrice={products[0 + i].listPrice}
              name={products[0 + i].productName}
              offerPrice={products[0 + i].price}
              stars={products[0 + i].stars}
            />
          )}
          {products[1 + i] != null && (
            <Item
              imageUrl={products[1 + i].imageUrl}
              installments={products[1 + i].installments}
              listPrice={products[1 + i].listPrice}
              name={products[1 + i].productName}
              offerPrice={products[1 + i].price}
              stars={products[1 + i].stars}
            />
          )}
        </Wrapper>
      );
    }

    return items;
  }

  function renderItemsDesktop() {
    let items = [];

    for (let i = 0; i < products.length; i = i + 4) {
      items.push(
        <Wrapper key={`${i}`}>
          {products[0 + i] != null && (
            <Item
              imageUrl={products[0 + i].imageUrl}
              installments={products[0 + i].installments}
              listPrice={products[0 + i].listPrice}
              name={products[0 + i].productName}
              offerPrice={products[0 + i].price}
              stars={products[0 + i].stars}
            />
          )}
          {products[1 + i] != null && (
            <Item
              imageUrl={products[1 + i].imageUrl}
              installments={products[1 + i].installments}
              listPrice={products[1 + i].listPrice}
              name={products[1 + i].productName}
              offerPrice={products[1 + i].price}
              stars={products[1 + i].stars}
            />
          )}
          {products[2 + i] != null && (
            <Item
              imageUrl={products[2 + i].imageUrl}
              installments={products[2 + i].installments}
              listPrice={products[2 + i].listPrice}
              name={products[2 + i].productName}
              offerPrice={products[2 + i].price}
              stars={products[2 + i].stars}
            />
          )}
          {products[3 + i] != null && (
            <Item
              imageUrl={products[3 + i].imageUrl}
              installments={products[3 + i].installments}
              listPrice={products[3 + i].listPrice}
              name={products[3 + i].productName}
              price={products[3 + i].price}
              stars={products[3 + i].stars}
            />
          )}
        </Wrapper>
      );
    }

    return items;
  }

  return (
    <Section name="products">
      <Container>
        <BoxTitle>
          <Title>Mais Vendidos</Title>
          <Bar />
        </BoxTitle>
        <Box>
          <Carousel
            name="banner"
            showStatus={false}
            showThumbs={false}
            interval={50}
            showArrows={true}
          >
            {width >= 1024 ? renderItemsDesktop() : renderItemsMobile()}
          </Carousel>
        </Box>
      </Container>
    </Section>
  );
}

MostSelled.propTypes = {
  width: PropTypes.number,
  products: PropTypes.array,
};

MostSelled.defaultProps = {
  width: window.innerWidth,
  products: [],
};

export default MostSelled;
