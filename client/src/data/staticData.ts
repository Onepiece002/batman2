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
    imageUrl: "/images/007.jpg",
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
  },
  // Additional portfolio images to expand collection
  {
    id: 16,
    title: "Urban Night Portrait",
    description: "Street portrait photography utilizing city lights and urban atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    category: "portraits",
    orderIndex: 16,
    createdAt: "2024-02-18T20:15:00Z",
    updatedAt: "2024-02-18T20:15:00Z"
  },
  {
    id: 17,
    title: "Mountain Peak Sunrise",
    description: "Breathtaking alpine landscape captured at the first light of dawn.",
    imageUrl: "https://images.unsplash.com/photo-1464822759844-d150baef493e?w=800&h=600&fit=crop",
    category: "landscapes",
    orderIndex: 17,
    createdAt: "2024-02-20T06:45:00Z",
    updatedAt: "2024-02-20T06:45:00Z"
  },
  {
    id: 18,
    title: "Street Market Chaos",
    description: "Dynamic street photography capturing the energy of a bustling market.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "street",
    orderIndex: 18,
    createdAt: "2024-02-22T12:30:00Z",
    updatedAt: "2024-02-22T12:30:00Z"
  },
  {
    id: 19,
    title: "Modern Glass Tower",
    description: "Contemporary architectural photography emphasizing geometric patterns.",
    imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=600&fit=crop",
    category: "architecture",
    orderIndex: 19,
    createdAt: "2024-02-25T15:20:00Z",
    updatedAt: "2024-02-25T15:20:00Z"
  },
  {
    id: 20,
    title: "Bride's Preparation",
    description: "Intimate wedding photography capturing the quiet moments before the ceremony.",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop",
    category: "weddings",
    orderIndex: 20,
    createdAt: "2024-02-28T09:00:00Z",
    updatedAt: "2024-02-28T09:00:00Z"
  },
  {
    id: 21,
    title: "Product Studio Shot",
    description: "Professional product photography with clean lighting and composition.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "commercial",
    orderIndex: 21,
    createdAt: "2024-03-02T14:45:00Z",
    updatedAt: "2024-03-02T14:45:00Z"
  },
  {
    id: 22,
    title: "Forest Canopy",
    description: "Nature photography exploring the intricate patterns of forest foliage.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    category: "nature",
    orderIndex: 22,
    createdAt: "2024-03-05T11:15:00Z",
    updatedAt: "2024-03-05T11:15:00Z"
  },
  {
    id: 23,
    title: "City Lights Reflection",
    description: "Night photography capturing urban reflections in still water.",
    imageUrl: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&h=600&fit=crop",
    category: "night",
    orderIndex: 23,
    createdAt: "2024-03-08T22:30:00Z",
    updatedAt: "2024-03-08T22:30:00Z"
  },
  {
    id: 24,
    title: "Eagle in Flight",
    description: "Wildlife photography capturing the majesty of birds of prey in action.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    category: "wildlife",
    orderIndex: 24,
    createdAt: "2024-03-10T16:20:00Z",
    updatedAt: "2024-03-10T16:20:00Z"
  },
  {
    id: 25,
    title: "Haute Couture Editorial",
    description: "High-end fashion photography with dramatic styling and lighting.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
    category: "fashion",
    orderIndex: 25,
    createdAt: "2024-03-12T13:45:00Z",
    updatedAt: "2024-03-12T13:45:00Z"
  },
  {
    id: 26,
    title: "Concert Energy",
    description: "Live music photography capturing the raw energy of performance.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    category: "events",
    orderIndex: 26,
    createdAt: "2024-03-15T21:00:00Z",
    updatedAt: "2024-03-15T21:00:00Z"
  },
  {
    id: 27,
    title: "Geometric Shadows",
    description: "Abstract photography exploring light, shadow, and architectural forms.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    category: "abstract",
    orderIndex: 27,
    createdAt: "2024-03-18T10:30:00Z",
    updatedAt: "2024-03-18T10:30:00Z"
  },
  {
    id: 28,
    title: "Zen Garden",
    description: "Minimalist photography of Japanese garden elements and tranquil spaces.",
    imageUrl: "https://images.unsplash.com/photo-1544013778-c7c53323b3c8?w=800&h=600&fit=crop",
    category: "minimalist",
    orderIndex: 28,
    createdAt: "2024-03-20T08:15:00Z",
    updatedAt: "2024-03-20T08:15:00Z"
  },
  {
    id: 29,
    title: "Artist Portrait",
    description: "Environmental portrait of a painter in their creative studio space.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
    category: "portraits",
    orderIndex: 29,
    createdAt: "2024-03-22T14:20:00Z",
    updatedAt: "2024-03-22T14:20:00Z"
  },
  {
    id: 30,
    title: "Desert Dunes",
    description: "Landscape photography showcasing the flowing curves of sand dunes.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    category: "landscapes",
    orderIndex: 30,
    createdAt: "2024-03-25T12:45:00Z",
    updatedAt: "2024-03-25T12:45:00Z"
  },
  {
    id: 31,
    title: "Subway Rush",
    description: "Street photography capturing the motion and energy of urban commuters.",
    imageUrl: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&h=600&fit=crop",
    category: "street",
    orderIndex: 31,
    createdAt: "2024-03-28T17:30:00Z",
    updatedAt: "2024-03-28T17:30:00Z"
  },
  {
    id: 32,
    title: "Cathedral Interior",
    description: "Architectural photography emphasizing the grandeur of historic religious spaces.",
    imageUrl: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800&h=600&fit=crop",
    category: "architecture",
    orderIndex: 32,
    createdAt: "2024-03-30T11:00:00Z",
    updatedAt: "2024-03-30T11:00:00Z"
  },
  {
    id: 33,
    title: "First Dance",
    description: "Wedding photography capturing the romance and emotion of the couple's first dance.",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
    category: "weddings",
    orderIndex: 33,
    createdAt: "2024-04-02T19:45:00Z",
    updatedAt: "2024-04-02T19:45:00Z"
  },
  {
    id: 34,
    title: "Corporate Team",
    description: "Professional group photography for corporate branding and marketing.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    category: "commercial",
    orderIndex: 34,
    createdAt: "2024-04-05T13:15:00Z",
    updatedAt: "2024-04-05T13:15:00Z"
  },
  {
    id: 35,
    title: "Waterfall Cascade",
    description: "Nature photography using long exposure to capture the smooth flow of water.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "nature",
    orderIndex: 35,
    createdAt: "2024-04-08T07:20:00Z",
    updatedAt: "2024-04-08T07:20:00Z"
  },
  {
    id: 36,
    title: "Star Trails",
    description: "Night photography capturing the movement of stars across the dark sky.",
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    category: "night",
    orderIndex: 36,
    createdAt: "2024-04-10T23:00:00Z",
    updatedAt: "2024-04-10T23:00:00Z"
  },
  {
    id: 37,
    title: "Wolf Pack",
    description: "Wildlife photography documenting the social dynamics of wild wolves.",
    imageUrl: "https://images.unsplash.com/photo-1605127182140-4ac3c60e7dc3?w=800&h=600&fit=crop",
    category: "wildlife",
    orderIndex: 37,
    createdAt: "2024-04-12T15:30:00Z",
    updatedAt: "2024-04-12T15:30:00Z"
  },
  {
    id: 38,
    title: "Runway Model",
    description: "Fashion photography from fashion week showcasing avant-garde designs.",
    imageUrl: "https://images.unsplash.com/photo-1566479179817-c61b0b3e5bdc?w=800&h=600&fit=crop",
    category: "fashion",
    orderIndex: 38,
    createdAt: "2024-04-15T18:45:00Z",
    updatedAt: "2024-04-15T18:45:00Z"
  },
  {
    id: 39,
    title: "Festival Crowd",
    description: "Event photography capturing the excitement and energy of music festivals.",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
    category: "events",
    orderIndex: 39,
    createdAt: "2024-04-18T20:15:00Z",
    updatedAt: "2024-04-18T20:15:00Z"
  },
  {
    id: 40,
    title: "Light Painting",
    description: "Abstract photography using long exposure and light painting techniques.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    category: "abstract",
    orderIndex: 40,
    createdAt: "2024-04-20T22:30:00Z",
    updatedAt: "2024-04-20T22:30:00Z"
  },
  {
    id: 41,
    title: "Single Flower",
    description: "Minimalist macro photography focusing on the delicate beauty of individual blooms.",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
    category: "minimalist",
    orderIndex: 41,
    createdAt: "2024-04-22T09:45:00Z",
    updatedAt: "2024-04-22T09:45:00Z"
  },
  {
    id: 42,
    title: "CEO Portrait",
    description: "Corporate portrait photography emphasizing leadership and professionalism.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop",
    category: "portraits",
    orderIndex: 42,
    createdAt: "2024-04-25T16:00:00Z",
    updatedAt: "2024-04-25T16:00:00Z"
  },
  {
    id: 43,
    title: "Canyon Depths",
    description: "Landscape photography exploring the dramatic geology of slot canyons.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "landscapes",
    orderIndex: 43,
    createdAt: "2024-04-28T11:30:00Z",
    updatedAt: "2024-04-28T11:30:00Z"
  },
  {
    id: 44,
    title: "Street Musician",
    description: "Street photography capturing the passion and artistry of busking performers.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    category: "street",
    orderIndex: 44,
    createdAt: "2024-05-01T14:20:00Z",
    updatedAt: "2024-05-01T14:20:00Z"
  },
  {
    id: 45,
    title: "Bridge Architecture",
    description: "Architectural photography showcasing the engineering beauty of modern bridges.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    category: "architecture",
    orderIndex: 45,
    createdAt: "2024-05-03T12:15:00Z",
    updatedAt: "2024-05-03T12:15:00Z"
  },
  {
    id: 46,
    title: "Wedding Ceremony",
    description: "Wedding photography documenting the sacred moments of the ceremony.",
    imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    category: "weddings",
    orderIndex: 46,
    createdAt: "2024-05-05T15:45:00Z",
    updatedAt: "2024-05-05T15:45:00Z"
  },
  {
    id: 47,
    title: "Tech Startup",
    description: "Commercial photography showcasing innovative technology and workspace culture.",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "commercial",
    orderIndex: 47,
    createdAt: "2024-05-08T10:30:00Z",
    updatedAt: "2024-05-08T10:30:00Z"
  },
  {
    id: 48,
    title: "Butterfly Close-up",
    description: "Nature macro photography revealing the intricate patterns of butterfly wings.",
    imageUrl: "https://images.unsplash.com/photo-1544013778-c7c53323b3c8?w=800&h=600&fit=crop",
    category: "nature",
    orderIndex: 48,
    createdAt: "2024-05-10T13:45:00Z",
    updatedAt: "2024-05-10T13:45:00Z"
  },
  {
    id: 49,
    title: "Aurora Borealis",
    description: "Night photography capturing the ethereal beauty of the northern lights.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "night",
    orderIndex: 49,
    createdAt: "2024-05-12T01:20:00Z",
    updatedAt: "2024-05-12T01:20:00Z"
  },
  {
    id: 50,
    title: "Bear in Wilderness",
    description: "Wildlife photography documenting the majesty of bears in their natural habitat.",
    imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
    category: "wildlife",
    orderIndex: 50,
    createdAt: "2024-05-15T08:00:00Z",
    updatedAt: "2024-05-15T08:00:00Z"
  },
  {
    id: 51,
    title: "Vintage Fashion",
    description: "Fashion photography with retro styling and classic elegance.",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    category: "fashion",
    orderIndex: 51,
    createdAt: "2024-05-18T17:30:00Z",
    updatedAt: "2024-05-18T17:30:00Z"
  },
  {
    id: 52,
    title: "Conference Speaker",
    description: "Event photography capturing keynote presentations and audience engagement.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    category: "events",
    orderIndex: 52,
    createdAt: "2024-05-20T11:45:00Z",
    updatedAt: "2024-05-20T11:45:00Z"
  },
  {
    id: 53,
    title: "Color Spectrum",
    description: "Abstract photography exploring the relationship between color and emotion.",
    imageUrl: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&h=600&fit=crop",
    category: "abstract",
    orderIndex: 53,
    createdAt: "2024-05-22T19:15:00Z",
    updatedAt: "2024-05-22T19:15:00Z"
  },
  {
    id: 54,
    title: "Empty Beach",
    description: "Minimalist seascape photography emphasizing solitude and natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    category: "minimalist",
    orderIndex: 54,
    createdAt: "2024-05-25T06:30:00Z",
    updatedAt: "2024-05-25T06:30:00Z"
  },
  {
    id: 55,
    title: "Child Portrait",
    description: "Family portrait photography capturing the innocence and wonder of childhood.",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop",
    category: "portraits",
    orderIndex: 55,
    createdAt: "2024-05-28T14:45:00Z",
    updatedAt: "2024-05-28T14:45:00Z"
  },
  {
    id: 56,
    title: "Volcanic Landscape",
    description: "Dramatic landscape photography of volcanic terrain and lava formations.",
    imageUrl: "https://images.unsplash.com/photo-1464822759844-d150baef493e?w=800&h=600&fit=crop",
    category: "landscapes",
    orderIndex: 56,
    createdAt: "2024-05-30T09:20:00Z",
    updatedAt: "2024-05-30T09:20:00Z"
  },
  {
    id: 57,
    title: "Night Market",
    description: "Street photography capturing the vibrant atmosphere of evening food markets.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "street",
    orderIndex: 57,
    createdAt: "2024-06-02T21:00:00Z",
    updatedAt: "2024-06-02T21:00:00Z"
  },
  {
    id: 58,
    title: "Spiral Staircase",
    description: "Architectural photography emphasizing the geometric beauty of spiral forms.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "architecture",
    orderIndex: 58,
    createdAt: "2024-06-05T16:30:00Z",
    updatedAt: "2024-06-05T16:30:00Z"
  },
  {
    id: 59,
    title: "Reception Dance",
    description: "Wedding photography capturing the joy and celebration of the reception party.",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop",
    category: "weddings",
    orderIndex: 59,
    createdAt: "2024-06-08T22:15:00Z",
    updatedAt: "2024-06-08T22:15:00Z"
  },
  {
    id: 60,
    title: "Restaurant Interior",
    description: "Commercial photography showcasing culinary spaces and dining experiences.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    category: "commercial",
    orderIndex: 60,
    createdAt: "2024-06-10T12:45:00Z",
    updatedAt: "2024-06-10T12:45:00Z"
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
