import { apiRequest } from "@/lib/queryClient";
import type { PortfolioImage, InsertPortfolioImage } from "@shared/schema";

export const portfolioService = {
  async getImages(category?: string): Promise<PortfolioImage[]> {
    const url = category 
      ? `/api/portfolio/images?category=${category}` 
      : "/api/portfolio/images";
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch portfolio images");
    return response.json();
  },

  // Admin functions
  async createImage(image: InsertPortfolioImage): Promise<PortfolioImage> {
    await apiRequest("POST", "/api/admin/portfolio/images", image);
    return {} as PortfolioImage; // The response is handled by the mutation
  },

  async updateImage(id: number, image: Partial<InsertPortfolioImage>): Promise<PortfolioImage> {
    await apiRequest("PUT", `/api/admin/portfolio/images/${id}`, image);
    return {} as PortfolioImage; // The response is handled by the mutation
  },

  async deleteImage(id: number): Promise<void> {
    await apiRequest("DELETE", `/api/admin/portfolio/images/${id}`);
  },
};
