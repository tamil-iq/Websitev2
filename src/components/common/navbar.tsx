import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Teleradiology', path: '/teleradiology' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border/50'
        : 'bg-background/90 shadow-sm'
    }`}>
      <div className="xl:max-w-4/5 lg:max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-muted-foreground hover:text-primary focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-primary hover:bg-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button
                variant="outline"
                size="default"
                className="w-full"
                onClick={() => window.open('https://ris.somatiq.ai', '_blank')}
              >
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
