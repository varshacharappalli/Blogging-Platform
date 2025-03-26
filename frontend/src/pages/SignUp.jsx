import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-white font-serif flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wide mb-4">BLOGLY</h1>
          <p className="text-xl text-gray-600">Create Your Account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-black pb-2 focus:outline-none text-xl placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-black pb-2 focus:outline-none text-xl placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-black pb-2 focus:outline-none text-xl placeholder-gray-500"
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Bio (optional)"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border-b border-black pb-2 focus:outline-none text-xl placeholder-gray-500 h-24"
              maxLength="250"
            />
          </div>

          <button 
            type="submit" 
            className="w-full border-2 border-black text-black py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Sign Up
          </button>

          <div className="text-center pt-6">
            <p className="text-gray-600">
              Already have an account? {' '}
              <Link to="/signIn" className="text-black hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;