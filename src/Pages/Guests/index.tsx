import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GuestList from '../../Components/GuestList';
import BasicTemplate from '../../Components/Templates/BasicTemplate';
import { ConchApiSelector, getUsers } from '../../Redux/Slices/ApiSlice';

const Guests: React.FC = () => {
  const dispatch = useDispatch();
  const { apiKey, userList } = useSelector(ConchApiSelector);

  useEffect(() => {
    dispatch(getUsers(apiKey.key));
  }, [dispatch, apiKey.key]);

  return (
    <BasicTemplate>
      <h1>Guests</h1>
      <GuestList users={userList} />
    </BasicTemplate>
  );
};

export default Guests;
