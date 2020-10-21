import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
  padding-top: 24px;
  padding-bottom: 20px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.h2`
  font-size: 22px;
  font-family: 'Lato';
  color: #000;
  font-weight: 700;

  @media (min-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: calc(100% - 16px);
  height: 48px;
  color: #000;
  font-size: 12px;
  font-family: 'Lato';
  font-weight: 700;
  padding-left: 16px;
  border-radius: 5px;
  border: ${props => (props.border ? 1 : 0)}px solid #d7182a;

  &::placeholder {
    color: #000;
  }

  @media (min-width: 1024px) {
    width: 280px;
  }
`;

export const Error = styled.span`
  margin-top: 5px;
  color: ${props => (props.color ? '#fff' : '#d7182a')};
  font-family: 'Lato';
  font-size: 12px;
  font-weight: 400;
`;

export const Button = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Lato';
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: ${props => (props.width ? props.width : 140)}px;
    margin-left: 20px;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const SuccessTitle = styled.p`
  font-size: 12px;
  font-family: 'Lato';
  text-align: center;
  font-weight: 700;
`;

export const SuccessSubtitle = styled.p`
  font-size: 12px;
  font-family: 'Lato';
  text-align: center;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 1024px) {
    width: auto;
    margin-top: 0px;
    margin-left: 20px;
  }
`;
