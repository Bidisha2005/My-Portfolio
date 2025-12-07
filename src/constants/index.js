import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  matplotlib,
  jupyter,
  postman,
  flask,
  nextjs,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI/ML Enthusiast',
    icon: ux,
  },
  {
    title: 'CS Fundamentals',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'matplotlib',
    icon: matplotlib,
  },
  {
    name: 'jupyter',
    icon: jupyter,
  },
  {
    name: 'postman',
    icon: postman,
  },
  {
    name: 'flask',
    icon: flask,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Page-Turners',
   description: 'A MERN stack web application for organizing and managing teacher-recommended books with secure authentication and resource management.',
tags: [
{
name: 'react',
color: 'blue-text-gradient',
},
{
name: 'node.js',
color: 'green-text-gradient',
},
{
name: 'express.js',
color: 'yellow-text-gradient',
},
{
name: 'mongodb',
color: 'green-text-gradient',
},
{
name: 'tailwind',
color: 'pink-text-gradient',
},
],
features: [
'Secure user authentication system',
'Book catalog with search & filtering',
'PDF resource management',
'Responsive mobile-friendly UI',
'RESTful API with CRUD operations'
],
    image: komikult,
    repo: 'https://github.com/Bidisha2005/Page-Turners',
    demo: 'https://page-turners-final.onrender.com',
  },
  {
    id: 'project-2',
name: 'ClgVibe',
description: 'A real-time campus communication platform with live chat, discussion forums, and event coordination, beta-tested with 20+ students and handling 50+ daily messages.',
tags: [
{
name: 'react',
color: 'blue-text-gradient',
},
{
name: 'node.js',
color: 'green-text-gradient',
},
{
name: 'express.js',
color: 'yellow-text-gradient',
},
{
name: 'mongodb',
color: 'green-text-gradient',
},
{
name: 'stream-api',
color: 'pink-text-gradient',
},
{
name: 'jwt-auth',
color: 'purple-text-gradient',
},
],
features: [
'Real-time messaging with Stream Chat API',
'JWT-based authentication system',
'4 dedicated modules: Chat, Forums, Events, Announcements',
'10+ reusable React components',
'Optimized backend for low-latency communication',
'Mobile-responsive UI design'
],
    image: leaderboard,
    repo: 'https://github.com/Bidisha2005/ClgVibe-Final',
    demo: 'https://clg-vibe.onrender.com',
  },
  {
    id: 'project-3',
    name: 'Umbrella-Maybe',
description: 'A Flask web application delivering real-time, location-based weather predictions with dynamic UI animations and an integrated AI chatbot.',
tags: [
{
name: 'python',
color: 'blue-text-gradient',
},
{
name: 'flask',
color: 'green-text-gradient',
},
{
name: 'scikit-learn',
color: 'orange-text-gradient',
},
{
name: 'machine-learning',
color: 'pink-text-gradient',
},
{
name: 'pandas',
color: 'yellow-text-gradient',
},
{
name: 'gemini-ai',
color: 'purple-text-gradient',
},
],
features: [
'Random Forest model trained on 2,000+ meteorological data rows',
'92% accuracy in rainfall prediction',
'Gemini-powered weather Q&A chatbot',
'Dynamic UI with animated weather visualizations',
'Comprehensive model evaluation using F1-score, ROC-AUC, and confusion matrix',
'Real-time location-based predictions'
],
    image: math,
    repo: 'https://github.com/Bidisha2005/Umbrella-Maybe',
    demo: 'https://umbrella-maybe-3.onrender.com',
  },
  {
    id: 'project-4',
   id: 'project-4',
name: 'Jewellery E-Commerce',
description: 'A frontend-focused jewellery e-commerce platform built with Next.js, featuring product showcases, responsive UI, and interactive components for seamless user experience.',
tags: [
{
name: 'nextjs',
color: 'blue-text-gradient',
},
{
name: 'typescript',
color: 'blue-text-gradient',
},
{
name: 'tailwind',
color: 'pink-text-gradient',
},
{
name: 'framer-motion',
color: 'purple-text-gradient',
},
{
name: 'shadcn/ui',
color: 'cyan-text-gradient',
},
{
name: 'responsive',
color: 'green-text-gradient',
},
],
features: [
'Static site generation for optimal performance',
'Interactive product galleries with smooth animations',
'Responsive design across all device sizes',
'Client-side filtering and sorting capabilities',
'Modern UI components with Shadcn/UI',
'Optimized images and assets for fast loading'
],
    image: movie,
    repo: 'https://github.com/Bidisha2005/Jewellery',
    demo: 'https://akash-jewellers.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Telegram Bot',
description: 'An intelligent Telegram bot that tracks daily achievements and generates AI-powered motivational progress reports using Google Gemini AI.',
tags: [
{
name: 'node.js',
color: 'green-text-gradient',
},
{
name: 'telegraf',
color: 'blue-text-gradient',
},
{
name: 'mongodb',
color: 'green-text-gradient',
},
{
name: 'gemini-ai',
color: 'purple-text-gradient',
},
{
name: 'chatbot',
color: 'pink-text-gradient',
},
],
features: [
'/start command initializes tracking and /generate creates comprehensive daily reports',
'Google Gemini AI integration for personalized motivational summaries',
'MongoDB database for persistent user activity storage',
'Real-time achievement logging across multiple platforms (LinkedIn, GitHub, Twitter)',
'Timezone-aware progress tracking with intelligent analytics',
'Modular architecture supporting future enhancements like team collaboration and API integrations'
],
    image: nyeusi,
    repo: 'https://github.com/Bidisha2005/TelegramBot',
    demo: 'https://github.com/Bidisha2005/TelegramBot',
  },
];

export { services, technologies, experiences, projects };
