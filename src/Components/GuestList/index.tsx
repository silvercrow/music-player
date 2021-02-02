import moment from 'moment';
import React from 'react';
import { User } from '../../Types/User';
import { TableBox, Table, Thead, TR, Tbody, TD } from './styles';

interface GuestlistProps {
  users: User[];
}

const converToTime = (timeData: string) => moment(timeData).format('DD MMM YYYY HH:mm:ss');

const Guestlist: React.FC<GuestlistProps> = ({ users }: GuestlistProps) => {
  return (
    <TableBox>
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
    </TableBox>
  );
};

export default Guestlist;
