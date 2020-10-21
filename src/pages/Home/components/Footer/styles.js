import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #000;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
  padding-top: 24px;
  padding-bottom: 20px;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 50px;
  }

  @media (min-width: 1024px) {
    & + & {
      margin-top: 0px;
    }
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
`;

export const Bar = styled.div`
  width: 32px;
  height: 5px;
  margin-top: 10px;
  background: #fff;
`;

export const Label = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  margin-top: 10px;
`;

export const ContactMedium = styled.div`
  width: 175px;
  height: 18px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const Icon = styled.img`
  width: 18px;
  object-fit: contain;
`;

export const Message = styled.p`
  font-size: 12px;
  font-family: 'Nunito';
  color: #000;
  margin-left: 20px;
  line-height: 12px;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  @media (min-width: 1024px) {
    width: 200px;
    padding: 0px 0px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  object-fit: contain;
`;
