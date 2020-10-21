import styled from 'styled-components';

export const Header = styled.section`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 25px;
  object-fit: contain;

  @media (min-width: 1024px) {
    height: 41px;
  }
`;
