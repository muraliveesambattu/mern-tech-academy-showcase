
import { useState } from 'react';
import Layout from '../components/Layout';
import { Calendar, User, Clock } from 'lucide-react';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="mb-4">Blog</h1>
          <div className="w-16 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Insights, tutorials, and industry trends to help you master the MERN Stack
            and advance your web development career.
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="bg-vmr-blue/50 border border-vmr-cyan/20 rounded-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Calendar size={14} className="mr-1" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <User size={14} className="mr-1" />
                <span>{blogPosts[0].author}</span>
              </div>
              <h2 className="mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
              <a href="#" className="btn-secondary inline-block self-start">Read More</a>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-vmr-blue/30 border border-vmr-cyan/10 rounded-lg overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime} min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <a href="#" className="text-vmr-cyan hover:underline">Continue Reading →</a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination className="mt-12">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
              </PaginationItem>
            )}
            
            {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  isActive={currentPage === index + 1}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {currentPage < Math.ceil(blogPosts.length / postsPerPage) && (
              <PaginationItem>
                <PaginationNext onClick={() => paginate(currentPage + 1)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
        
        {/* Newsletter */}
        <div className="mt-20 bg-vmr-blue/70 border border-vmr-cyan/20 rounded-lg p-8 text-center">
          <h3 className="mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest web development insights, tutorials, and industry trends delivered straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md bg-vmr-blue/50 border border-vmr-cyan/30 text-white focus:outline-none focus:border-vmr-cyan"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Why MERN Stack is the Future of Web Development",
    excerpt: "Explore why the MERN Stack has become the go-to technology stack for modern web applications and how it's shaping the future of web development.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=MERN+Future",
    author: "Alex Johnson",
    date: "May 15, 2023",
    readTime: 8
  },
  {
    id: 2,
    title: "Top 5 MERN Projects to Build Your Resume",
    excerpt: "Discover high-impact projects that will showcase your MERN skills and make your resume stand out to potential employers.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=Resume+Projects",
    author: "Sarah Chen",
    date: "June 22, 2023",
    readTime: 10
  },
  {
    id: 3,
    title: "How to Crack MERN Stack Developer Interviews",
    excerpt: "Prepare for your next job interview with these essential tips, common questions, and best practices for MERN developers.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=Interview+Tips",
    author: "Michael Rodriguez",
    date: "July 8, 2023",
    readTime: 12
  },
  {
    id: 4,
    title: "Common Mistakes MERN Stack Beginners Make",
    excerpt: "Avoid these frequent pitfalls that new MERN developers encounter and learn how to overcome them in your journey.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=Common+Mistakes",
    author: "Priya Patel",
    date: "August 3, 2023",
    readTime: 7
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn advanced techniques for creating robust, high-performance APIs that can handle growth and increased traffic.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=Scalable+APIs",
    author: "David Kim",
    date: "September 17, 2023",
    readTime: 9
  },
  {
    id: 6,
    title: "State Management Patterns in React Applications",
    excerpt: "Compare different approaches to managing state in React apps, from Context API to Redux and beyond.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=State+Management",
    author: "Emma Wilson",
    date: "October 5, 2023",
    readTime: 11
  },
  {
    id: 7,
    title: "MongoDB Schema Design Best Practices",
    excerpt: "Optimize your database performance and structure with these proven MongoDB schema design patterns.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=MongoDB+Schema",
    author: "Lucas Brown",
    date: "November 12, 2023",
    readTime: 8
  },
  {
    id: 8,
    title: "Authentication Strategies for MERN Applications",
    excerpt: "Implement secure user authentication in your MERN apps using JWT, OAuth, and other modern approaches.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=Authentication",
    author: "Sophia Garcia",
    date: "December 3, 2023",
    readTime: 10
  },
  {
    id: 9,
    title: "From Junior to Senior: Career Path for MERN Developers",
    excerpt: "Navigate your career progression with actionable advice for growing from a junior to a senior MERN stack developer.",
    image: "https://placehold.co/800x500/0A192F/00FFFF?text=Career+Path",
    author: "James Wilson",
    date: "January 22, 2024",
    readTime: 6
  }
];

export default Blog;
