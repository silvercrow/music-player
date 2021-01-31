import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Content } from './styles';

const BasicTemplate: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
};

export default BasicTemplate;
