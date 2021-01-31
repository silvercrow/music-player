import styled, { createGlobalStyle } from 'styled-components';

export const Content = styled.div`
  margin: 0;
  padding: 20px;
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline: none;
  }
 
  #root {
    margin: 0 auto;
  }
 
  html {
    font-family: Nunito Sans;
    background: #F3F4F6;
    letter-spacing: 0.03em;
    color: #000000;
  }

  img {
    width: 100%;
    height: 100%;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
  }
`;
