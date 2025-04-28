
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CodeSnippets = [
  "npm install react",
  "import { useState } from 'react'",
  "const App = () => { ... }",
  "mongodb.connect()",
  "app.use(express.json())",
  "<div className='container'>",
  "const [data, setData] = useState([])",
  "useEffect(() => { ... })",
  "router.get('/api/users')",
  "export default Component",
];

const HeroSection = () => {
  const [snippets, setSnippets] = useState<{ id: number; text: string; left: number; delay: number; speed: number }[]>([]);

  useEffect(() => {
    // Create floating code snippets
    const newSnippets = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      text: CodeSnippets[Math.floor(Math.random() * CodeSnippets.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      speed: 20 + Math.random() * 20,
    }));
    
    setSnippets(newSnippets);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with code snippets */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="floating-code"
            style={{
              left: `${snippet.left}%`,
              animationDelay: `${snippet.delay}s`,
              animationDuration: `${snippet.speed}s`,
            }}
          >
            {snippet.text}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-vmr-blue/30 via-vmr-blue to-vmr-blue"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="mb-6 animate-fade-in-up">
              Master the MERN Stack –{" "}
              <span className="text-vmr-cyan">Build Real-World Applications</span>{" "}
              at VMR InfoTech!
            </h1>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transform your career with our hands-on training program. Learn MongoDB, Express, React, and Node.js from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary text-center">
                Enroll Today
              </Link>
              <Link to="/courses" className="btn-secondary text-center">
                Explore Courses
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-vmr-blue to-black p-6 rounded-xl border border-vmr-cyan/30 shadow-xl animate-float">
                <pre className="text-vmr-cyan text-xs md:text-sm font-mono overflow-x-auto">
                  <code>{`// MERN Stack Development
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch projects from API
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app">
      <h1>My Portfolio</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;`}</code>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-vmr-cyan/20 w-full h-full rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
