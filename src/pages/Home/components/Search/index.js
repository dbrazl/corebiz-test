import React from 'react';

import { Container, Field, Icon } from './styles';

import search from '~/assets/icons/search.png';

function Search() {
  return (
    <Container>
      <Field placeholder="O que está procurando?" />
      <Icon src={search} />
    </Container>
  );
}

export default Search;
