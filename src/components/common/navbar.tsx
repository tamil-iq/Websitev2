import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'Teleradiology', path: '/teleradiology' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/90 shadow-sm sticky top-0 z-50">
      <div className=" xl:max-w-4/5 lg:max-w-full mx-auto px-3 pl-0 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 w-40 h-16">
            <Link to="/">
              <img src="/logo/navbar-logo.svg" alt="Logo" className='w-full h-full object-contain' />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-md tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground/50 font-extralight hover:text-foreground hover:bg-muted/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className='bg-foreground text-secondary rounded-sm uppercase text-sm font-medium hover:bg-foreground/80 cursor-pointer'
              onClick={() => window.open('https://ris.somatiq.ai', '_blank')}
            >
              Login to RIS
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-400 bg-gray-900'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button variant="outline" size="default" className="w-full">
                Login to RIS
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
