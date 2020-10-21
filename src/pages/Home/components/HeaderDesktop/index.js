import React from 'react';

import { Header, Container, Logo, Buttons } from './styles';
import Search from '../Search';
import MyAccount from '../MyAccount';
import Cart from '../Cart';

import logo from '~/assets/images/logo.png';

function HeaderDesktop({ width }) {
  return (
    <Header name="header">
      <Container>
        <Logo src={logo} />
        <Search />
        <Buttons>
          <MyAccount />
          <Cart />
        </Buttons>
      </Container>
    </Header>
  );
}

export default HeaderDesktop;
