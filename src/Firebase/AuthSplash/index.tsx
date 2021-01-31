import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import Loading from '../../Components/Loading';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthSplash: React.FC = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = useSelector((state: any) => state.firebase.auth);
  if (!isLoaded(auth)) return <Loading />;
  return props.children;
};

export default AuthSplash;
