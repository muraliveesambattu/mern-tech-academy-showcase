
import Layout from '../components/Layout';
import { Award, Building } from 'lucide-react';

const SuccessStories = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="mb-4">Success Stories</h1>
          <div className="w-16 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Discover how our students transformed their careers after completing our MERN Stack training program.
          </p>
        </div>
        
        {/* Featured Success Story */}
        <div className="bg-vmr-blue/50 border border-vmr-cyan/20 rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-vmr-cyan">
                <img 
                  src="https://placehold.co/400x400/0A192F/00FFFF?text=John+D" 
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Award className="text-vmr-cyan mr-3" size={24} />
                <h2>Featured Student: John Doe</h2>
              </div>
              <p className="text-gray-300 mb-4">
                "Before joining VMR InfoTech, I had basic knowledge of HTML and CSS. After completing the MERN Stack course,
                I secured a position as a Full Stack Developer at a leading tech company with a 150% salary increase.
                The hands-on projects and mentorship made all the difference in my career journey."
              </p>
              <div className="flex items-center">
                <Building className="text-vmr-cyan mr-2" size={18} />
                <span className="font-semibold">Now working at: Tech Innovations Inc.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-vmr-blue/30 border border-vmr-cyan/10 rounded-lg p-6 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-vmr-cyan text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center text-sm text-gray-400">
                <Building className="mr-2" size={14} />
                <span>Now at {testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Companies Section */}
        <div className="mt-20">
          <h3 className="text-center mb-8">Where Our Students Work</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company) => (
              <div key={company} className="text-gray-400 text-xl md:text-2xl font-bold opacity-70 hover:opacity-100 hover:text-white transition-all">
                {company}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="mb-6">Ready to Write Your Success Story?</h3>
          <Link to="/contact" className="btn-primary">Start Your Journey</Link>
        </div>
      </div>
    </Layout>
  );
};

const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Frontend Developer",
    company: "Acme Tech",
    avatar: "https://placehold.co/200x200/0A192F/00FFFF?text=EC",
    quote: "The project-based approach helped me build a portfolio that impressed recruiters. Within a month of graduating, I received three job offers!"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Full Stack Developer",
    company: "Global Solutions",
    avatar: "https://placehold.co/200x200/0A192F/00FFFF?text=MR",
    quote: "Coming from a non-technical background, I was worried about transitioning to tech. VMR InfoTech's structured curriculum made learning enjoyable and effective."
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "MERN Stack Developer",
    company: "StartUp Innovations",
    avatar: "https://placehold.co/200x200/0A192F/00FFFF?text=PP",
    quote: "The mentors at VMR InfoTech don't just teach code; they teach industry best practices that helped me stand out in interviews."
  },
  {
    id: 4,
    name: "David Kim",
    role: "Backend Developer",
    company: "DataSync Technologies",
    avatar: "https://placehold.co/200x200/0A192F/00FFFF?text=DK",
    quote: "The advanced Node.js and MongoDB modules gave me the confidence to handle complex backend challenges in my current role."
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "React Developer",
    company: "UI Experts Inc.",
    avatar: "https://placehold.co/200x200/0A192F/00FFFF?text=SJ",
    quote: "The React projects we built were so comprehensive that I was able to contribute to my team from day one at my new job."
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Software Engineer",
    company: "Tech Giants Co.",
    avatar: "https://placehold.co/200x200/0A192F/00FFFF?text=AT",
    quote: "VMR InfoTech's training helped me transition from a QA role to a full-fledged developer position with a 70% salary increase."
  }
];

const companies = [
  "Amazon", "TCS", "Infosys", "Microsoft", "Accenture", "Wipro", "IBM", "Cognizant"
];

import { Link } from 'react-router-dom';
export default SuccessStories;
