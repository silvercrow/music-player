import { Time } from 'tone/build/esm/core/type/Units';
export interface User {
  ID: number;
  CreatedAt: Time;
  UpdatedAt: Time;
  DeletedAt: Time;
  firebase_uid: string;
  name: string;
  email: string;
}
