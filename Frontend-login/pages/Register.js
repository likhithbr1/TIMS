import React, { useState } from "react";
import API from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
      });
      alert(data.message || "Registration successful!");
    } catch (error) {
      alert(error.response?.data.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #ff7eb3, #ff758c, #ff6a66, #ff7555)",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Register to Telecom Inventory Management System
        </h1>
        <form onSubmit={handleRegister}>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
