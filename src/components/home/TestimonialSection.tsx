
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer at TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "VMR InfoTech transformed my career. I went from knowing basic HTML to building complex React applications. The hands-on approach and real-world projects gave me the confidence to ace my interviews.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "MERN Stack Developer at StartupX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The best investment I've made in my career. The instructors are knowledgeable and supportive. I built an impressive portfolio of projects that helped me land my dream job within weeks of completing the course.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Full Stack Engineer at TechGiant",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "VMR InfoTech's curriculum is perfectly balanced between theory and practice. The MongoDB and Node.js modules were particularly excellent. I now work at a top tech company thanks to the skills I gained here.",
    rating: 5,
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-gradient-to-b from-vmr-blue to-vmr-blue/90">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Student Success Stories</h2>
          <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Hear from our graduates who have successfully transitioned into rewarding careers in the tech industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-vmr-blue/40 border border-vmr-cyan/20 rounded-xl p-8 md:p-10">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 w-full h-full bg-vmr-cyan/10 rounded-xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-vmr-cyan">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-vmr-cyan fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-vmr-cyan">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <blockquote>
                <p className="text-lg text-gray-200 italic">"{testimonials[currentIndex].content}"</p>
              </blockquote>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-vmr-blue/80 hover:bg-vmr-cyan/20 text-vmr-cyan p-2 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-vmr-cyan' : 'bg-vmr-cyan/30'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-vmr-blue/80 hover:bg-vmr-cyan/20 text-vmr-cyan p-2 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold mb-8">Our Students Work At</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <CompanyLogo name="Amazon" />
            <CompanyLogo name="Microsoft" />
            <CompanyLogo name="Google" />
            <CompanyLogo name="Facebook" />
            <CompanyLogo name="TCS" />
            <CompanyLogo name="Infosys" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyLogo = ({ name }: { name: string }) => (
  <div className="bg-white/10 px-6 py-3 rounded-lg">
    <span className="text-xl font-bold text-white">{name}</span>
  </div>
);

export default TestimonialSection;
