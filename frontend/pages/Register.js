import React, { useState } from 'react';
import API from '../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', { name, email, password });
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded w-full mb-4 p-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="border border-gray-300 rounded w-full mb-4 p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="border border-gray-300 rounded w-full mb-4 p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
