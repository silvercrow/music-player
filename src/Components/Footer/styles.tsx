// src/components/Navbar/styles.tsx
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  color: #f1f1f1;
  width: 100%;
  background: #46505f;
`;

export const FooterNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FooterNavItem = styled.div`
  margin: 30px 30px 0px 0px;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
