
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vmr-blue/70 border-t border-vmr-cyan/20 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">VMR InfoTech</h3>
            <p className="text-gray-300 mb-4">
              Transform your career with cutting-edge MERN Stack training from industry experts.
              From basics to advanced, we guide you to become job-ready.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin size={20} />
              </SocialLink>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/success-stories">Success Stories</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <FooterLink to="/courses">MERN Stack Foundation</FooterLink>
              <FooterLink to="/courses">Advanced React Development</FooterLink>
              <FooterLink to="/courses">Node.js & Express Mastery</FooterLink>
              <FooterLink to="/courses">MongoDB Database Design</FooterLink>
              <FooterLink to="/courses">Full Stack Project Workshop</FooterLink>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-vmr-cyan mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Tech Park, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-vmr-cyan mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-vmr-cyan mr-2 flex-shrink-0" size={18} />
                <a href="mailto:info@vmrinfotech.com" className="text-gray-300 hover:text-vmr-cyan transition-colors">
                  info@vmrinfotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} VMR InfoTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-vmr-cyan transition-colors"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) => (
  <a 
    href={href}
    className="bg-vmr-blue/50 hover:bg-vmr-cyan/20 text-vmr-cyan p-2 rounded-full transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
