
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-vmr-blue/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-montserrat font-bold text-white">
              VMR <span className="text-vmr-cyan">InfoTech</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/success-stories">Success Stories</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-vmr-blue/95 backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
          <MobileNavLink to="/courses" onClick={toggleMenu}>Courses</MobileNavLink>
          <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
          <MobileNavLink to="/success-stories" onClick={toggleMenu}>Success Stories</MobileNavLink>
          <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="btn-primary block text-center"
              onClick={toggleMenu}
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-white hover:text-vmr-cyan font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vmr-cyan after:transition-all hover:after:w-full"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="block text-white hover:text-vmr-cyan font-medium py-2 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
