// Static data for blog posts and portfolio images
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  published: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Natural Light Photography",
    slug: "mastering-natural-light-photography",
    content: `Natural light is the foundation of great photography. It's free, abundant, and creates the most beautiful, authentic-looking images when used correctly.

## Understanding Golden Hour

The golden hour, occurring shortly after sunrise and before sunset, provides the most flattering light for portraits and landscapes. The warm, soft light creates a natural glow that's impossible to replicate artificially.

## Window Light Techniques

Indoor photography benefits greatly from window light. Position your subject at a 45-degree angle to the window for dramatic shadows, or face them directly toward the window for even, soft lighting.

## Overcast Advantages

Don't dismiss cloudy days! Overcast skies act as a giant softbox, providing even, diffused light that's perfect for portraits without harsh shadows.

Remember, the best camera is the one you have with you, and the best light is the one you know how to use.`,
    excerpt: "Discover how to harness natural light to create stunning photographs that capture authentic moments and emotions.",
    featuredImage: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "The Art of Street Photography",
    slug: "art-of-street-photography",
    content: `Street photography is about capturing life as it unfolds naturally. It requires patience, observation, and the ability to anticipate moments before they happen.

## Essential Gear

Keep it simple. A single lens, preferably a 35mm or 50mm equivalent, will force you to move and engage with your environment rather than relying on zoom.

## Composition in Chaos

Look for leading lines, patterns, and natural frames within the urban environment. Architecture provides excellent compositional elements when combined with human subjects.

## Ethics and Respect

Always respect your subjects and their privacy. If someone seems uncomfortable being photographed, respect their wishes and move on.

## Patience Pays Off

The best street photographs happen when you find a good background and wait for the right person or moment to complete the scene.`,
    excerpt: "Learn the fundamentals of street photography and how to capture compelling moments in urban environments.",
    featuredImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-01-20T14:30:00Z",
    updatedAt: "2024-01-20T14:30:00Z"
  },
  {
    id: 3,
    title: "Portrait Photography: Connecting with Your Subject",
    slug: "portrait-photography-connecting-subject",
    content: `Great portraits go beyond technical perfection. They capture the essence of a person, telling their story through expression, lighting, and composition.

## Building Rapport

Spend time talking with your subject before picking up the camera. Understanding their personality helps you capture authentic expressions.

## Posing Naturally

Guide rather than direct. Suggest movements and emotions rather than static poses. "Think about something that makes you happy" works better than "smile."

## Focus on the Eyes

The eyes are the window to the soul. Ensure they're sharp and well-lit. If one eye is in shadow, use a reflector to balance the lighting.

## Background Matters

A cluttered background distracts from your subject. Use wide apertures to blur the background or choose clean, simple backdrops.

## Post-Processing Philosophy

Enhance, don't transform. Your goal should be to bring out the natural beauty of your subject, not create an unrealistic version of them.`,
    excerpt: "Master the art of portrait photography by learning to connect with your subjects and capture their authentic essence.",
    featuredImage: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-01-25T09:15:00Z",
    updatedAt: "2024-01-25T09:15:00Z"
  },
  {
    id: 4,
    title: "Landscape Photography: Chasing the Perfect Light",
    slug: "landscape-photography-perfect-light",
    content: `Landscape photography is a pursuit of patience and timing. The same location can look completely different depending on the light, weather, and season.

## Scouting Locations

Use tools like Google Earth and PhotoPills to scout locations and plan your shoots. Understanding sun positions and tide times is crucial for coastal photography.

## Weather as Your Ally

Don't pack up when the weather turns bad. Storms often create the most dramatic lighting conditions. Just ensure your gear is protected.

## Foreground, Middle Ground, Background

Create depth in your images by including elements in all three planes. A strong foreground can lead the viewer's eye into the scene.

## Long Exposure Techniques

Use neutral density filters to achieve long exposures that smooth water and clouds, creating ethereal, dream-like landscapes.

## The Importance of Patience

The best landscape photographers spend hours or even days at a single location, waiting for the perfect conditions.`,
    excerpt: "Explore the techniques and mindset required to capture breathtaking landscape photographs in any condition.",
    featuredImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-01T16:45:00Z",
    updatedAt: "2024-02-01T16:45:00Z"
  },
  {
    id: 5,
    title: "Wedding Photography: Capturing Love Stories",
    slug: "wedding-photography-love-stories",
    content: `Wedding photography is about documenting one of the most important days in a couple's life. It requires technical skill, emotional intelligence, and the ability to work under pressure.

## Preparation is Key

Meet with the couple beforehand to understand their vision, timeline, and family dynamics. Create a shot list but be flexible on the day.

## Candid Moments Matter

While posed shots are important, the candid moments between them often tell the real story. Stay alert for genuine emotions and interactions.

## Managing Difficult Lighting

Weddings happen in challenging lighting conditions. Master your camera's high ISO performance and learn to use flash creatively.

## Working with Vendors

Build relationships with other wedding vendors. Coordinators, DJs, and florists can help you anticipate key moments and navigate the day smoothly.

## Backup Everything

Have backup cameras, lenses, memory cards, and batteries. The day cannot be repeated, so equipment failure cannot be an option.`,
    excerpt: "Learn the essential skills and mindset needed to successfully photograph weddings and capture love stories.",
    featuredImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-08T11:20:00Z",
    updatedAt: "2024-02-08T11:20:00Z"
  },
  {
    id: 6,
    title: "The Power of Black and White Photography",
    slug: "power-black-white-photography",
    content: `Black and white photography strips away the distraction of color, forcing viewers to focus on composition, light, shadow, and emotion.

## When to Choose Monochrome

Not every image works in black and white. Look for strong contrast, interesting textures, and compelling compositions that don't rely on color for impact.

## Understanding Tonal Range

A good black and white image uses the full tonal range from pure white to pure black, with interesting mid-tones in between.

## Color Filters in Digital

Even in digital photography, understanding how color filters affect black and white conversion is crucial. A red filter darkens skies, while a yellow filter enhances contrast.

## Post-Processing Techniques

Learn to see in black and white while shooting, but embrace the power of digital tools to fine-tune your vision in post-processing.

## Classic Inspiration

Study the masters like Ansel Adams, Henri Cartier-Bresson, and Vivian Maier to understand how they used light and shadow to create timeless images.`,
    excerpt: "Discover how to create compelling black and white photographs that emphasize emotion and composition.",
    featuredImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-15T13:10:00Z",
    updatedAt: "2024-02-15T13:10:00Z"
  },
  {
    id: 7,
    title: "Product Photography for E-commerce",
    slug: "product-photography-ecommerce",
    content: `Product photography directly impacts sales. Clean, professional images that accurately represent products build trust and encourage purchases.

## Lighting Setup

Use soft, even lighting to minimize harsh shadows. A simple two-light setup with softboxes can handle most product photography needs.

## Background Considerations

Pure white backgrounds are standard for e-commerce, but consider the brand aesthetic. Sometimes a subtle texture or color can enhance the product.

## Multiple Angles

Provide customers with comprehensive views: front, back, sides, details, and scale references. The more they can see, the more confident they'll feel purchasing.

## Consistency is Key

Maintain consistent lighting, cropping, and color correction across all products. This creates a professional, cohesive look for your brand.

## Post-Processing Workflow

Develop a streamlined workflow for color correction, background removal, and retouching. Consistency and efficiency are crucial for commercial work.`,
    excerpt: "Master the techniques needed to create professional product photographs that drive sales and build brand trust.",
    featuredImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-22T08:30:00Z",
    updatedAt: "2024-02-22T08:30:00Z"
  },
  {
    id: 8,
    title: "Concert Photography: Capturing Energy in Low Light",
    slug: "concert-photography-energy-low-light",
    content: `Concert photography combines the technical challenges of low-light photography with the need to capture the energy and emotion of live music.

## Camera Settings

High ISO performance is crucial. Shoot in manual mode with wide apertures and fast shutter speeds to freeze motion and avoid camera shake.

## Understanding Stage Lighting

Learn to work with rapidly changing stage lights. Anticipate lighting changes and adjust your settings accordingly.

## Positioning and Movement

Find the best vantage points and move purposefully. You often have limited access, so make every shot count.

## Capturing Emotion

Focus on the musicians' expressions and interactions with the audience. The best concert photos convey the energy and emotion of the performance.

## Equipment Considerations

Fast lenses are essential. A 70-200mm f/2.8 and 24-70mm f/2.8 combination covers most situations. Consider silent shooting modes to avoid disrupting the performance.`,
    excerpt: "Learn to photograph live music performances, mastering low-light techniques while capturing the energy of the moment.",
    featuredImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-03-01T19:45:00Z",
    updatedAt: "2024-03-01T19:45:00Z"
  },
  {
    id: 9,
    title: "Food Photography: Making Dishes Look Delicious",
    slug: "food-photography-delicious-dishes",
    content: `Food photography is about making viewers hungry. It requires understanding how to make food look fresh, appetizing, and irresistible.

## Lighting for Food

Natural light from a window often works best for food photography. It's soft, even, and brings out natural colors without harsh shadows.

## Styling Techniques

Learn basic food styling: using tweezers for precise placement, glycerin for freshness, and understanding how different foods photograph.

## Angles and Composition

Experiment with different angles. Overhead shots work well for flat dishes, while 45-degree angles show depth and layers in food.

## Props and Context

Choose props that complement the food without overwhelming it. Simple plates, natural textures, and relevant utensils enhance the story.

## Speed is Essential

Food doesn't stay photogenic for long. Have your setup ready before the food arrives, and work quickly to capture the best look.`,
    excerpt: "Master the art of food photography and learn to create mouth-watering images that make viewers crave the dish.",
    featuredImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-03-08T12:00:00Z",
    updatedAt: "2024-03-08T12:00:00Z"
  },
  {
    id: 10,
    title: "Building Your Photography Business",
    slug: "building-photography-business",
    content: `Turning your photography passion into a sustainable business requires more than just technical skills. It demands business acumen, marketing savvy, and customer service excellence.

## Finding Your Niche

Specialize in what you love and do best. Whether it's weddings, portraits, or commercial work, becoming known for excellent work in a specific area builds your reputation.

## Portfolio Development

Your portfolio should showcase your best work and attract your ideal clients. Quality over quantity - 15-20 exceptional images are better than 50 good ones.

## Pricing Your Work

Price based on your costs, desired profit, and market value. Don't undervalue your work, but be realistic about your experience level and local market.

## Client Relationships

Excellent customer service sets you apart from competitors. Communicate clearly, deliver on time, and exceed expectations whenever possible.

## Marketing Strategies

Use social media strategically, build relationships with other vendors, and ask satisfied clients for referrals. Word-of-mouth remains the best marketing for photographers.`,
    excerpt: "Transform your photography skills into a thriving business with strategies for marketing, pricing, and client management.",
    featuredImage: "https://images.unsplash.com/photo-1556742049-2ca13c2ee4c2?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-03-15T15:20:00Z",
    updatedAt: "2024-03-15T15:20:00Z"
  }
];

