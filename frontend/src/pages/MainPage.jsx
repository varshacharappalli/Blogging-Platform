import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authUser.store.js';

function MainPage() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">BLOGLY</h1>
        <nav className="space-x-6 text-gray-600">
          <a href="#" className="hover:text-black">HOME</a>
          <a href="#" className="hover:text-black">CATEGORIES</a>
          <a href="#" className="hover:text-black">ABOUT ME</a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 mt-16 flex items-center">
        <div className="w-1/2 pr-16">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Discover. Create. Share.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Your platform for expressing thoughts, sharing stories, and connecting with the world.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/signIn" 
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Sign In
            </Link>
            <Link 
              to="/signUp" 
              className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
        
      </main>

      {/* Social Icons */}
      <footer className="fixed bottom-8 right-8 flex space-x-4 text-gray-600">
        <a href="#" className="hover:text-black">Facebook</a>
        <a href="#" className="hover:text-black">Twitter</a>
        <a href="#" className="hover:text-black">Pinterest</a>
        <a href="#" className="hover:text-black">Instagram</a>
      </footer>
    </div>
  );
}

export default MainPage;