import React from 'react';

import { Menu, Header, Logo, Container1, Container2 } from './styles';
import Cart from '../Cart';
import Search from '../Search';

import logo from '~/assets/images/logo.png';

function HeaderDesktop() {
  return (
    <Header name="header">
      <Container1>
        <Menu />
        <Logo src={logo} />
        <Cart />
      </Container1>
      <Container2>
        <Search />
      </Container2>
    </Header>
  );
}

export default HeaderDesktop;
