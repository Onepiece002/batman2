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
    content: `Natural light photography represents one of the most fundamental yet challenging aspects of visual storytelling. Unlike artificial lighting setups that offer complete control, natural light demands patience, understanding, and adaptability from photographers at every skill level.

# The Science Behind Natural Light

Understanding the physics of natural light transforms good photographers into exceptional ones. The sun's position relative to Earth creates dramatically different lighting conditions throughout the day, each offering unique creative opportunities.

## Golden Hour: The Photographer's Holy Grail

The golden hour occurs approximately one hour after sunrise and one hour before sunset. During this time, the sun sits low on the horizon, creating warm, diffused light that flatters virtually any subject. Professional photographers often schedule entire shoots around these brief windows of optimal lighting.

The color temperature during golden hour ranges between 2,500K to 3,500K, producing those coveted warm tones that make skin appear healthy and landscapes feel inviting. This natural filtration occurs because sunlight travels through more atmosphere, scattering blue wavelengths and allowing warmer reds and oranges to dominate.

## Blue Hour: The Underutilized Gem

Following sunset, the blue hour provides a magical 20-30 minute window where the sky becomes a massive softbox. The remaining ambient light creates even illumination perfect for architectural photography and environmental portraits. Many photographers overlook this period, but it offers some of the most striking natural lighting conditions available.

## Window Light: Your Indoor Studio

Professional portrait photographers understand that a large window can replace thousands of dollars in studio equipment. The key lies in understanding how to manipulate this light source through positioning and modifiers.

North-facing windows provide consistent, soft light throughout the day, making them ideal for portrait work. East and west-facing windows offer dramatic directional light during morning and evening hours respectively. South-facing windows can be harsh during midday but provide beautiful warm light during winter months when the sun sits lower in the sky.

# Advanced Natural Light Techniques

## Direction and Quality Control

The angle between your subject and the light source determines the mood and dimension of your photographs. Front lighting creates even illumination with minimal shadows, perfect for headshots and product photography. Side lighting adds dimension and drama, revealing texture and form. Backlighting can create silhouettes or beautiful rim lighting when properly exposed.

## Weather as Your Creative Partner

Overcast conditions shouldn't discourage outdoor photography sessions. Clouds act as a massive diffusion panel, creating perfectly even lighting without harsh shadows. This natural softbox effect is particularly flattering for portrait work and allows for consistent exposures across your entire shoot.

Stormy weather often produces the most dramatic lighting conditions. The contrast between dark storm clouds and breaks of sunlight creates natural spotlighting effects that would be impossible to recreate artificially.

## Seasonal Considerations

Each season offers distinct lighting characteristics. Winter's low sun angle creates long, dramatic shadows and warm light throughout more of the day. Spring provides fresh, clean light perfect for nature photography. Summer's high sun position requires careful timing but offers extended golden hour periods in northern latitudes. Autumn combines warm color palettes with interesting atmospheric conditions.

# Professional Tips for Consistent Results

## Planning and Preparation

Successful natural light photography begins long before you pick up your camera. Weather apps with detailed sunrise/sunset information, UV index readings, and cloud cover predictions become essential tools. Location scouting during different times of day reveals how light interacts with your chosen environment.

## Technical Considerations

Understanding your camera's dynamic range limitations becomes crucial when working with natural light's often extreme contrasts. Modern digital cameras handle highlights differently than shadows, making proper exposure technique essential for maintaining detail throughout your image.

## Post-Processing Philosophy

Natural light photography deserves post-processing approaches that enhance rather than replace the original lighting conditions. The goal should be to reveal the light you captured rather than create something entirely artificial.

The mastery of natural light photography separates hobbyists from professionals. It requires patience, planning, and a deep understanding of how light behaves in different conditions. Yet the rewards—authentic, emotionally resonant images that capture genuine moments—make this pursuit endlessly worthwhile.

Whether you're shooting portraits, landscapes, or street photography, natural light remains your most powerful and accessible creative tool. The investment in understanding its nuances pays dividends throughout your entire photographic journey.`,
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
    content: `Street photography stands as one of the most challenging and rewarding forms of visual documentation. It requires photographers to navigate complex social dynamics while capturing authentic human moments in urban environments. This discipline demands technical proficiency, emotional intelligence, and an acute understanding of compositional principles.

# The Philosophy of Street Photography

At its core, street photography serves as a mirror to society, reflecting both the mundane and extraordinary aspects of daily life. Henri Cartier-Bresson's concept of the "decisive moment" remains the foundational principle: that perfect instant when all elements within the frame align to create meaning beyond their individual components.

## Historical Context and Evolution

Street photography emerged alongside the development of portable cameras in the early 20th century. Pioneers like Walker Evans, Vivian Maier, and Robert Frank established the visual language we recognize today. Their work demonstrates how technical limitations often breed creative innovation.

The digital revolution has democratized street photography while simultaneously challenging its traditional boundaries. Smartphone cameras now offer capabilities that once required professional equipment, yet the fundamental skills of observation and timing remain unchanged.

# Technical Mastery in Urban Environments

## Equipment Philosophy: Less is More

Professional street photographers advocate for minimal equipment that doesn't interfere with the natural flow of urban life. A single camera body with a 35mm or 50mm lens forces photographers to engage physically with their environment rather than rely on telephoto distances.

The choice between these focal lengths profoundly impacts shooting style. A 35mm lens captures environmental context, showing subjects within their surroundings. A 50mm lens approximates natural human vision, creating more intimate compositions that isolate subjects from busy backgrounds.

## Camera Settings for Unpredictable Situations

Street photography demands rapid response to constantly changing conditions. Many professionals employ aperture priority mode with settings optimized for quick decision-making. A moderate aperture (f/5.6 to f/8) provides adequate depth of field while maintaining fast shutter speeds in varying light conditions.

Modern autofocus systems excel in street photography scenarios, but understanding manual focus techniques remains valuable for low-light situations or when tracking moving subjects through crowded environments.

# Compositional Strategies in Urban Chaos

## Finding Order in Disorder

Successful street photography transforms chaotic urban environments into compelling visual narratives. This transformation occurs through careful attention to geometric relationships, color harmonies, and human interactions within the frame.

Leading lines become particularly powerful in street photography. Sidewalks, building edges, shadows, and architectural elements guide viewers' eyes through complex compositions. The key lies in recognizing these elements quickly while maintaining awareness of human subjects.

## The Psychology of Urban Spaces

Different urban environments produce distinct behavioral patterns. Business districts during morning rush hours create opportunities for capturing determination and focus. Public parks offer more relaxed interactions and leisure activities. Transportation hubs provide scenes of transition and movement.

Understanding these patterns allows photographers to position themselves strategically, anticipating interesting moments before they occur. This predictive approach distinguishes professional street photographers from casual observers.

# Ethical Considerations and Cultural Sensitivity

## Navigating Privacy in Public Spaces

Street photography operates within the complex intersection of artistic expression and personal privacy. While public spaces generally allow photography, ethical considerations extend beyond legal permissions.

Respectful street photography involves reading social cues and understanding when subjects welcome attention versus when they prefer anonymity. Developing this sensitivity requires practice and cultural awareness that varies significantly across different communities and locations.

## Building Community Connections

The most compelling street photographs often emerge from photographers who understand their subjects' communities. Spending time in specific neighborhoods, frequenting local businesses, and engaging in genuine conversations creates opportunities for more authentic imagery.

This approach contrasts sharply with "drive-by" street photography that treats subjects as objects rather than individuals with their own stories and dignity.

# Advanced Techniques for Professional Results

## Light and Shadow in Urban Environments

Cities create unique lighting conditions that don't exist in natural environments. Reflected light from glass buildings, shadows cast by architectural structures, and artificial lighting sources provide creative opportunities throughout the day.

Understanding how light behaves in urban canyons—the areas between tall buildings—enables photographers to predict optimal shooting conditions. These locations often provide dramatic contrasts and interesting color temperature variations.

## Timing and Patience

Exceptional street photography rewards patience over urgency. Identifying promising locations and waiting for the right combination of light, subjects, and compositional elements often produces stronger images than constantly moving in search of action.

This patient approach requires confidence in compositional instincts and the discipline to wait for elements to align perfectly within the predetermined frame.

# Post-Processing for Authentic Expression

Street photography post-processing should enhance rather than fabricate the authentic moments captured in-camera. The goal involves revealing the emotional content and visual impact present in the original scene.

Black and white processing remains popular in street photography because it emphasizes form, contrast, and emotional content over color distractions. However, color street photography can be equally powerful when the color palette supports the narrative content.

The challenge lies in maintaining the spontaneous feeling that makes street photography compelling while polishing the technical aspects that make images professionally viable.

Street photography continues evolving as urban environments change and new technologies emerge. Yet its fundamental appeal—capturing authentic human moments in public spaces—remains constant. Success in this field requires technical competence, cultural sensitivity, and the patience to wait for those decisive moments that reveal larger truths about contemporary life.`,
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