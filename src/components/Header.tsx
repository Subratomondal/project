import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import resumeData from '../data/resumeData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const scrollThreshold = 50;
      
      if (position > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Skills', id: 'skills' },
    { title: 'Experience', id: 'experience' },
    { title: 'Projects', id: 'projects' },
    { title: 'Education', id: 'education' },
    { title: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold text-blue-900 transition-colors">
            Subrato<span className="text-blue-600">Mondal</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link relative px-3 py-2 text-sm lg:text-base hover:text-blue-800 transition-colors duration-300 ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.title}
              </a>
            ))}
          </nav>
          
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={resumeData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={resumeData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${resumeData.contact.email}`}
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-blue-800 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center mb-8">
            <a href="#home" className="text-xl font-bold text-blue-900" onClick={() => setIsOpen(false)}>
              Subrato<span className="text-blue-600">Mondal</span>
            </a>
            <button 
              className="text-gray-800 hover:text-blue-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-lg py-2 border-b border-gray-100 ${activeSection === link.id ? 'text-blue-800 font-medium' : 'text-gray-800'}`}
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
          </nav>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href={resumeData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={resumeData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${resumeData.contact.email}`}
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href={`tel:${resumeData.contact.phone}`}
              className="text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;