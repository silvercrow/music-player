import firebase from 'firebase/app';
import { config } from './config';
import 'firebase/auth';
import store from '../Redux/store';

const myFirebase = firebase.initializeApp(config);

export const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
};

export default myFirebase;
