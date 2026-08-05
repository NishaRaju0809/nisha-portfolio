export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  demo?: string;
  category: string;
  icon: string;
  featured?: boolean;
  description: string;
};

export const projects: Project[] = [
  {
    slug: 'drifthome',
    title: 'DriftHome',
    tags: [
      'React Native',
      'Reanimated',
      'Gesture Handler',
      'SignalR',
      'Google Maps',
      'Next.js',
    ],
    image: '/images/drifthome.png',
    demo: 'https://play.google.com/store/apps/details?id=com.laddr',
    category: 'MOBILE',
    icon: 'home',
    featured: true,
    description:
      'Property discovery lacked engagement; users had no intuitive way to browse listings or communicate with hosts in real time.\n\nBuilt Tinder-style swipe property browsing with custom Reanimated animations and integrated SignalR real-time chat — boosting user engagement 80% and interaction rates 90%.',
  },
  {
    slug: 'squad-accountability-tracker',
    title: 'Squad Accountability Tracker',
    tags: ['React Native', 'Firebase', 'OpenAI API', 'Stream Chat'],
    image: '/images/freelanz.png',
    category: 'MOBILE · AI',
    icon: 'groups',
    featured: true,
    description:
      'Existing accountability apps lacked intelligent feedback loops and seamless group communication, reducing long-term user commitment.\n\nDeveloped AI-powered accountability features using OpenAI API; integrated Stream Chat for real-time group messaging and Firebase for cross-device sync — improving goal completion rates.',
  },
  {
    slug: 'ecoageing',
    title: 'EcoAgeing',
    image: '/images/ecoageing.png',
    category: 'MOBILE',
    tags: ['React Native', 'Firebase', 'i18next', 'Push Notifications'],
    demo: 'https://play.google.com/store/apps/details?id=com.ecoaging',
    icon: 'eco',
    description:
      'Climate education platforms struggled with low retention and poor accessibility across language barriers and demographics.\n\nBuilt a gamified multilingual platform with quizzes, badges, push notifications, and i18next localization — achieving 80% user retention improvement.',
  },
  {
    slug: 'modern-boutique',
    title: 'Modern Boutique',
    category: 'WEB · E-COMMERCE',
    icon: 'storefront',
    featured: true,
    image: '/images/modern-boutique.jpg',
    tags: ['React', 'TypeScript', 'Vite', 'React Router', 'Bootstrap'],
    description:
      'Modern Boutique is a refined fashion e-commerce experience designed with elegance, simplicity, and attention to detail — made with passion and built for style.\n\nKey Features:\n• Elegant, minimalist product and collection layouts with high-impact visuals.\n• Seamless browsing across atelier collections with intuitive filters for category, size, color, and style.\n• Rich product detail pages with galleries, variants, ratings, wishlist, and clear size guidance.\n• Fully responsive shopping flows that feel polished on desktop and mobile.\n\nOutcome: A luxury-inspired boutique storefront that showcases product storytelling, smooth navigation, and a polished responsive UI.',
  },
  {
    slug: 'shopease',
    title: 'ShopEase',
    description:
      'ShopEase is an e-commerce web application built to provide users with a fast, secure, and seamless online shopping experience.\n\nKey Features:\n• User authentication and profile management.\n• Product listing with search and category filtering.\n• Add to cart, wishlist, and secure checkout using Stripe.\n• Firebase integration for backend and order data management.\n• Responsive design optimized for all devices.\n\nOutcome: Modern, responsive e-commerce platform with smooth payment integration and scalable architecture.',
    image: '/images/shopEase.png',
    tags: ['React.js', 'Tailwind CSS', 'Firebase', 'Stripe API'],
    category: 'WEB · E-COMMERCE',
    icon: 'shopping_bag',
    featured: false,
  },
  {
    slug: 'food-recipe-app',
    title: 'Food Recipe App',
    description:
      'The Food Recipe App is a beautifully designed mobile application that allows users to explore, upload, and share their favorite recipes with a vibrant food community.\n\nKey Features:\n• User-Uploaded Recipes with images, ingredients, and step-by-step instructions.\n• Recipe Discovery and social sharing.\n• Secure login using Google and Facebook.\n• Firebase Firestore for recipe data and images.\n\nOutcome: Fully functional cross-platform mobile app with Firebase integration and social authentication.',
    image: '/images/foodRecipe.png',
    tags: ['React Native', 'Firebase', 'Google login', 'Dynamic linking'],
    category: 'MOBILE',
    icon: 'restaurant',
  },
  {
    slug: 'speeching-arts',
    title: 'Speeching Arts',
    description:
      'Speeching Arts is a tourist assistance mobile application developed for Milan. Originally built with WordPress and converted into a mobile app using Appilix.\n\nProvides guides and recommendations for tourists, with WordPress CMS for easy content updates and a user-friendly navigation experience.',
    image: '/images/speechingArts.png',
    tags: ['WordPress', 'Appilix'],
    category: 'MOBILE',
    icon: 'explore',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
