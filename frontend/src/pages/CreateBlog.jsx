import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBlogStore } from "../store/authBlog.store.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  ["clean"],
];

const modules = { toolbar: toolbarOptions };

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { createBlog, loading, error } = useBlogStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog(title, content);
    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-white font-serif flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wide mb-4">BLOGLY</h1>
          <p className="text-xl text-gray-600">Create Your Blog Post</p>
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
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b border-black pb-2 focus:outline-none text-2xl placeholder-gray-500"
              required
            />
          </div>

          <div className="h-64">
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              theme="snow"
              placeholder="Compose an epic..."
              className="h-full"
            />
          </div>

          <div className="flex justify-between items-center mt-6 pb-6 relative">
  <Link to="/" className="text-gray-600 hover:text-black">
    Cancel
  </Link>
  <button
    type="submit"
    className="border-2 border-black text-black py-3 px-8 rounded-full hover:bg-black hover:text-white transition"
    disabled={loading}
    style={{ position: "relative", bottom: "-20px" }} // Ensures spacing
  >
    {loading ? "Publishing..." : "Publish"}
  </button>
</div>


        </form>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Your words have the power to inspire, inform, and connect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
