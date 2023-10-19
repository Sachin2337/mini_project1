import React from 'react';

const PasswordList = ({ passwords }) => {
  return (
    <div>
      <h2>Passwords</h2>
      <ul>
        {passwords.map((password, index) => (
          <li key={index}>
            <strong>Name:</strong> {password.name}<br />
            <strong>Username:</strong> {password.username}<br />
            <strong>Password:</strong> {password.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
