import React from 'react';
import { Container, FooterNav, FooterNavItem } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterNav>
        <FooterNavItem>David Balan &#0169;</FooterNavItem>
      </FooterNav>
    </Container>
  );
};

export default Footer;
