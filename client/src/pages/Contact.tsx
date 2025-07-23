import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // For static deployment, create a mailto link with the form data
    const subject = encodeURIComponent(`Contact Form: ${formData.projectType || "General Inquiry"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:hello@photographer.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">CONTACT</h1>
            <p className="text-text-secondary text-lg">
              Ready to create something amazing together? Let's start a conversation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-dark-card border-border-dark text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-dark-card border-border-dark text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-dark-card border-border-dark text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-border-dark">
                      <SelectItem value="portrait">Portrait Session</SelectItem>
                      <SelectItem value="brand">Brand Photography</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle Shoot</SelectItem>
                      <SelectItem value="creative">Creative Collaboration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-dark-card border-border-dark text-white"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">GET IN TOUCH</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-text-secondary" size={20} />
                      <span>hello@photographer.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-text-secondary" size={20} />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-text-secondary" size={20} />
                      <span>Toronto, ON Canada</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">AVAILABILITY</h3>
                  <p className="text-text-secondary">
                    Currently booking for Q2 2024. Lead time of 2-4 weeks recommended for optimal scheduling.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">RESPONSE TIME</h3>
                  <p className="text-text-secondary">
                    I typically respond to inquiries within 24-48 hours. For urgent requests, please call directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
