import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 350px;

  @media (min-width: 1024px) {
    height: 450px;
  }
`;

export const Container = styled.div`
  width: calc(100% - 40);
  height: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 25px;
  padding: 0 20px;

  @media (min-width: 1024px) {
    width: 65%;
    height: 500px;
  }
`;

export const Box = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    height: 370px;
  }
`;

export const Item = styled.div`
  width: 142px;
  min-width: 50px;
  height: 263px;

  &:hover {
    background: #e6e8ea;
  }

  & + & {
    margin-left: 20px;
  }

  @media (min-width: 1024px) {
    width: 216px;
    height: 355px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 122px;
  background: #eee;

  @media (min-width: 1024px) {
    height: 200px;
  }
`;

export const StarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 900;
  color: #000;
`;

export const Bar = styled.div`
  width: 65px;
  height: 5px;
  background: #c0c0c0;
  margin-top: 5px;
`;

export const BoxTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.p`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #7a7a7a;
`;

export const ListPrice = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #7a7a7a;
  text-align: center;
`;

export const OfferPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

export const Installments = styled.p`
  font-size: 11px;
  font-weight: 400;
  color: #7a7a7a;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 125px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  background: #000;
  margin: 0 auto;
`;
