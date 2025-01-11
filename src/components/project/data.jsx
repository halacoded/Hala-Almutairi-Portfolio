import fahimImage from "../../assests/Screenshot 2025-01-10 140733.png";
import OlivesHerbsImage from "../../assests/Olives&Herbs Display.png";
import UniNavImage from "../../assests/uninav2.png";
export const data = [
  {
    id: 1,
    title: "Fahim: Empowering Students",
    description:
      "A system for course and professor reviews, personalized recommendations, and academic progress tracking.",
    features: [
      "Course Recommendations: Personalized suggestions for courses based on user preferences and past courses.",
      "Professor Reviews: Insights from fellow students about professors and their teaching styles.",
      "Course Reviews: Detailed feedback from students who have previously taken the courses.",
      "User Authentication: Secure sign-up and login with JWT-based authentication.",
      "Profile Management: Manage user profiles, including updating personal information and profile pictures.",
      "Academic Progress Tracking: Keep track of completed credits and courses.",
    ],
    technologiesUsed: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT (for authentication)",
      "React",
    ],
    links: {
      backendRepo: "https://github.com/halacoded/FahimBK",
      frontendRepo: "https://github.com/Gaurav-Janjvadiya/Fahim-Client",
    },
    images: {
      backendImage: fahimImage,
      frontendImage: "url_to_your_image_of_frontend",
    },
  },
  {
    id: 2,
    title: "Olives & Herbs: Media Blog",
    description:
      "Arabic recipe social media blog where users can discover fresh, seasonal ingredients and create meals that celebrate arabic culture.",
    features: [
      "User Registration: Easy sign-up and login process.",
      "Recipe Discovery: Explore a wide variety of recipes.",
      "Seasonal Ingredients: Embrace the flavors of each season.",
      "Nourishing Meals: Find recipes that fuel your body with wholesome goodness.",
      "Nature-Inspired Dishes: Dishes crafted from earth's bounty.",
      "Sweet Indulgence: Discover delightful confections.",
    ],
    technologiesUsed: [
      "React",
      "React Router",
      "Slick Carousel",
      "Tailwind CSS",
    ],
    links: { backendRepo: "URL_to_your_live_site" },
    images: {
      backendImage: OlivesHerbsImage,
      frontendImage: "url_to_your_image_of_frontend",
    },
  },
  {
    id: 3,
    title: "UniNav: Student Hub",
    description:
      "platform designed to help students discover, share, and collaborate on study materials, as well as connect with peers.",
    features: [
      "User Registration: Easy sign-up and login process.",
      "Resource Management: Browse, upload, and share study resources like notes, past exams, and homework.",
      "Peer Feedback: Share notes, receive feedback, and ask questions for peer assistance.",
      "Community Interaction: Invite friends, create/join study groups and communities, and chat with other students.",
      "Notifications: Receive notifications for new study materials or reviews.",
      "Bookmarking: Bookmark courses and resources for easy access.",
      "Profile Management: Create and manage a profile to track courses and interactions.",
      "Course Ratings and Reviews: Rate course difficulty, see average ratings, and read professor reviews.",
      "AI Assistants: Utilize AI voice and text assistants to help with studies.",
    ],
    technologiesUsed: [
      "Expo",
      "React Native",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: {
      backendRepo: "https://github.com/halacoded/UniNav-Student-Resource-Hub",
    },
    images: {
      backendImage: UniNavImage,
    },
  },
];
