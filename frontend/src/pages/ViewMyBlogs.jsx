import React, { useEffect } from "react";
import { useBlogStore } from "../store/authBlog.store.js";

const ViewMyBlogs = () => {
  const { myBlogs, fetchMyBlogs, loading, error } = useBlogStore();

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">My Blogs</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {myBlogs.length === 0 && !loading && <p>You haven't written any blogs yet.</p>}
      <div className="space-y-4">
        {myBlogs.map((blog) => (
          <div key={blog._id} className="p-4 border rounded shadow-md bg-white">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>
            <p className="text-sm text-gray-500">By You</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMyBlogs;
