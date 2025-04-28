
import { CheckCircle, Server, Code, Database } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="section bg-gradient-to-b from-vmr-blue to-vmr-blue/90">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose MERN Stack?</h2>
          <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            The MERN stack is one of the most in-demand tech stacks in the industry today, 
            powering modern web applications for startups and enterprises alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TechCard 
            icon={<Database className="w-10 h-10 text-vmr-cyan" />}
            title="MongoDB"
            description="A NoSQL database that stores data in flexible, JSON-like documents."
          />
          <TechCard 
            icon={<Server className="w-10 h-10 text-vmr-cyan" />}
            title="Express.js"
            description="A minimal and flexible Node.js web application framework."
          />
          <TechCard 
            icon={<Code className="w-10 h-10 text-vmr-cyan" />}
            title="React.js"
            description="A JavaScript library for building user interfaces with reusable components."
          />
          <TechCard 
            icon={<Server className="w-10 h-10 text-vmr-cyan" />}
            title="Node.js"
            description="A JavaScript runtime built on Chrome's V8 JavaScript engine."
          />
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why VMR InfoTech?</h2>
            <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <FeatureItem 
              title="Industry-Relevant Curriculum"
              description="Our curriculum is designed by industry experts to ensure you learn what matters in today's job market."
            />
            <FeatureItem 
              title="Hands-on Learning"
              description="Build real-world projects that strengthen your portfolio and demonstrate your skills to employers."
            />
            <FeatureItem 
              title="Expert Instructors"
              description="Learn from experienced developers who have worked with major tech companies and startups."
            />
            <FeatureItem 
              title="Job Placement Support"
              description="Get assistance with resume building, interview preparation, and connections to our hiring partners."
            />
            <FeatureItem 
              title="Small Batch Sizes"
              description="Limited seats per batch ensure personalized attention and better learning outcomes."
            />
            <FeatureItem 
              title="Flexible Learning Options"
              description="Choose from weekday, weekend, or evening batches to fit your schedule."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-6 rounded-lg card-hover">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle className="w-6 h-6 text-vmr-cyan" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default IntroSection;
