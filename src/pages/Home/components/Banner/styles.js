import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 320px;
  background: #424242;
  position: relative;

  @media (min-width: 1024px) {
    height: 430px;
  }
`;

export const NoData = styled.div`
  width: 100%;
  height: 320px;
  background: #424242;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 430px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 320px;
  position: relative;

  @media (min-width: 1024px) {
    height: 430px;
  }
`;

export const NoDataIcon = styled(FiX)`
  width: 50px;
  height: 50px;
  color: #fff;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #fff;
  margin-top: 20px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Filter = styled.div`
  background: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 320px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  z-index: 2;
  text-align: left;
  width: ${props => (props.width ? props.width : 200)}px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: #fff;
  z-index: 2;
  text-align: left;
  width: 300px;
`;

export const Box = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DesktopWrapper = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (min-width: 1024px) {
    height: 430px;
  }
`;

export const Vector = styled.div`
  width: 55%;
  height: 320px;
  background-image: url(${props => props.src});
  background-repeat: repeat-y;
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  @media (min-width: 1024px) {
    height: 430px;
  }

  @media (min-width: 1800px) {
    background-size: cover;
  }
`;

export const Image = styled.div`
  width: 50%;
  height: 320px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 0;

  @media (min-width: 1024px) {
    height: 430px;
  }
`;
