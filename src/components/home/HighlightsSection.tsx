
import { BookOpen, Code, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HighlightsSection = () => {
  return (
    <section className="section bg-gradient-to-b from-vmr-blue/90 to-vmr-blue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Program Highlights</h2>
          <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Our comprehensive MERN Stack training program is designed to transform beginners into
            job-ready full-stack developers through practical learning and real-world projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HighlightCard 
            icon={<BookOpen size={40} />}
            title="Basics to Advanced Training"
            description="Start with HTML, CSS, and JavaScript fundamentals, then progress to advanced MERN concepts and best practices."
            link="/courses"
            linkText="View Curriculum"
          />
          <HighlightCard 
            icon={<Code size={40} />}
            title="100% Hands-on Projects"
            description="Build 5+ real-world projects including e-commerce platforms, chat applications, and admin dashboards."
            link="/projects"
            linkText="Explore Projects"
          />
          <HighlightCard 
            icon={<Award size={40} />}
            title="Placement Support"
            description="Resume building, interview preparation, technical mock interviews and connections to hiring partners."
            link="/success-stories"
            linkText="Success Stories"
          />
        </div>
        
        <div className="text-center mt-16">
          <Link to="/courses" className="btn-primary inline-block">
            View Full Curriculum
          </Link>
        </div>
      </div>
    </section>
  );
};

const HighlightCard = ({ 
  icon, 
  title, 
  description, 
  link, 
  linkText 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string; 
  linkText: string; 
}) => (
  <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg text-center card-hover flex flex-col h-full">
    <div className="mb-6 mx-auto bg-vmr-cyan/10 p-4 rounded-full">
      <div className="text-vmr-cyan">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300 mb-6 flex-grow">{description}</p>
    <Link 
      to={link} 
      className="text-vmr-cyan hover:underline font-semibold inline-flex items-center"
    >
      {linkText} <span className="ml-2">→</span>
    </Link>
  </div>
);

export default HighlightsSection;
