import React, { useEffect } from "react";
import { useBlogStore } from "../store/authBlog.store.js";

const ViewAllBlogs = () => {
  const { blogs, fetchAllBlogs, loading, error } = useBlogStore();

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {blogs.length === 0 && !loading && <p>No blogs available.</p>}
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-4 border rounded shadow-md bg-white">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>
            <p className="text-sm text-gray-500">By {blog.author?.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllBlogs;
