import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogStore } from "../store/authBlog.store.js";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { createBlog, loading, error } = useBlogStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog(title, content);
    if (!error) {
      navigate("/"); // Redirect on success
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white shadow-md rounded p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Create a New Blog Post</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded mb-4 h-64"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