export const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    description: "A stunning portrait captured during the golden hour, showcasing natural lighting techniques.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 1,
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z"
  },
  {
    id: 2,
    title: "Urban Street Scene",
    description: "Dynamic street photography capturing the energy of city life.",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
    category: "street",
    orderIndex: 2,
    createdAt: "2024-01-11T14:30:00Z",
    updatedAt: "2024-01-11T14:30:00Z"
  },
  {
    id: 3,
    title: "Mountain Landscape",
    description: "Breathtaking landscape photography showcasing nature's grandeur.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    category: "landscapes",
    orderIndex: 3,
    createdAt: "2024-01-12T08:15:00Z",
    updatedAt: "2024-01-12T08:15:00Z"
  },
  {
    id: 4,
    title: "Wedding Ceremony",
    description: "Intimate moment captured during a beautiful wedding ceremony.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    category: "weddings",
    orderIndex: 4,
    createdAt: "2024-01-13T16:45:00Z",
    updatedAt: "2024-01-13T16:45:00Z"
  },
  {
    id: 5,
    title: "Creative Portrait",
    description: "Artistic portrait showcasing creative lighting and composition.",
    imageUrl: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 5,
    createdAt: "2024-01-14T11:20:00Z",
    updatedAt: "2024-01-14T11:20:00Z"
  },
  {
    id: 6,
    title: "City Lights",
    description: "Night photography capturing the vibrant energy of urban nightlife.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    category: "street",
    orderIndex: 6,
    createdAt: "2024-01-15T20:30:00Z",
    updatedAt: "2024-01-15T20:30:00Z"
  },
  {
    id: 7,
    title: "Ocean Sunset",
    description: "Serene seascape captured during a spectacular sunset.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    category: "landscapes",
    orderIndex: 7,
    createdAt: "2024-01-16T18:00:00Z",
    updatedAt: "2024-01-16T18:00:00Z"
  },
  {
    id: 8,
    title: "Fashion Portrait",
    description: "High-fashion portrait with dramatic lighting and styling.",
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 8,
    createdAt: "2024-01-17T13:45:00Z",
    updatedAt: "2024-01-17T13:45:00Z"
  },
  {
    id: 9,
    title: "Concert Energy",
    description: "Live music photography capturing the raw energy of performance.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    category: "events",
    orderIndex: 9,
    createdAt: "2024-01-18T21:15:00Z",
    updatedAt: "2024-01-18T21:15:00Z"
  },
  {
    id: 10,
    title: "Wedding Reception",
    description: "Joyful moments from a wedding reception celebration.",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
    category: "weddings",
    orderIndex: 10,
    createdAt: "2024-01-19T22:30:00Z",
    updatedAt: "2024-01-19T22:30:00Z"
  },
  {
    id: 11,
    title: "Architectural Detail",
    description: "Modern architecture captured with emphasis on geometric patterns.",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=800&fit=crop",
    category: "architecture",
    orderIndex: 11,
    createdAt: "2024-01-20T09:00:00Z",
    updatedAt: "2024-01-20T09:00:00Z"
  },
  {
    id: 12,
    title: "Nature Macro",
    description: "Close-up nature photography revealing intricate details.",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
    category: "nature",
    orderIndex: 12,
    createdAt: "2024-01-21T07:30:00Z",
    updatedAt: "2024-01-21T07:30:00Z"
  },
  {
    id: 13,
    title: "Black & White Portrait",
    description: "Timeless black and white portrait emphasizing emotion and character.",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 13,
    createdAt: "2024-01-22T12:15:00Z",
    updatedAt: "2024-01-22T12:15:00Z"
  },
  {
    id: 14,
    title: "Product Photography",
    description: "Clean, professional product photography for commercial use.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop",
    category: "commercial",
    orderIndex: 14,
    createdAt: "2024-01-23T14:45:00Z",
    updatedAt: "2024-01-23T14:45:00Z"
  },
  {
    id: 15,
    title: "Food Styling",
    description: "Appetizing food photography with careful attention to styling and lighting.",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    category: "commercial",
    orderIndex: 15,
    createdAt: "2024-01-24T16:20:00Z",
    updatedAt: "2024-01-24T16:20:00Z"
  },
  // Additional 15 images to double the portfolio
  {
    id: 16,
    title: "Artistic Portrait",
    description: "Creative studio portrait with dramatic lighting effects.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c5e02e01?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 16,
    createdAt: "2024-01-25T10:00:00Z",
    updatedAt: "2024-01-25T10:00:00Z"
  },
  {
    id: 17,
    title: "Business Executive",
    description: "Professional corporate headshot in modern office setting.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 17,
    createdAt: "2024-01-25T11:00:00Z",
    updatedAt: "2024-01-25T11:00:00Z"
  },
  {
    id: 18,
    title: "Creative Professional",
    description: "Environmental portrait showcasing personality in workspace.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    category: "portraits",
    orderIndex: 18,
    createdAt: "2024-01-25T12:00:00Z",
    updatedAt: "2024-01-25T12:00:00Z"
  },
  {
    id: 19,
    title: "Street Art Mural",
    description: "Vibrant urban street art documentation and cultural expression.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    category: "street",
    orderIndex: 19,
    createdAt: "2024-01-25T13:00:00Z",
    updatedAt: "2024-01-25T13:00:00Z"
  },
  {
    id: 20,
    title: "City Motion",
    description: "Long exposure capturing the rhythm and energy of urban life.",
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop",
    category: "street",
    orderIndex: 20,
    createdAt: "2024-01-25T14:00:00Z",
    updatedAt: "2024-01-25T14:00:00Z"
  },
  {
    id: 21,
    title: "Desert Minimalism",
    description: "Stark beauty of desert landscape with minimalist composition.",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop",
    category: "landscapes",
    orderIndex: 21,
    createdAt: "2024-01-25T15:00:00Z",
    updatedAt: "2024-01-25T15:00:00Z"
  },
  {
    id: 22,
    title: "Ocean Waves",
    description: "Dramatic coastal landscape with crashing waves and moody sky.",
    imageUrl: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop",
    category: "landscapes",
    orderIndex: 22,
    createdAt: "2024-01-25T16:00:00Z",
    updatedAt: "2024-01-25T16:00:00Z"
  },
  {
    id: 23,
    title: "Forest Pathway",
    description: "Mystical forest scene with dappled light and natural textures.",
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=800&fit=crop",
    category: "landscapes",
    orderIndex: 23,
    createdAt: "2024-01-25T17:00:00Z",
    updatedAt: "2024-01-25T17:00:00Z"
  },
  {
    id: 24,
    title: "Wedding Ceremony",
    description: "Intimate outdoor wedding ceremony moment captured candidly.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    category: "weddings",
    orderIndex: 24,
    createdAt: "2024-01-25T18:00:00Z",
    updatedAt: "2024-01-25T18:00:00Z"
  },
  {
    id: 25,
    title: "Reception Celebration",
    description: "Joyful wedding reception moments filled with laughter and dance.",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
    category: "weddings",
    orderIndex: 25,
    createdAt: "2024-01-25T19:00:00Z",
    updatedAt: "2024-01-25T19:00:00Z"
  },
  {
    id: 26,
    title: "Live Concert",
    description: "Dynamic stage photography capturing the energy of live performance.",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop",
    category: "events",
    orderIndex: 26,
    createdAt: "2024-01-25T20:00:00Z",
    updatedAt: "2024-01-25T20:00:00Z"
  },
  {
    id: 27,
    title: "Conference Speaker",
    description: "Professional event photography of keynote presentation.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    category: "events",
    orderIndex: 27,
    createdAt: "2024-01-25T21:00:00Z",
    updatedAt: "2024-01-25T21:00:00Z"
  },
  {
    id: 28,
    title: "Modern Skyscraper",
    description: "Contemporary architecture study emphasizing geometric patterns.",
    imageUrl: "https://images.unsplash.com/photo-1516736923207-e7c0c336b16a?w=600&h=800&fit=crop",
    category: "architecture",
    orderIndex: 28,
    createdAt: "2024-01-25T22:00:00Z",
    updatedAt: "2024-01-25T22:00:00Z"
  },
  {
    id: 29,
    title: "Historic Building",
    description: "Classical architecture captured with attention to detail and heritage.",
    imageUrl: "https://images.unsplash.com/photo-1520637836862-4d197d17c9a4?w=600&h=800&fit=crop",
    category: "architecture",
    orderIndex: 29,
    createdAt: "2024-01-25T23:00:00Z",
    updatedAt: "2024-01-25T23:00:00Z"
  },
  {
    id: 30,
    title: "Wildlife Portrait",
    description: "Intimate wildlife photography showcasing natural behavior.",
    imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop",
    category: "nature",
    orderIndex: 30,
    createdAt: "2024-01-26T00:00:00Z",
    updatedAt: "2024-01-26T00:00:00Z"
  }
];

export const portfolioCategories = [
  "all",
  "portraits",
  "landscapes", 
  "street",
  "weddings",
  "events",
  "architecture",
  "nature",
  "commercial"
];