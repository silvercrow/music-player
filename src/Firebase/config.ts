import env from 'react-dotenv';

export const config = {
  apiKey: env.FIREBASEAPIKEY,
  authDomain: env.FIREBASEAUTHDOMAIN,
  databaseURL: env.FIREBASEDATABASEURL,
  projectId: env.FIREBASEPROJECTID,
  appId: env.FIREBASEAPPID,
  storageBucket: env.FIREBASESTORAGEBUCKET,
  messagingSenderId: env.FIREBASEMESSAGINGSENDERID,
};
