import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactStars from 'react-rating-stars-component';

import {
  Container,
  Photo,
  Name,
  StarWrapper,
  ListPrice,
  OfferPrice,
  Installments,
  Button,
  Flag,
} from './styles';

import flag from '~/assets/images/flag.png';

function Item({ imageUrl, name, stars, listPrice, offerPrice, installments }) {
  const [enter, setEnter] = useState(false);

  function toCurrency(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const listPriceFormatted =
    listPrice != null ? `por ${toCurrency(listPrice / 100)}` : '_';

  const offerPriceFormatted =
    offerPrice != null ? toCurrency(offerPrice / 100) : 'R$ 0,00';

  const offer = offerPrice < listPrice;

  return (
    <Container
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      {offer && <Flag src={flag} />}
      <Photo src={imageUrl} />
      <Name>{name}</Name>
      <StarWrapper>
        <ReactStars
          isHalf={true}
          count={5}
          size={24}
          value={stars}
          activeColor="#F8475F"
          edit={false}
        />
      </StarWrapper>
      <ListPrice hack={listPrice == null}>{listPriceFormatted}</ListPrice>
      <OfferPrice>por {offerPriceFormatted}</OfferPrice>
      {installments.length > 0 ? (
        <Installments>
          ou em {installments[0].quantity}x de{' '}
          {toCurrency(installments[0].value / 100 / installments[0].quantity)}
        </Installments>
      ) : (
        <Installments hack={listPrice == null}>_</Installments>
      )}
      {enter && <Button>COMPRAR</Button>}
    </Container>
  );
}

Item.defaultProps = {
  imageUrl: '',
  name: 'Nome do produto',
  listPrice: 0,
  offerPrice: 0,
  stars: 0,
  installments: [],
};

Item.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  listPrice: PropTypes.number,
  offerPrice: PropTypes.number,
  stars: PropTypes.number,
  installments: PropTypes.array,
};

export default Item;
