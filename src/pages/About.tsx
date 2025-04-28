
import Layout from '../components/Layout';
import { CheckCircle, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-vmr-blue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="mb-4">About VMR InfoTech</h1>
            <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              We are a premier technology training institute specializing in MERN Stack development,
              committed to transforming aspiring developers into industry-ready professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2018 by a team of industry veterans, VMR InfoTech began with a simple mission: 
                to bridge the gap between theoretical education and practical industry requirements in web development.
              </p>
              <p className="text-gray-300 mb-4">
                After observing that many computer science graduates lacked the practical skills needed to thrive 
                in real-world development environments, we developed a curriculum focused on hands-on learning and 
                project-based training.
              </p>
              <p className="text-gray-300">
                Today, we have successfully trained over 1,000 students, with more than 85% of our graduates securing 
                positions at leading tech companies within three months of completing our program.
              </p>
            </div>
            <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-vmr-cyan/20 w-full h-full rounded-lg -z-10"></div>
              <h2 className="text-2xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Mission</h3>
                  <p className="text-gray-300">
                    To provide high-quality, industry-relevant training that equips students with the skills, 
                    confidence, and experience needed to excel in the competitive tech industry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vision</h3>
                  <p className="text-gray-300">
                    To be the leading tech training institute that transforms passionate learners into 
                    skilled professionals who drive innovation in the global technology landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Teaching Philosophy</h2>
              <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-300">
                At VMR InfoTech, we believe in "Learn by Building" – a hands-on approach that emphasizes
                practical application of knowledge through real-world projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PhilosophyCard 
                icon={<BookOpen size={40} />}
                title="Practical Learning"
                description="We focus on practical application rather than theoretical concepts alone."
              />
              <PhilosophyCard 
                icon={<Users size={40} />}
                title="Small Batch Sizes"
                description="Limited students per batch ensures personalized attention and better outcomes."
              />
              <PhilosophyCard 
                icon={<Award size={40} />}
                title="Industry Standards"
                description="Our curriculum is constantly updated to reflect current industry practices."
              />
              <PhilosophyCard 
                icon={<CheckCircle size={40} />}
                title="Project-Based"
                description="Students build real-world projects that strengthen their portfolio."
              />
            </div>
          </div>
          
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Expert Trainers</h2>
              <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-300">
                Learn from industry professionals with years of experience in MERN stack development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TrainerCard 
                name="Vikram Reddy"
                position="Lead Instructor & Founder"
                image="https://randomuser.me/api/portraits/men/32.jpg"
                experience="12+ years of experience in full-stack development. Former Tech Lead at Amazon."
              />
              <TrainerCard 
                name="Meera Sharma"
                position="React Specialist"
                image="https://randomuser.me/api/portraits/women/65.jpg"
                experience="8+ years specializing in React and front-end architecture. Previously at Microsoft."
              />
              <TrainerCard 
                name="Rahul Kumar"
                position="Backend Expert"
                image="https://randomuser.me/api/portraits/men/75.jpg"
                experience="10+ years working with Node.js and database systems. Former Senior Developer at IBM."
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const PhilosophyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg text-center card-hover">
    <div className="mb-6 mx-auto bg-vmr-cyan/10 p-4 rounded-full inline-block">
      <div className="text-vmr-cyan">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const TrainerCard = ({ 
  name, 
  position, 
  image, 
  experience 
}: { 
  name: string; 
  position: string; 
  image: string; 
  experience: string;
}) => (
  <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg text-center card-hover">
    <div className="mb-6 mx-auto">
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-vmr-cyan mx-auto">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-vmr-cyan mb-4">{position}</p>
    <p className="text-gray-300">{experience}</p>
  </div>
);

export default About;
