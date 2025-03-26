import express from 'express';
import { createBlog, viewAllBlogs, viewMyBlogs } from '../routes.controllers/authBlog.controller.js';
import protectedRoute from '../middleware/authMiddleware.js';


const authBlogs=express.Router();

authBlogs.post('/createBlog',protectedRoute,createBlog);

authBlogs.get('/viewAllBlogs',protectedRoute,viewAllBlogs);

authBlogs.get('/viewMyBlogs',protectedRoute,viewMyBlogs);

export default authBlogs;