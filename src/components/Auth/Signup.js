import React, { useState } from 'react';

const Signup = () => {
  const initialFormData = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      // If there are no errors, submit the form to the backend for further processing
      setIsSubmitting(true);

      try {
        // Make an API call to register the user here
        // Example using Axios:
        // const response = await axios.post('/api/signup', formData);
        // Handle success or error responses from the server

        // Reset the form on success
        setFormData(initialFormData);
      } catch (error) {
        // Handle API request errors
        console.error('Signup error:', error);
        setIsSubmitting(false);
      }
    } else {
      // If there are validation errors, display them
      setErrors(validationErrors);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    // Basic validation checks
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-danger">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
