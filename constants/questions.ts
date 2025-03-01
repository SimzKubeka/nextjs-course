/**
 * Questions & Tags Data
 *
 * Purpose:
 * - Stores predefined questions and tags related to React, Next.js, JavaScript, and web development.
 *
 * Functionality:
 * - Provides structured data for populating a discussion forum, FAQ section, or learning resource.
 * - Includes question metadata such as title, description, and tags.
 * - Stores tags along with the number of associated questions.
 *
 * Features:
 * - Covers beginner to advanced topics in React and Next.js.
 * - Enables easy categorization using relevant tags.
 * - Can be extended to include more questions and tags dynamically.
 *
 * Usage:
 * - Import `questions` and `tags` wherever structured question and tag data is needed.
 * - Can be used to filter questions based on topics and popular tags.
 */

export const questions = [
  {
    _id: 1,
    title: "How do I get started with React as a beginner?",
    description:
      "I'm completely new to React and looking for the best resources to start learning. Should I begin with official documentation, online courses, or build a project first? Any structured roadmap would be helpful.",
    tags: ["react", "javascript", "frontend"],
    author: {
      _id: 1,
      name: "John Doe",
    },
    upvotes: 10,
    views: 100,
    answers: 1,
    createdAt: new Date(),
  },
  {
    _id: 2,
    title:
      "What are React Hooks, and how do they improve functional components?",
    description:
      "I've heard about React Hooks, but I'm not entirely sure how they work. Can someone explain the benefits of using hooks like useState and useEffect over class components? Are there any best practices to follow?",
    tags: ["react", "hooks", "functional components"],
    author: {
      _id: 2,
      name: "Jane Smith",
    },
    upvotes: 10,
    views: 100,
    answers: 1,
    createdAt: new Date(),
  },
  {
    _id: 3,
    title: "What is the difference between React and Next.js?",
    description:
      "I'm trying to decide whether to use React or Next.js for my next project. Can someone explain the key differences, advantages, and when to choose one over the other? How does server-side rendering (SSR) play a role?",
    tags: ["react", "next.js", "ssr"],
    author: {
      _id: 3,
      name: "Tyrone Doe",
    },
    upvotes: 10,
    views: 100,
    answers: 1,
    createdAt: new Date(),
  },
  {
    _id: 4,
    title: "How do I optimize performance in a large-scale React application?",
    description:
      "I'm working on a React project that has started to slow down as the codebase grows. What are some best practices for optimizing performance, including techniques like memoization, lazy loading, and code splitting?",
    tags: ["react", "performance", "optimization"],
    author: {
      _id: 4,
      name: "Hannah Smith",
    },
    upvotes: 10,
    views: 100,
    answers: 1,
    createdAt: new Date(),
  },
  {
    _id: 5, 
    title: "What is the best way to learn Next.js?",
    description:
      "I'm new to Next.js and I want to learn the best way to learn Next.js.",
    tags: ["next.js", "javascript", "web development"],
    author: {
      _id: 1,
      name: "John Doe",
    },
    upvotes: 10,
    views: 100,
    answers: 1,
    createdAt: new Date(),
  },
];

export const tags = [
  {
    _id: 1,
    name: "React",
    questions: 10511, 
  },
  {
    _id: 2,
    name: "Next.js",
    questions: 510,
  },
  {
    _id: 3,
    name: "JavaScript",
    questions: 3457,
  },
  {
    _id: 4,
    name: "CSS",
    questions: 274,
  },
  {
    _id: 5,
    name: "Tailwind CSS",
    questions: 125,
  },
];
