import React from 'react';

import {
  Container,
  Wrapper,
  Column,
  BoxTitle,
  Title,
  Bar,
  Label,
  ContactMedium,
  Icon,
  Message,
  Logos,
  Logo,
} from './styles';

import headphone from '~/assets/icons/headphone.png';
import mail from '~/assets/icons/mail.png';
import corebiz from '~/assets/images/corebiz.png';
import vtex from '~/assets/images/vtex.png';

function Fotter() {
  return (
    <Container>
      <Wrapper>
        <Column>
          <BoxTitle>
            <Title>Localização</Title>
            <Bar />
          </BoxTitle>
          <Label>Avenida Andrômeda, 2000. Bloco 6 e 8</Label>
          <Label>Alphavile SP</Label>
          <Label>brasil@corebiz.ag</Label>
          <Label>+55 11 3090 1039</Label>
        </Column>
        <Column>
          <ContactMedium>
            <Icon src={mail} />
            <Message>ENTRE EM CONTATO</Message>
          </ContactMedium>
          <ContactMedium>
            <Icon src={headphone} />
            <Message>FALE COM O NOSSO CONSULTOR ONLINE</Message>
          </ContactMedium>
        </Column>
        <Column>
          <Logos>
            <Logo src={corebiz} />
            <Logo src={vtex} />
          </Logos>
        </Column>
      </Wrapper>
    </Container>
  );
}

export default Fotter;
