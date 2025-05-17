
import Layout from '../components/Layout';
import { Book } from 'lucide-react';

const Courses = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="mb-4">Our Courses</h1>
          <div className="w-16 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            From beginner to advanced, our comprehensive MERN Stack curriculum is designed to transform you into a job-ready full stack developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseLevels.map((level) => (
            <div key={level.title} className="bg-vmr-blue/50 border border-vmr-cyan/20 rounded-lg p-6 card-hover">
              <div className="flex items-center mb-4">
                <div className="bg-vmr-cyan/20 p-3 rounded-lg mr-4">
                  <Book className="text-vmr-cyan" size={24} />
                </div>
                <h3 className="text-xl">{level.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{level.description}</p>
              <ul className="space-y-2 mb-6">
                {level.topics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-vmr-cyan mr-2">•</span>
                    <span className="text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <span className="text-sm text-vmr-cyan">Duration: {level.duration}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-vmr-blue/70 border border-vmr-cyan/20 rounded-lg p-8">
          <h2 className="mb-6 text-center">Full-Stack Real-World Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-vmr-blue/30 p-5 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-vmr-cyan">{project.title}</h4>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="mb-6">Ready to Master the MERN Stack?</h3>
          <Link to="/contact" className="btn-primary">Enroll Today</Link>
        </div>
      </div>
    </Layout>
  );
};

// Course Level Data
const courseLevels = [
  {
    title: "Beginner Level",
    description: "Start your journey with the fundamentals of web development.",
    duration: "4 weeks",
    topics: [
      "HTML5, CSS3, JavaScript Fundamentals",
      "Git & GitHub Version Control",
      "Introduction to Frontend Development",
      "Responsive Web Design Principles"
    ]
  },
  {
    title: "Intermediate Level",
    description: "Build dynamic user interfaces with modern React.",
    duration: "6 weeks",
    topics: [
      "ReactJS Core Concepts & Hooks",
      "State Management with Context API",
      "React Router for Navigation",
      "Building Frontend Projects & UI Libraries"
    ]
  },
  {
    title: "Advanced Level",
    description: "Complete your full stack skills with backend development.",
    duration: "8 weeks",
    topics: [
      "Node.js & Express.js Backend Development",
      "RESTful API Development",
      "MongoDB Database Operations",
      "Authentication & Authorization (JWT, OAuth)"
    ]
  }
];

// Project Data
const projects = [
  {
    title: "E-commerce Application",
    description: "Build a fully functional online store with product catalog, cart, and payment integration."
  },
  {
    title: "Job Portal",
    description: "Create a platform for job seekers and employers with profile management and job listings."
  },
  {
    title: "Blog System",
    description: "Develop a content management system with user roles and rich text editing."
  },
  {
    title: "Admin Dashboard",
    description: "Design a data visualization dashboard with charts, tables, and user management."
  },
  {
    title: "Real-Time Chat Application",
    description: "Implement socket-based messaging with private chats and group conversations."
  },
  {
    title: "Portfolio Builder",
    description: "Create an app that helps users build professional portfolios with customizable templates."
  }
];

import { Link } from 'react-router-dom';
export default Courses;
