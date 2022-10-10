import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../App.js';

const Table = () => {
  const { users, showWebsite, setShowWebsite } = useContext(userContext);
  const rightArrow = <> &rarr; </>;
  const downArrow = <> &darr; </>;

  const showHideEmail = (e) => {
    users.filter((user) => {
      const tempArr = [...showWebsite];
      if (Number(user.id) === Number(e.currentTarget.id)) {
        tempArr[Number(user.id - 1)] = !tempArr[Number(user.id - 1)];
        setShowWebsite([...tempArr]);
      }
    });
  };
  return (
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>username</td>
          <td>
            email
            <span>{showWebsite.includes(true) ? ' & website' : ''}</span>
          </td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>
                <Link to={`info/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.username}</td>
              <td>
                {user.email}
                <span id={user.id} onClick={showHideEmail}>
                  {showWebsite[user.id - 1] ? rightArrow : downArrow}
                </span>
                {showWebsite[user.id - 1] ? <span>{user.website}</span> : ''}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
