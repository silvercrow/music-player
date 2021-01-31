import firebase from 'firebase/app';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, MenuItem, SingOutButton } from './styles';

const Navbar: React.FC = () => {
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <Container>
        <Logo>Audio EQ</Logo>
        <Menu>
          <MenuItem>
            <Link to="/">Player</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/guests">Guests</Link>
          </MenuItem>
          <MenuItem>
            <SingOutButton onClick={handleSignOut}>Sign Out</SingOutButton>
          </MenuItem>
        </Menu>
      </Container>
    </>
  );
};

export default Navbar;
