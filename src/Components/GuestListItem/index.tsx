import moment from 'moment';
import React from 'react';
import { Time } from 'tone/build/esm/core/type/Units';
import { ListItem, Info } from './styles';

interface UserProps {
  ID: number;
  CreatedAt: Time;
  UpdatedAt: Time;
  DeletedAt: Time;
  firebase_uid: string;
  name: string;
  email: string;
}

const GuestlistItem: React.FC<UserProps> = (props) => {
  const createTime = moment(String(props.CreatedAt)).format('DD-MMM-YYYY HH:mm:ss');
  const updatedTime = moment(String(props.UpdatedAt)).format('DD-MMM-YYYY HH:mm:ss');
  return (
    <ListItem>
      <Info>ID: {props.ID}</Info>
      <Info>Name: {props.name}</Info>
      <Info>Email: {props.email}</Info>
      <Info>Create Time: {createTime}</Info>
      <Info>Update Time: {updatedTime}</Info>
    </ListItem>
  );
};

export default GuestlistItem;
