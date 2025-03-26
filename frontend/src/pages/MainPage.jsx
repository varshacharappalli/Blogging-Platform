import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authUser.store.js';

function MainPage() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Blog Platform</h1>
      <p className="text-gray-600 text-lg mb-4">Sign up or log in to start exploring amazing blogs!</p>
      <div className="flex space-x-4">
        <Link to="/signIn" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Sign In</Link>
        <Link to="/signUp" className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">Sign Up</Link>
      </div>
    </div>
  );
}

export default MainPage;
