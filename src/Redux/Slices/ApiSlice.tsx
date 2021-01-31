import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Time } from 'tone/build/esm/core/type/Units';
import { ApiThunk } from '../store';

const ApiURL = 'https://interviews-backend-api.herokuapp.com/api/v1/';
const UsersAPI = 'users'; // get and post

interface KeyData {
  ID: number;
  CreatedAt: Time;
  UpdatedAt: Time;
  DeletedAt: Time;
  key: string;
}
interface User {
  ID: number;
  CreatedAt: Time;
  UpdatedAt: Time;
  DeletedAt: Time;
  firebase_uid: string;
  name: string;
  email: string;
}

export interface ConchaApiState {
  apiKey: KeyData;
  userList: User[];
}

const initialState: ConchaApiState = {
  apiKey: {
    ID: 456,
    CreatedAt: '2021-01-29T04:27:53.939251709Z',
    UpdatedAt: '2021-01-29T04:27:53.939251709Z',
    DeletedAt: '2021-01-29T04:27:53.939251709Z',
    key: '5MSvx-GdbKO4OXMwlSGTfTky1QgyVkSk',
  } as KeyData,
  userList: [],
};

const ConchaApi = createSlice({
  name: 'ConchaAPI',
  initialState,
  reducers: {
    setAPIKey: (state, { payload }: PayloadAction<KeyData>) => {
      state.apiKey = payload;
    },
    setUsers: (state, { payload }: PayloadAction<User[]>) => {
      state.userList = payload;
    },
  },
});

export const { setAPIKey, setUsers } = ConchaApi.actions;
export default ConchaApi.reducer;
export const ConchApiSelector = (state: { ConchaApiStore: ConchaApiState }) => state.ConchaApiStore;

// Api

export const getUsers = (apikey: string): ApiThunk => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ApiURL + UsersAPI, {
        headers: {
          Authorization: apikey,
        },
      });
      dispatch(setUsers(response.data));
    } catch (error) {
      console.error('User retrieve ERROR:', error);
    }
  };
};

export const saveUser = (apikey: string, uid: string, email: string, name: string): ApiThunk => {
  const data = JSON.stringify({
    firebase_uid: uid,
    email: email,
    name: name,
  });
  return async () => {
    try {
      await axios.post(ApiURL + UsersAPI, data, {
        headers: {
          Authorization: apikey,
        },
      });
    } catch (error) {
      console.error('Api Post SaveUser ERROR:', error);
    }
  };
};
