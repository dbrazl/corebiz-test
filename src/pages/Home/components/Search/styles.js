import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 32px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    width: 500px;
  }

  @media (min-width: 1440px) {
    width: 718px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  object-fit: contain;
`;

export const Field = styled.input`
  width: 100%;
  font-size: 13px;

  &::placeholder {
    color: #7a7a7a;
  }
`;
