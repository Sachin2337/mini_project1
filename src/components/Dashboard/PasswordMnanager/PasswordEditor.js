import React, { useState } from 'react';

const PasswordEditor = ({ addPassword }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSavePassword = () => {
    if (!name.trim() || !username.trim() || !password.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const newPassword = {
      name: name,
      username: username,
      password: password,
    };

    addPassword(newPassword);

    // Clear the input fields
    setName('');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Create Password</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSavePassword}>Save Password</button>
    </div>
  );
};

export default PasswordEditor;