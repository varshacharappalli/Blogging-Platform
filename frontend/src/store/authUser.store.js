import { create } from 'zustand';
import { axiosInstance } from '../lib/utils.js';

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,

    signIn: async (email, password) => {
        try {
            const response = await axiosInstance.post('/auth/signIn', { email, password }, { withCredentials: true });
            set({ user: response.data.user, isAuthenticated: true, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Login failed' });
        }
    },

    signUp: async (username, email, password, bio) => {
        try {
            const response = await axiosInstance.post('/auth/signUp', { username, email, password, bio }, { withCredentials: true });
            set({ user: response.data.user, isAuthenticated: true, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Registration failed' });
        }
    },

}));
