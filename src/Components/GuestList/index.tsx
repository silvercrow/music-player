import moment from 'moment';
import React from 'react';
import { Time } from 'tone/build/esm/core/type/Units';
import { Table, Thead, TR, Tbody, TD } from './styles';

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

const converToTime = (timeData: string) => moment(timeData).format('DD MMM YYYY HH:mm:ss');

const Guestlist: React.FC<GuestlistProps> = ({ users }: GuestlistProps) => {
  return (
    <Table>
      <Thead>
        <TR>
          <TD>ID</TD>
          <TD>Name</TD>
          <TD>Email</TD>
          <TD>Created</TD>
          <TD>Updated</TD>
        </TR>
      </Thead>
      <Tbody>
        {users.map((item, index: number) => {
          return (
            <TR key={index}>
              <TD>{item.ID}</TD>
              <TD>{item.name}</TD>
              <TD>{item.email}</TD>
              <TD>{converToTime(String(item.CreatedAt))}</TD>
              <TD>{converToTime(String(item.UpdatedAt))}</TD>
            </TR>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default Guestlist;
