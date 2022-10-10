import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../App.js';

const Info = () => {
  const { users, setUsers } = useContext(userContext);
  const { id } = useParams();
  console.log(id);
  return (
    <div className="personal-info">
      <h1>NAME: {users[id - 1].name}</h1>
      <p>website: {users[id - 1].website}</p>
      <p>phone: {users[id - 1].phone}</p>
      <p>company: {users[id - 1].company.name}</p>
    </div>
  );
};

export default Info;
