# Portfolio Website - Static Version

A modern, responsive portfolio website and blog built with React, TypeScript, and Tailwind CSS. Features a dark theme inspired by Peter McKinnon's aesthetic with smooth animations and comprehensive content management.

## 🚀 Features

- **Static Site Generation**: No database dependencies - perfect for Netlify deployment
- **10 Sample Blog Posts**: Pre-loaded with photography-focused content
- **15 Portfolio Images**: Categorized gallery with filtering capabilities
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Professional Peter McKinnon-inspired aesthetic
- **Smooth Animations**: Framer Motion for parallax and page transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS

## 📁 Project Structure

```
├── client/src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Site navigation
│   │   ├── Footer.tsx       # Site footer with social links
│   │   ├── BlogCard.tsx     # Blog post cards
│   │   └── PortfolioGrid.tsx # Portfolio image grid
│   ├── pages/               # Page components
│   │   ├── Landing.tsx      # Home page
│   │   ├── Portfolio.tsx    # Portfolio gallery
│   │   ├── Blog.tsx         # Blog listing
│   │   ├── BlogPost.tsx     # Individual blog post
│   │   ├── About.tsx        # About page
│   │   └── Contact.tsx      # Contact form
│   ├── data/
│   │   └── staticData.ts    # Static blog posts and portfolio data
│   └── index.css           # Global styles and theme
├── dist/public/            # Built static files
├── netlify.toml           # Netlify deployment configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Content

### Blog Posts (10 included)
1. Mastering Natural Light Photography
2. The Art of Street Photography  
3. Portrait Photography: Connecting with Your Subject
4. Landscape Photography: Chasing the Perfect Light
5. Wedding Photography: Capturing Love Stories
6. The Power of Black and White Photography
7. Product Photography for E-commerce
8. Concert Photography: Capturing Energy in Low Light
9. Food Photography: Making Dishes Look Delicious
10. Building Your Photography Business

### Portfolio Categories
- Portraits (4 images)
- Street Photography (2 images)
- Landscapes (2 images)
- Weddings (2 images)
- Events (1 image)
- Architecture (1 image)
- Nature (1 image)
- Commercial (2 images)

## 🛠️ Development

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🌐 Deployment on Netlify

### Automated Deployment
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Deploy settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: 20

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist/public` folder to Netlify
3. Configure redirects for SPA routing

## 📱 Features

### Navigation
- Clean, minimalist navigation bar
- Mobile-responsive hamburger menu
- Smooth page transitions

### Footer
- Social media links (Instagram, Twitter, Facebook, YouTube)
- Contact information
- Quick navigation links
- Service listings

### Contact Form
- Static form with mailto functionality
- Form validation
- Professional contact information display

### Portfolio Grid
- Masonry layout for optimal image display
- Category filtering
- Smooth animations
- High-quality placeholder images from Unsplash

### Blog System
- Full blog post rendering
- Pagination support
- Featured images
- Reading time estimates
- SEO-friendly URLs

## 🎨 Customization

### Updating Content
Edit `client/src/data/staticData.ts` to:
- Add/modify blog posts
- Update portfolio images
- Change categories
- Modify author information

### Styling
- Theme colors in `client/src/index.css`
- Component-specific styles in individual files
- Tailwind utilities for responsive design

### Images
Replace Unsplash URLs in `staticData.ts` with your own images:
- Blog featured images
- Portfolio gallery images
- About page image

## 📞 Contact Information

Update contact details in:
- `client/src/components/Footer.tsx`
- `client/src/pages/Contact.tsx`
- Social media links throughout the site

## 🔧 Technical Details

- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify-optimized static build

## 📈 Performance

- Optimized static build
- Lazy loading for images
- Modern JavaScript/CSS output
- Responsive images with proper sizing
- Minimal bundle size through tree shaking

This portfolio website is ready for immediate deployment on Netlify with no additional configuration required.