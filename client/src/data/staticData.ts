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
    content: `Natural light photography represents one of the most fundamental yet challenging aspects of visual storytelling. Understanding the physics of natural light transforms good photographers into exceptional ones.

## Golden Hour: The Photographer's Holy Grail

The golden hour occurs approximately one hour after sunrise and one hour before sunset. During this time, the sun sits low on the horizon, creating warm, diffused light that flatters virtually any subject.

## Blue Hour: The Underutilized Gem

Following sunset, the blue hour provides a magical 20-30 minute window where the sky becomes a massive softbox. The remaining ambient light creates even illumination perfect for architectural photography.

## Window Light: Your Indoor Studio

Professional portrait photographers understand that a large window can replace thousands of dollars in studio equipment. The key lies in understanding how to manipulate this light source through positioning and modifiers.

Natural light remains your most powerful and accessible creative tool. The investment in understanding its nuances pays dividends throughout your entire photographic journey.`,
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
    content: `Street photography stands as one of the most challenging and rewarding forms of visual documentation. It requires photographers to navigate complex social dynamics while capturing authentic human moments in urban environments.

## The Philosophy of Street Photography

At its core, street photography serves as a mirror to society, reflecting both the mundane and extraordinary aspects of daily life. Henri Cartier-Bresson's concept of the "decisive moment" remains the foundational principle.

## Technical Mastery in Urban Environments

Professional street photographers advocate for minimal equipment that doesn't interfere with the natural flow of urban life. A single camera body with a 35mm or 50mm lens forces photographers to engage physically with their environment.

## Ethical Considerations

Street photography operates within the complex intersection of artistic expression and personal privacy. While public spaces generally allow photography, ethical considerations extend beyond legal permissions.

Street photography continues evolving as urban environments change and new technologies emerge. Yet its fundamental appeal—capturing authentic human moments in public spaces—remains constant.`,
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
    content: `Portrait photography transcends technical excellence to become an intimate form of human connection. The most compelling portraits reveal not just how someone looks, but who they are.

## Building Rapport

The foundation of exceptional portrait photography lies in the relationship between photographer and subject. Before any camera settings are considered, successful portrait photographers invest time in understanding their subjects.

## Technical Foundations

The choice of lens dramatically affects both the technical and psychological aspects of portrait photography. An 85mm lens allows photographers to maintain comfortable distance while creating beautiful background compression.

## Posing and Direction

The most effective portrait photographers develop a repertoire of subtle directions that improve posture and expression without making subjects feel manipulated.

Portrait photography demands both technical expertise and emotional intelligence. The most successful practitioners understand that great portraits result from human connection first, technical execution second.`,
    excerpt: "Master the art of portrait photography by learning to connect with your subjects and capture their authentic essence.",
    featuredImage: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-01-25T09:15:00Z",
    updatedAt: "2024-01-25T09:15:00Z"
  },
  {
    id: 4,
    title: "Landscape Photography: Capturing Nature's Grandeur",
    slug: "landscape-photography-perfect-light",
    content: `Landscape photography represents the pursuit of natural beauty at its most expansive scale. This discipline requires patience, planning, and technical precision to capture the ever-changing moods of the natural world.

## The Patience of Landscape Photography

Successful landscape photographers understand that dramatic weather often produces the most compelling images. Storm systems create dynamic skies with interesting cloud formations and dramatic lighting.

## Technical Mastery in Natural Environments

Landscape photography often takes place in demanding environments that test both photographer and equipment. Weather sealing becomes crucial when working near waterfalls, in coastal environments, or during precipitation.

## Composition in Natural Environments

Nature rarely organizes itself according to classical compositional rules. Successful landscape photographers develop an eye for finding compositional structure within organic environments.

Landscape photography offers the opportunity to document and celebrate the natural world while developing deep appreciation for environmental conservation.`,
    excerpt: "Learn the patience and techniques required to capture stunning landscape photographs in nature's most beautiful locations.",
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
    content: `Wedding photography represents one of the most emotionally demanding and technically challenging forms of professional photography. Photographers must navigate complex family dynamics, unpredictable lighting conditions, and the immense pressure of documenting unrepeatable moments.

## The Emotional Responsibility

Wedding photographers carry enormous responsibility—they're documenting one of the most important days in their clients' lives. There are no retakes for the exchange of vows, the first kiss, or the father-daughter dance.

## Technical Challenges

Wedding venues present some of the most challenging lighting situations in photography. Ceremony lighting often combines tungsten, fluorescent, and natural light sources with dramatically different color temperatures.

## Timeline Management

Successful wedding photography begins weeks before the actual event. Location scouting reveals optimal shooting positions and potential lighting challenges.

Wedding photography demands the highest levels of technical skill, emotional intelligence, and professional reliability.`,
    excerpt: "Master the art of wedding photography and learn to capture the most important moments in couples' lives.",
    featuredImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-05T11:20:00Z",
    updatedAt: "2024-02-05T11:20:00Z"
  },
  {
    id: 6,
    title: "Commercial Photography: Visual Marketing Excellence",
    slug: "commercial-photography-marketing",
    content: `Commercial photography serves as the bridge between artistic vision and business objectives. This discipline requires photographers to understand marketing goals, brand identity, and consumer psychology while maintaining technical excellence.

## Understanding Commercial Photography's Role

Commercial photography tells brand stories through carefully crafted images. Every element—lighting, composition, color palette, and styling—must align with brand identity and marketing objectives.

## Technical Excellence in Commercial Work

Product photography demands technical precision that reveals texture, form, and color accurately. Understanding how different lighting setups affect various materials becomes essential for consistent results.

## Creative Problem Solving

Commercial shoots often take place in challenging environments—busy retail locations, active construction sites, or cramped office spaces.

Commercial photography demands both artistic vision and business acumen.`,
    excerpt: "Learn how to create compelling commercial photographs that drive business results and tell brand stories effectively.",
    featuredImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-10T13:10:00Z",
    updatedAt: "2024-02-10T13:10:00Z"
  },
  {
    id: 7,
    title: "Night Photography: Mastering the Dark",
    slug: "night-photography-mastering-dark",
    content: `Night photography opens doors to a completely different visual world, where artificial lights create dramatic contrast and long exposures reveal motion invisible to the naked eye.

## Technical Foundations

Night photography pushes camera sensors to their limits. Modern cameras perform remarkably well at high ISO settings, but understanding noise characteristics and limitations helps photographers make informed decisions.

## Equipment for Night Photography

Night photography's long exposures demand rock-solid camera support. Tripod selection involves balancing stability with portability, especially for location shooting.

## Types of Night Photography

Cities offer rich opportunities for night photography with varied light sources creating complex color palettes. Traffic trails, illuminated architecture, and neon signs provide compelling subjects.

Night photography rewards patience and technical preparation with images impossible to capture during daylight hours.`,
    excerpt: "Discover the techniques and equipment needed to create stunning photographs after the sun goes down.",
    featuredImage: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-15T19:30:00Z",
    updatedAt: "2024-02-15T19:30:00Z"
  },
  {
    id: 8,
    title: "Wildlife Photography: Patience and Precision",
    slug: "wildlife-photography-patience-precision",
    content: `Wildlife photography combines technical excellence with deep understanding of animal behavior and natural environments. This challenging discipline requires specialized equipment, extensive patience, and often physical endurance.

## Understanding Animal Behavior

Successful wildlife photography begins with thorough research about target species. Understanding feeding patterns, mating seasons, and territorial behaviors helps predict when and where photographic opportunities might occur.

## Technical Challenges

Wildlife photography typically requires telephoto lenses (300-600mm) to maintain safe distances while filling the frame. Understanding image stabilization, support techniques, and focusing methods becomes essential.

## Ethical Wildlife Photography

Responsible wildlife photographers prioritize animal welfare over photographic opportunities. Understanding appropriate distances and avoiding sensitive areas during breeding seasons demonstrates ethical practice.

Wildlife photography offers the opportunity to document and celebrate the natural world while developing deep appreciation for conservation.`,
    excerpt: "Learn the patience, techniques, and ethics required to capture stunning wildlife photographs in their natural habitats.",
    featuredImage: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-20T08:45:00Z",
    updatedAt: "2024-02-20T08:45:00Z"
  },
  {
    id: 9,
    title: "Macro Photography: Exploring the Miniature World",
    slug: "macro-photography-miniature-world",
    content: `Macro photography reveals intricate details invisible to the naked eye, transforming everyday objects into abstract works of art. This specialized discipline requires technical precision, creative vision, and often considerable patience.

## Understanding Macro Photography

True macro photography achieves 1:1 magnification or greater, where the subject appears life-size or larger on the camera sensor. This technical definition distinguishes macro photography from close-up photography.

## Equipment for Macro Photography

Dedicated macro lenses provide optimal image quality and convenient focusing ranges. Common focal lengths include 60mm, 100mm, and 180mm, each offering different working distances and perspective characteristics.

## Lighting in Macro Photography

Macro photography's close working distances often block ambient light, creating harsh shadows. Ring flashes, twin-light systems, and reflectors help provide even illumination.

Macro photography opens an entire world of photographic opportunities in subjects that surround us daily.`,
    excerpt: "Discover the fascinating world of macro photography and learn to capture incredible detail in the smallest subjects.",
    featuredImage: "https://images.unsplash.com/photo-1544013778-c7c53323b3c8?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-02-25T14:15:00Z",
    updatedAt: "2024-02-25T14:15:00Z"
  },
  {
    id: 10,
    title: "Black and White Photography: The Art of Monochrome",
    slug: "black-white-photography-monochrome",
    content: `Black and white photography strips away the distraction of color to focus on fundamental visual elements—light, shadow, texture, form, and emotion. This classic approach to image-making challenges photographers to see beyond surface appearances.

## The Vision of Black and White

Learning to visualize scenes in black and white requires practice and understanding of how colors translate to grayscale values. Red and green objects might appear similar in monochrome despite dramatic color differences.

## Technical Approaches

Modern black and white photography typically begins with color capture followed by digital conversion. Understanding color channel mixing, luminosity masks, and targeted adjustments helps create compelling monochrome images.

## Subject Matter for Monochrome

Architecture provides excellent subjects for black and white photography. Strong geometric forms, interesting textures, and dramatic lighting conditions often work better in monochrome than color.

Black and white photography offers a pure approach to visual expression that emphasizes fundamental photographic elements.`,
    excerpt: "Master the timeless art of black and white photography and learn to see the world in shades of gray.",
    featuredImage: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&h=500&fit=crop",
    published: true,
    authorId: "photographer",
    createdAt: "2024-03-01T10:30:00Z",
    updatedAt: "2024-03-01T10:30:00Z"
  }
];

