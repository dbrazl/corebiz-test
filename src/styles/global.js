import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
  }

  html, body {
    background: #fff;
  }

  button, p, a, input, h1, h2 {
    font-family: "Nunito";
    font-weight: 400;
  }
`;
