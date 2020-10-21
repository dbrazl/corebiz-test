import React from 'react';

import { Container, Icon, Badge } from './styles';

import cart from '../../../../assets/icons/cart.png';

function Cart() {
  return (
    <Container>
      <Icon src={cart} />
      <Badge>1</Badge>
    </Container>
  );
}

export default Cart;
