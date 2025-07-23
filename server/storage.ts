import {
  users,
  blogPosts,
  portfolioImages,
  contactMessages,
  type User,
  type UpsertUser,
  type BlogPost,
  type InsertBlogPost,
  type UpdateBlogPost,
  type PortfolioImage,
  type InsertPortfolioImage,
  type ContactMessage,
  type InsertContactMessage,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, sql } from "drizzle-orm";

export interface IStorage {
  // User operations - mandatory for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Blog operations
  getBlogPosts(limit?: number, offset?: number): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: UpdateBlogPost): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  getPublishedBlogPosts(limit?: number, offset?: number): Promise<BlogPost[]>;
  
  // Portfolio operations
  getPortfolioImages(category?: string): Promise<PortfolioImage[]>;
  createPortfolioImage(image: InsertPortfolioImage): Promise<PortfolioImage>;
  updatePortfolioImage(id: number, image: Partial<InsertPortfolioImage>): Promise<PortfolioImage | undefined>;
  deletePortfolioImage(id: number): Promise<boolean>;
  
  // Contact operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(limit?: number, offset?: number): Promise<ContactMessage[]>;
  markMessageAsRead(id: number): Promise<boolean>;
  
  // Admin stats
  getAdminStats(): Promise<{
    portfolioImages: number;
    blogPosts: number;
    contactMessages: number;
    unreadMessages: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  // User operations - mandatory for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Blog operations
  async getBlogPosts(limit = 10, offset = 0): Promise<BlogPost[]> {
    return await db
      .select()
      .from(blogPosts)
      .orderBy(desc(blogPosts.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async updateBlogPost(id: number, post: UpdateBlogPost): Promise<BlogPost | undefined> {
    const [updatedPost] = await db
      .update(blogPosts)
      .set({ ...post, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return (result.rowCount || 0) > 0;
  }

  async getPublishedBlogPosts(limit = 10, offset = 0): Promise<BlogPost[]> {
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt))
      .limit(limit)
      .offset(offset);
  }

  // Portfolio operations
  async getPortfolioImages(category?: string): Promise<PortfolioImage[]> {
    const query = db.select().from(portfolioImages);
    
    if (category) {
      return await query.where(eq(portfolioImages.category, category)).orderBy(portfolioImages.orderIndex);
    }
    
    return await query.orderBy(portfolioImages.orderIndex);
  }

  async createPortfolioImage(image: InsertPortfolioImage): Promise<PortfolioImage> {
    const [newImage] = await db.insert(portfolioImages).values(image).returning();
    return newImage;
  }

  async updatePortfolioImage(id: number, image: Partial<InsertPortfolioImage>): Promise<PortfolioImage | undefined> {
    const [updatedImage] = await db
      .update(portfolioImages)
      .set({ ...image, updatedAt: new Date() })
      .where(eq(portfolioImages.id, id))
      .returning();
    return updatedImage;
  }

  async deletePortfolioImage(id: number): Promise<boolean> {
    const result = await db.delete(portfolioImages).where(eq(portfolioImages.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Contact operations
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async getContactMessages(limit = 50, offset = 0): Promise<ContactMessage[]> {
    return await db
      .select()
      .from(contactMessages)
      .orderBy(desc(contactMessages.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async markMessageAsRead(id: number): Promise<boolean> {
    const result = await db
      .update(contactMessages)
      .set({ read: true })
      .where(eq(contactMessages.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Admin stats
  async getAdminStats(): Promise<{
    portfolioImages: number;
    blogPosts: number;
    contactMessages: number;
    unreadMessages: number;
  }> {
    const [portfolioCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(portfolioImages);
    
    const [blogCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(blogPosts);
    
    const [messageCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(contactMessages);
    
    const [unreadCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(contactMessages)
      .where(eq(contactMessages.read, false));

    return {
      portfolioImages: portfolioCount.count,
      blogPosts: blogCount.count,
      contactMessages: messageCount.count,
      unreadMessages: unreadCount.count,
    };
  }
}

export const storage = new DatabaseStorage();
