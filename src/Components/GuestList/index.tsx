import React from 'react';
import { Time } from 'tone/build/esm/core/type/Units';
import GuestlistItem from '../GuestListItem';
import { GuestlistBox } from './styles';

interface User {
  ID: number;
  CreatedAt: Time;
  UpdatedAt: Time;
  DeletedAt: Time;
  firebase_uid: string;
  name: string;
  email: string;
}

interface GuestlistProps {
  users: User[];
}

const Guestlist: React.FC<GuestlistProps> = ({ users }: GuestlistProps) => {
  return (
    <GuestlistBox>
      {users.map((item, index: number) => {
        return (
          <GuestlistItem
            key={index}
            ID={item.ID}
            CreatedAt={item.CreatedAt}
            UpdatedAt={item.UpdatedAt}
            DeletedAt={item.DeletedAt}
            firebase_uid={item.firebase_uid}
            name={item.name}
            email={item.email}
          ></GuestlistItem>
        );
      })}
    </GuestlistBox>
  );
};

export default Guestlist;