export const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    description: "A stunning portrait captured during the golden hour, showcasing natural lighting techniques.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c9db9e0a?w=800&h=600&fit=crop",
    category: "portraits",
    orderIndex: 1,
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-10T09:00:00Z"
  },
  {
    id: 2,
    title: "Urban Architecture",
    description: "Modern architectural photography highlighting geometric patterns and urban design.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "architecture",
    orderIndex: 2,
    createdAt: "2024-01-12T14:20:00Z",
    updatedAt: "2024-01-12T14:20:00Z"
  },
  {
    id: 3,
    title: "Mountain Landscape",
    description: "Breathtaking mountain vista captured at sunrise with dramatic lighting.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "landscapes",
    orderIndex: 3,
    createdAt: "2024-01-15T06:30:00Z",
    updatedAt: "2024-01-15T06:30:00Z"
  },
  {
    id: 4,
    title: "Street Life",
    description: "Candid street photography capturing authentic moments in urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "street",
    orderIndex: 4,
    createdAt: "2024-01-18T11:45:00Z",
    updatedAt: "2024-01-18T11:45:00Z"
  },
  {
    id: 5,
    title: "Wedding Celebration",
    description: "Joyful wedding moments captured with natural, emotional storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    category: "weddings",
    orderIndex: 5,
    createdAt: "2024-01-20T16:15:00Z",
    updatedAt: "2024-01-20T16:15:00Z"
  },
  {
    id: 6,
    title: "Night Cityscape",
    description: "Long exposure night photography showcasing city lights and urban energy.",
    imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=600&fit=crop",
    category: "night",
    orderIndex: 6,
    createdAt: "2024-01-22T20:00:00Z",
    updatedAt: "2024-01-22T20:00:00Z"
  },
  {
    id: 7,
    title: "Creative Portrait",
    description: "Artistic portrait using creative lighting and composition techniques.",
    imageUrl: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=600&fit=crop",
    category: "portraits",
    orderIndex: 7,
    createdAt: "2024-01-25T13:30:00Z",
    updatedAt: "2024-01-25T13:30:00Z"
  },
  {
    id: 8,
    title: "Nature Macro",
    description: "Detailed macro photography revealing the intricate beauty of natural subjects.",
    imageUrl: "https://images.unsplash.com/photo-1544013778-c7c53323b3c8?w=800&h=600&fit=crop",
    category: "nature",
    orderIndex: 8,
    createdAt: "2024-01-28T10:15:00Z",
    updatedAt: "2024-01-28T10:15:00Z"
  },
  {
    id: 9,
    title: "Commercial Product",
    description: "Professional product photography with clean, commercial lighting.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "commercial",
    orderIndex: 9,
    createdAt: "2024-01-30T15:45:00Z",
    updatedAt: "2024-01-30T15:45:00Z"
  },
  {
    id: 10,
    title: "Wildlife in Nature",
    description: "Patient wildlife photography capturing animals in their natural habitat.",
    imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
    category: "wildlife",
    orderIndex: 10,
    createdAt: "2024-02-02T08:20:00Z",
    updatedAt: "2024-02-02T08:20:00Z"
  },
  {
    id: 11,
    title: "Fashion Editorial",
    description: "High-fashion editorial photography with dramatic lighting and styling.",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    category: "fashion",
    orderIndex: 11,
    createdAt: "2024-02-05T12:00:00Z",
    updatedAt: "2024-02-05T12:00:00Z"
  },
  {
    id: 12,
    title: "Ocean Waves",
    description: "Dynamic seascape photography capturing the power and beauty of ocean waves.",
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    category: "landscapes",
    orderIndex: 12,
    createdAt: "2024-02-08T07:30:00Z",
    updatedAt: "2024-02-08T07:30:00Z"
  },
  {
    id: 13,
    title: "Abstract Light",
    description: "Creative abstract photography exploring light, color, and form.",
    imageUrl: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&h=600&fit=crop",
    category: "abstract",
    orderIndex: 13,
    createdAt: "2024-02-10T19:15:00Z",
    updatedAt: "2024-02-10T19:15:00Z"
  },
  {
    id: 14,
    title: "Event Photography",
    description: "Dynamic event photography capturing energy and emotion at live events.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    category: "events",
    orderIndex: 14,
    createdAt: "2024-02-12T21:45:00Z",
    updatedAt: "2024-02-12T21:45:00Z"
  },
  {
    id: 15,
    title: "Minimalist Composition",
    description: "Clean, minimalist photography focusing on simplicity and negative space.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    category: "minimalist",
    orderIndex: 15,
    createdAt: "2024-02-15T14:30:00Z",
    updatedAt: "2024-02-15T14:30:00Z"
  }
];

// Portfolio categories for filtering
export const portfolioCategories = [
  "all",
  "portraits", 
  "landscapes",
  "street",
  "architecture",
  "weddings",
  "commercial",
  "nature",
  "night",
  "wildlife",
  "fashion",
  "events",
  "abstract",
  "minimalist"
];