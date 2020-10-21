import React, { useState } from 'react';

import {
  Container,
  InputContainer,
  Title,
  Input,
  Button,
  SuccessTitle,
  SuccessSubtitle,
  Error,
  Wrapper,
} from './styles';

import { useDispatch, useSelector } from 'react-redux';
import {
  subscribeNewsletterRequest,
  resetStatusSuccess,
} from '~/store/modules/newsletter/actions';

function NewsLetter() {
  const success = useSelector(state => state.newsletter.status.success);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);

  const dispatch = useDispatch();

  function submit() {
    if (name == '') setEmptyName(true);
    if (email == '') setEmptyEmail(true);

    if (name != '' && email != '') {
      const body = {
        name,
        email,
      };

      dispatch(subscribeNewsletterRequest(body));
      setName('');
      setEmail('');
    }
  }

  function onChangeName(event) {
    if (emptyName) setEmptyName(false);
    setName(event.target.value);
  }

  function onChangeEmail(event) {
    if (emptyEmail) setEmptyEmail(false);
    setEmail(event.target.value);
  }

  function renderForm() {
    return (
      <>
        <Title>Participe da nossa news com promoções e novidades!</Title>
        <InputContainer>
          <Wrapper>
            <Input
              placeholder="Digite seu nome"
              value={name}
              onChange={onChangeName}
              border={emptyName}
            />
            {emptyName ? (
              <Error>Preencha com seu nome completo</Error>
            ) : (
              <Error hack={true}>_</Error>
            )}
          </Wrapper>
          <Wrapper>
            <Input
              placeholder="Digite seu e-mail"
              value={email}
              onChange={onChangeEmail}
              border={emptyEmail}
            />
            {emptyEmail ? (
              <Error>Preencha com seu e-mail válido</Error>
            ) : (
              <Error hack={true}>_</Error>
            )}
          </Wrapper>
          <Button onClick={submit}>Eu quero!</Button>
        </InputContainer>
      </>
    );
  }

  function renderSuccessMessage() {
    return (
      <>
        <SuccessTitle>Seu e-mail foi cadastrado com sucesso!</SuccessTitle>
        <SuccessSubtitle>
          A partir de agora você receberá as novidade e ofertas esclusivas.
        </SuccessSubtitle>
        <Button width={328} onClick={() => dispatch(resetStatusSuccess())}>
          Cadastrar novo e-mail!
        </Button>
      </>
    );
  }

  return (
    <Container>{!success ? renderForm() : renderSuccessMessage()}</Container>
  );
}

export default NewsLetter;
