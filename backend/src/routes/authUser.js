import express from 'express';
import { signIn, signUp } from '../routes.controllers/authUser.controllers.js';
import protectedRoute from '../middleware/authMiddleware.js';

const authRoutes=express.Router();

authRoutes.post('/signIn',signIn);

authRoutes.post('/signUp',signUp);

export default authRoutes;
