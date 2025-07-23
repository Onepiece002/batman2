import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload, Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import type { BlogPost, PortfolioImage, ContactMessage } from "@shared/schema";

export default function Admin() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [portfolioDialogOpen, setPortfolioDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const [blogForm, setBlogForm] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featuredImage: "",
    published: false,
  });

  const [portfolioForm, setPortfolioForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "portraits",
  });

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      toast({
        title: "Unauthorized",
        description: "Admin access required.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    }
  }, [isAuthenticated, isLoading, user, toast]);

  const { data: stats } = useQuery<{
    portfolioImages: number;
    blogPosts: number;
    contactMessages: number;
    unreadMessages: number;
  }>({
    queryKey: ["/api/admin/stats"],
    enabled: isAuthenticated && user?.isAdmin,
  });

  const { data: blogPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog/posts"],
    enabled: isAuthenticated && user?.isAdmin,
  });

  const { data: portfolioImages } = useQuery<PortfolioImage[]>({
    queryKey: ["/api/portfolio/images"],
    enabled: isAuthenticated && user?.isAdmin,
  });

  const { data: contactMessages } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/contact/messages"],
    enabled: isAuthenticated && user?.isAdmin,
  });

  const createBlogPostMutation = useMutation({
    mutationFn: async (data: typeof blogForm) => {
      await apiRequest("POST", "/api/admin/blog/posts", data);
    },
    onSuccess: () => {
      toast({ title: "Blog post created successfully!" });
      setBlogDialogOpen(false);
      setBlogForm({ title: "", slug: "", content: "", excerpt: "", featuredImage: "", published: false });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
    },
    onError: () => {
      toast({ title: "Failed to create blog post", variant: "destructive" });
    },
  });

  const updateBlogPostMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: typeof blogForm }) => {
      await apiRequest("PUT", `/api/admin/blog/posts/${id}`, data);
    },
    onSuccess: () => {
      toast({ title: "Blog post updated successfully!" });
      setBlogDialogOpen(false);
      setEditingPost(null);
      setBlogForm({ title: "", slug: "", content: "", excerpt: "", featuredImage: "", published: false });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
    },
    onError: () => {
      toast({ title: "Failed to update blog post", variant: "destructive" });
    },
  });

  const deleteBlogPostMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/blog/posts/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Blog post deleted successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
    },
    onError: () => {
      toast({ title: "Failed to delete blog post", variant: "destructive" });
    },
  });

  const createPortfolioImageMutation = useMutation({
    mutationFn: async (data: typeof portfolioForm) => {
      await apiRequest("POST", "/api/admin/portfolio/images", data);
    },
    onSuccess: () => {
      toast({ title: "Portfolio image added successfully!" });
      setPortfolioDialogOpen(false);
      setPortfolioForm({ title: "", description: "", imageUrl: "", category: "portraits" });
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio/images"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
    },
    onError: () => {
      toast({ title: "Failed to add portfolio image", variant: "destructive" });
    },
  });

  const deletePortfolioImageMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/portfolio/images/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Portfolio image deleted successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio/images"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
    },
    onError: () => {
      toast({ title: "Failed to delete portfolio image", variant: "destructive" });
    },
  });

  const markMessageReadMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("PUT", `/api/admin/contact/messages/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contact/messages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
    },
  });

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updateBlogPostMutation.mutate({ id: editingPost.id, data: blogForm });
    } else {
      createBlogPostMutation.mutate(blogForm);
    }
  };

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPortfolioImageMutation.mutate(portfolioForm);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setBlogForm({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt || "",
      featuredImage: post.featuredImage || "",
      published: post.published || false,
    });
    setBlogDialogOpen(true);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  if (isLoading) {
    return (
      <div className="bg-dark-primary text-text-primary min-h-screen">
        <Navigation />
        <div className="pt-24 flex justify-center items-center">
          <div className="text-text-secondary">Loading admin dashboard...</div>
        </div>
      </div>
    );
  }

  if (!user?.isAdmin) {
    return null;
  }

  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">ADMIN DASHBOARD</h1>
            <p className="text-text-secondary">Manage your portfolio, blog posts, and site content</p>
          </motion.div>

          {/* Dashboard Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            <Card className="bg-dark-card border-border-dark">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {stats?.portfolioImages || 0}
                </h3>
                <p className="text-text-secondary">Portfolio Images</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-card border-border-dark">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {stats?.blogPosts || 0}
                </h3>
                <p className="text-text-secondary">Blog Posts</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-card border-border-dark">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {stats?.contactMessages || 0}
                </h3>
                <p className="text-text-secondary">Total Messages</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-card border-border-dark">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {stats?.unreadMessages || 0}
                </h3>
                <p className="text-text-secondary">Unread Messages</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Management Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-dark-card">
                <TabsTrigger value="blog" className="text-white">Blog Management</TabsTrigger>
                <TabsTrigger value="portfolio" className="text-white">Portfolio Management</TabsTrigger>
                <TabsTrigger value="messages" className="text-white">Contact Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="blog" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Blog Posts</h2>
                  <Dialog open={blogDialogOpen} onOpenChange={setBlogDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="btn-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Post
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-dark-card border-border-dark max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleBlogSubmit} className="space-y-4">
                        <Input
                          placeholder="Post title"
                          value={blogForm.title}
                          onChange={(e) => {
                            setBlogForm(prev => ({
                              ...prev,
                              title: e.target.value,
                              slug: generateSlug(e.target.value)
                            }));
                          }}
                          className="bg-dark-primary border-border-dark text-white"
                          required
                        />
                        <Input
                          placeholder="Slug (URL path)"
                          value={blogForm.slug}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, slug: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                          required
                        />
                        <Textarea
                          placeholder="Excerpt (optional)"
                          value={blogForm.excerpt}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, excerpt: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                          rows={3}
                        />
                        <Input
                          placeholder="Featured image URL (optional)"
                          value={blogForm.featuredImage}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, featuredImage: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                        />
                        <Textarea
                          placeholder="Content (HTML supported)"
                          value={blogForm.content}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                          rows={10}
                          required
                        />
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="published"
                            checked={blogForm.published}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, published: e.target.checked }))}
                            className="rounded"
                          />
                          <label htmlFor="published" className="text-white">Published</label>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            type="submit"
                            disabled={createBlogPostMutation.isPending || updateBlogPostMutation.isPending}
                            className="btn-primary"
                          >
                            {editingPost ? "Update Post" : "Create Post"}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setBlogDialogOpen(false);
                              setEditingPost(null);
                              setBlogForm({ title: "", slug: "", content: "", excerpt: "", featuredImage: "", published: false });
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-4">
                  {blogPosts?.map((post) => (
                    <Card key={post.id} className="bg-dark-card border-border-dark">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                              {post.published ? (
                                <Badge className="bg-green-600">
                                  <Eye className="h-3 w-3 mr-1" />
                                  Published
                                </Badge>
                              ) : (
                                <Badge variant="secondary">
                                  <EyeOff className="h-3 w-3 mr-1" />
                                  Draft
                                </Badge>
                              )}
                            </div>
                            <p className="text-text-secondary text-sm">
                              Created: {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "N/A"}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditPost(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => deleteBlogPostMutation.mutate(post.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Portfolio Images</h2>
                  <Dialog open={portfolioDialogOpen} onOpenChange={setPortfolioDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="btn-primary">
                        <Upload className="h-4 w-4 mr-2" />
                        Add New Image
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-dark-card border-border-dark">
                      <DialogHeader>
                        <DialogTitle className="text-white">Add Portfolio Image</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                        <Input
                          placeholder="Image title (optional)"
                          value={portfolioForm.title}
                          onChange={(e) => setPortfolioForm(prev => ({ ...prev, title: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                        />
                        <Textarea
                          placeholder="Image description (optional)"
                          value={portfolioForm.description}
                          onChange={(e) => setPortfolioForm(prev => ({ ...prev, description: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                          rows={3}
                        />
                        <Input
                          placeholder="Image URL"
                          value={portfolioForm.imageUrl}
                          onChange={(e) => setPortfolioForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                          className="bg-dark-primary border-border-dark text-white"
                          required
                        />
                        <select
                          value={portfolioForm.category}
                          onChange={(e) => setPortfolioForm(prev => ({ ...prev, category: e.target.value }))}
                          className="w-full px-4 py-2 bg-dark-primary border border-border-dark rounded text-white"
                        >
                          <option value="portraits">Portraits</option>
                          <option value="lifestyle">Lifestyle</option>
                        </select>
                        <div className="flex space-x-2">
                          <Button
                            type="submit"
                            disabled={createPortfolioImageMutation.isPending}
                            className="btn-primary"
                          >
                            Add Image
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setPortfolioDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {portfolioImages?.map((image) => (
                    <Card key={image.id} className="bg-dark-card border-border-dark">
                      <CardContent className="p-4">
                        <img
                          src={image.imageUrl}
                          alt={image.title || "Portfolio image"}
                          className="w-full h-40 object-cover rounded mb-3"
                        />
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-white font-medium">{image.title || "Untitled"}</h3>
                            <p className="text-text-secondary text-sm capitalize">{image.category}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deletePortfolioImageMutation.mutate(image.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Messages</h2>
                <div className="space-y-4">
                  {contactMessages?.map((message) => (
                    <Card key={message.id} className="bg-dark-card border-border-dark">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{message.name}</h3>
                            <p className="text-text-secondary">{message.email}</p>
                            {message.projectType && (
                              <Badge variant="secondary" className="mt-1">
                                {message.projectType}
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-text-secondary text-sm">
                              {message.createdAt ? new Date(message.createdAt).toLocaleDateString() : "N/A"}
                            </p>
                            {!message.read && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markMessageReadMutation.mutate(message.id)}
                                className="mt-2"
                              >
                                Mark as Read
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-white whitespace-pre-wrap">{message.message}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
