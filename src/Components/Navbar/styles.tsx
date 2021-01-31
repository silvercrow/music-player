import styled from 'styled-components';
import LogoImage from './img/logo.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  color: #46505f;
  z-index: 50;
  background-color: #ffffff;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.08);
`;

export const Logo = styled.div`
  background: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: 30px;
  margin-left: 20px;
  padding-left: 40px;
  padding-top: 4px;
  height: 30px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: auto 32px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #46505f;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  margin-right: 30px;
  font-size: 1em;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: auto 32px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #46505f;
  & a:link {
    color: #46505f;
    text-decoration: none;
  }
  & a:visited {
    color: #46505f;
    text-decoration: none;
  }

  & a:hover {
    color: #46505f;
    text-decoration: none;
  }

  & a:active {
    color: #46505f;
    text-decoration: none;
  }
`;

export const SingOutButton = styled.button`
  color: #ffff;
  background-color: red;
  border-radius: 20px;
  border: solid 1px #0000;
  padding: 10px;
  font-weight: inherit;
`;
