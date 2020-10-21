import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const Header = styled.section`
  width: calc(100% - 40px);
  height: 80px;
  background: #fff;
  display: flex;
  padding: 0 20px
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Container1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Menu = styled(FiMenu)`
  width: 25px;
  height: 25px;
  color: #000;
`;

export const Logo = styled.img`
  height: 25px;
  object-fit: contain;
  cursor: pointer;

  @media (min-width: 1024px) {
    height: 41px;
  }
`;
