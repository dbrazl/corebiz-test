import styled from 'styled-components';

export const Header = styled.section`
  width: 100%;
  height: 80px;
  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const Logo = styled.img`
  height: 25px;
  object-fit: contain;
  cursor: pointer;

  @media (min-width: 1024px) {
    height: 41px;
  }
`;

export const Buttons = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
