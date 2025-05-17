
import Layout from '../components/Layout';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Projects = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="mb-4">Projects Showcase</h1>
          <div className="w-16 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Explore real-world applications built by our students and instructors using the MERN stack. These projects demonstrate the skills you'll acquire during our training program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="bg-vmr-blue/50 border border-vmr-cyan/20 overflow-hidden card-hover">
              <div className="h-48 bg-vmr-blue/70 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-vmr-cyan mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="bg-vmr-blue/70 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-vmr-cyan/10 pt-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-vmr-cyan flex items-center gap-1 text-sm"
                >
                  <Github size={16} />
                  Source Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-vmr-cyan flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="mb-6">Want to build impressive projects like these?</h3>
          <Link to="/courses" className="btn-primary">Explore Our Courses</Link>
        </div>
      </div>
    </Layout>
  );
};

const projectsData = [
  {
    id: 1,
    title: "MERN E-commerce Platform",
    description: "A full-featured online shopping platform with product management, cart functionality, and payment processing.",
    image: "https://placehold.co/600x400/0A192F/00FFFF?text=E-commerce+App",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo-ecommerce.example.com"
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description: "Instant messaging platform with private chats, group conversations, and notification system.",
    image: "https://placehold.co/600x400/0A192F/00FFFF?text=Chat+App",
    techStack: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo-chat.example.com"
  },
  {
    id: 3,
    title: "Developer Portfolio Builder",
    description: "Application that helps developers create impressive portfolios with customizable templates.",
    image: "https://placehold.co/600x400/0A192F/00FFFF?text=Portfolio+Builder",
    techStack: ["React", "Node.js", "Express", "MongoDB", "CloudinaryAPI"],
    github: "https://github.com",
    demo: "https://demo-portfolio.example.com"
  },
  {
    id: 4,
    title: "Job Search Portal",
    description: "Platform connecting job seekers with employers, featuring job listings and application tracking.",
    image: "https://placehold.co/600x400/0A192F/00FFFF?text=Job+Portal",
    techStack: ["React", "Context API", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: null
  },
  {
    id: 5,
    title: "Blog & CMS Platform",
    description: "Content management system with user roles, rich text editing, and comment functionality.",
    image: "https://placehold.co/600x400/0A192F/00FFFF?text=Blog+System",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
    github: "https://github.com",
    demo: "https://demo-blog.example.com"
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description: "Comprehensive data visualization dashboard with user management and analytics.",
    image: "https://placehold.co/600x400/0A192F/00FFFF?text=Admin+Dashboard",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo-dashboard.example.com"
  }
];

import { Link } from 'react-router-dom';
export default Projects;
