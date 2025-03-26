import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; // Import cookie-parser
import authRoutes from './routes/authUser.js'; 
import authBlogs from './routes/authBlog.js';
import { mongo_db } from "./lib/db.js";
import cors from 'cors';

dotenv.config();
mongo_db();

const app = express(); 

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true 
  }));

// Middleware
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser to handle cookies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth/Blog', authBlogs);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
