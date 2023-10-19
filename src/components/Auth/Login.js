import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Simulate a POST request to your backend for authentication.
      // Replace this with your actual API call.
      // Example using a simulated delay:
      // setTimeout(async () => {
      //   const response = await fetch('/api/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ email, password }),
      //   });
      //   const data = await response.json();

      //   if (response.ok) {
      //     // Authentication successful, you can redirect the user or update state.
      //     // For example, set a user context or redirect to the dashboard.
      //   } else {
      //     // Authentication failed, display an error message.
      //     setError('Login failed. Please check your credentials.');
      //   }
      // }, 1000); // Simulate a 1-second delay for the API call (remove in production).

      // Handle success or error responses from the server.
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
      <div className="mt-3">
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p>
          Forgot your password? <a href="/forgot-password">Forgot Password</a>
        </p>
        <button className="btn btn-light">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
