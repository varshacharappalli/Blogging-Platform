import { create } from "zustand";
import { axiosInstance } from "../lib/utils";

export const useBlogStore = create((set) => ({
    blogs: [],
    myBlogs: [],
    loading: false,
    error: null,

    fetchAllBlogs: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get("/auth/Blog/viewAllBlogs");
            set({ blogs: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Failed to fetch blogs", loading: false });
        }
    },

    fetchMyBlogs: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get("/auth/Blog/viewMyBlogs");
            set({ myBlogs: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Failed to fetch your blogs", loading: false });
        }
    },

    createBlog: async (title, content) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.post("/auth/Blog/createBlog", { title, content });
            set((state) => ({ blogs: [...state.blogs, response.data.blog], loading: false }));
        } catch (error) {
            set({ error: error.response?.data?.message || "Failed to create blog", loading: false });
        }
    },
}));