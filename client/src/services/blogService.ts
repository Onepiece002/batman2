import { apiRequest } from "@/lib/queryClient";
import type { BlogPost, InsertBlogPost, UpdateBlogPost } from "@shared/schema";

export const blogService = {
  async getPublishedPosts(limit = 10, offset = 0): Promise<BlogPost[]> {
    const response = await fetch(`/api/blog/posts?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error("Failed to fetch blog posts");
    return response.json();
  },

  async getPost(id: number): Promise<BlogPost> {
    const response = await fetch(`/api/blog/posts/${id}`);
    if (!response.ok) throw new Error("Failed to fetch blog post");
    return response.json();
  },

  async getPostBySlug(slug: string): Promise<BlogPost> {
    const response = await fetch(`/api/blog/posts/slug/${slug}`);
    if (!response.ok) throw new Error("Failed to fetch blog post");
    return response.json();
  },

  // Admin functions
  async getAllPosts(limit = 50, offset = 0): Promise<BlogPost[]> {
    const response = await fetch(`/api/admin/blog/posts?limit=${limit}&offset=${offset}`, {
      credentials: "include",
    });
    if (!response.ok) throw new Error("Failed to fetch admin blog posts");
    return response.json();
  },

  async createPost(post: InsertBlogPost): Promise<BlogPost> {
    await apiRequest("POST", "/api/admin/blog/posts", post);
    return {} as BlogPost; // The response is handled by the mutation
  },

  async updatePost(id: number, post: UpdateBlogPost): Promise<BlogPost> {
    await apiRequest("PUT", `/api/admin/blog/posts/${id}`, post);
    return {} as BlogPost; // The response is handled by the mutation
  },

  async deletePost(id: number): Promise<void> {
    await apiRequest("DELETE", `/api/admin/blog/posts/${id}`);
  },
};
