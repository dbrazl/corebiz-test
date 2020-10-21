import styled from 'styled-components';

export const Container = styled.div`
  width: 142px;
  min-width: 50px;
  height: 300px;
  position: relative;

  &:hover {
    background: #e6e8ea;
  }

  & + & {
    margin-left: 20px;
  }

  @media (min-width: 1024px) {
    width: 216px;
    height: 370px;
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
  color: ${props => (props.hack ? '#fff' : '#7a7a7a')};
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
  color: ${props => (props.hack ? '#fff' : '#7a7a7a')};
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 140px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  background: #000;
  margin: 0 auto;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 125px;
  }
`;

export const Flag = styled.div`
  background-image: url(${props => props.src});
  width: 72px;
  height: 72px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
`;
