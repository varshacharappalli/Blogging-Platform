import Blog from "../models/blog-model.js";


export const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.id; 

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }

        const newBlog = new Blog({
            title,
            content,
            author: userId
        });

        await newBlog.save();

        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// View all blogs (public)
export const viewAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "username email");
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// View only the logged-in user's blogs
export const viewMyBlogs = async (req, res) => {
    try {
        const userId = req.user.id; // Get user ID from authentication middleware
        const blogs = await Blog.find({ author: userId });

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found for this user." });
        }

        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};