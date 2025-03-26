import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../store/authUser.store.js';

function HomePage() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/main'); // Redirect to MainPage if not authenticated
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Simulated blog fetch
    setBlogs([
      { _id: 1, title: "Managing your business made easy", content: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences...", createdAt: "2023-03-21" },
      { _id: 2, title: "Brand design 101: getting ahead", content: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences...", createdAt: "2023-03-21" }
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold">BLOG PLATFORM</div>
          <div className="flex space-x-4">
            <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700">Logout</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-10 px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Latest Blogs</h1>
          <Link to="/createBlog" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Create New Blog</Link>
        </div>

        {loading ? (
          <div className="text-center text-gray-500 text-lg">Loading blogs...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{blog.title}</h2>
                <p className="text-gray-600 mb-4">
                  {blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Created: {new Date(blog.createdAt).toLocaleDateString()}</span>
                  <Link to={`/blog/${blog._id}`} className="text-blue-600 hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
