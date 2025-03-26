import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authUser.store.js';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const navigate = useNavigate();
  const { signUp, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(username, email, password, bio);
    if (!error) navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Join Our Blogging Community</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required 
          />
          <textarea 
            placeholder="Bio (optional)" 
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            maxLength="250"
          />
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;