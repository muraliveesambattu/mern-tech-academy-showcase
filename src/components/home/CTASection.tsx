
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-vmr-blue to-vmr-blue/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-vmr-cyan/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-vmr-cyan/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-vmr-blue/40 border border-vmr-cyan/30 rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master the MERN Stack?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join VMR InfoTech's comprehensive training program and transform your career in web development. New batches starting soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Enroll Today
            </Link>
            <Link to="/contact?demo=true" className="btn-secondary">
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
