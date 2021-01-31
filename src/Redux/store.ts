import { configureStore, Action, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { constants as rfConstants } from 'redux-firestore';
import { ThunkAction } from 'redux-thunk';
import { ConchaApiState } from './Slices/ApiSlice';
import ConchaApiReducer from './Slices/ApiSlice';
import AudioEQSliceReducer from './Slices/AudioEQSlice';
import { AudioEQState } from './Slices/AudioEQSlice';
import { firebaseReducer, FirebaseReducer, getFirebase, actionTypes as rrfActionTypes } from 'react-redux-firebase';

export type AppThunk = ThunkAction<void, AudioEQState, unknown, Action<string>>;
export type ApiThunk = ThunkAction<void, ConchaApiState, unknown, Action<string>>;

const extraArgument = {
  getFirebase,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        ...Object.keys(rfConstants.actionTypes).map((type) => `${rfConstants.actionsPrefix}/${type}`),
        ...Object.keys(rrfActionTypes).map((type) => `@@reactReduxFirebase/${type}`),
      ],
      ignoredPaths: ['firebase', 'firestore'],
    },
    thunk: {
      extraArgument,
    },
  }),
];

const rootReducer = combineReducers({
  AudioEQStore: AudioEQSliceReducer,
  ConchaApiStore: ConchaApiReducer,
  firebase: firebaseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    AudioEQStore: AudioEQSliceReducer,
    ConchaApiStore: ConchaApiReducer,
    firebase: firebaseReducer,
  },
  middleware: middleware,
});

export default store;
