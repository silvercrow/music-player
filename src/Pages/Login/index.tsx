import firebase from 'firebase/app';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import myFirebase from '../../Firebase';
import 'firebase/auth';
import { ConchApiSelector, saveUser } from '../../Redux/Slices/ApiSlice';
import {
  Page,
  Container,
  Wrapper,
  LoginBox,
  Title,
  LoginButtonContainer,
  GoogleButton,
  Icon,
  ButtonText,
} from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { apiKey } = useSelector(ConchApiSelector);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = useSelector((state: any) => state.firebase.auth);
  const isLoggedIn = isLoaded(auth) && !isEmpty(auth);
  const handleSignIn = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    myFirebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((user) => {
        dispatch(
          saveUser(apiKey.key, String(user.user?.uid), String(user.user?.email), String(user.user?.displayName)),
        );
        history.push('/');
      })
      .catch((error) => {
        console.log('Error at sign in with google', error);
      });
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <Page>
      <Container>
        <Wrapper>
          <LoginBox>
            <Title>Sign In</Title>
            <LoginButtonContainer>
              <GoogleButton onClick={handleSignIn}>
                <Icon />
                <ButtonText>Sign in with Google</ButtonText>
              </GoogleButton>
            </LoginButtonContainer>
          </LoginBox>
        </Wrapper>
      </Container>
    </Page>
  );
};

export default Login;
