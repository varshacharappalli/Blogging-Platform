import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authUser.store.js";
import { useBlogStore } from "../store/authBlog.store.js";

function ViewAllBlogs() {
  const { isAuthenticated, logout } = useAuthStore();
  const { blogs, fetchAllBlogs, loading, error } = useBlogStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/main");
    } else {
      fetchAllBlogs();
    }
  }, [isAuthenticated, navigate, fetchAllBlogs]);

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">BLOGLY</h1>
        <nav className="space-x-6 text-gray-600">
          <Link to="/home" className="hover:text-black">HOME</Link>
          <Link to="/categories" className="hover:text-black">CATEGORIES</Link>
          <Link to="/about" className="hover:text-black">ABOUT ME</Link>
          <button
            onClick={logout}
            className="hover:text-black"
          >
            LOGOUT
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 mt-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">All Blogs</h2>
          
          {loading && (
            <div className="text-center text-gray-500 col-span-3">
              Loading blogs...
            </div>
          )}

          {error && (
            <div className="text-center text-red-500">
              {error}
            </div>
          )}

          {!loading && blogs.length === 0 && (
            <div className="text-center text-gray-500">
              No blogs available.
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border-b-2 border-black pb-6 hover:opacity-70 transition"
              >
                <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                <p className="text-gray-600 mb-4">
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + "..."
                    : blog.content}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <div className="text-gray-500">
                    By {blog.author?.username}
                  </div>
                  <Link
                    to={`/blog/${blog._id}`}
                    className="font-bold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Create Blog Button */}
        <div className="text-center">
          <Link
            to="/createBlog"
            className="inline-block border-2 border-black text-black px-10 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Create New Blog
          </Link>
        </div>
      </main>

      {/* Social Icons */}
      <footer className="container mx-auto px-6 py-8 mt-16 flex justify-center space-x-6 text-gray-600 border-t">
        <a href="#" className="hover:text-black">Facebook</a>
        <a href="#" className="hover:text-black">Twitter</a>
        <a href="#" className="hover:text-black">Pinterest</a>
        <a href="#" className="hover:text-black">Instagram</a>
      </footer>
    </div>
  );
}

export default ViewAllBlogs;