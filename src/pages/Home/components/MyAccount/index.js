import React from 'react';

import { Container, Icon, Text } from './styles';

import user from '~/assets/icons/user.png';

function MyAccount() {
  return (
    <Container>
      <Icon src={user} />
      <Text>Minha Conta</Text>
    </Container>
  );
}

export default MyAccount;
