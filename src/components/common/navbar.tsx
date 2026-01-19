import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { trackOutboundLink } from '@/lib/analytics';

interface NavLink {
  name: string;
  path: string;
  children?: { name: string; path: string; description?: string }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { name: 'Platform', path: '/' },
    {
      name: 'Portfolio',
      path: '/portfolio',
      children: [
        { name: 'Platform', path: '/', description: 'Unified RIS, PACS, and Reporting' },
        { name: 'RadLinQ', path: '/portfolio/radlinq', description: 'Teleradiology software' },
        { name: 'RadOne', path: '/portfolio/radone', description: 'Independent reporting module' },
        { name: 'InvoiceIQ', path: '/portfolio/invoiceiq', description: 'Smart healthcare billing' },
      ]
    },
    { name: 'Teleradiology', path: '/teleradiology' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (link: NavLink) => {
    if (isActive(link.path)) return true;
    if (link.children) {
      return link.children.some(child => isActive(child.path));
    }
    return false;
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 w-36 h-14">
            <Link to="/" className="block h-full">
              <img
                src="/logo/navbar-logo.svg"
                alt="Somatiq Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                {link.children ? (
                  // Dropdown menu item
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm tracking-wide transition-colors ${
                      isParentActive(link)
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground font-light hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                ) : (
                  // Regular link
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm tracking-wide transition-colors ${
                      isActive(link.path)
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground font-light hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Panel */}
                {link.children && (
                  <div
                    className={`absolute top-full left-0 pt-1 w-64 transition-all duration-200 ${
                      activeDropdown === link.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-3 transition-colors ${
                            isActive(child.path)
                              ? 'bg-muted/50 text-foreground'
                              : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
                          }`}
                        >
                          <span className="text-sm font-light">{child.name}</span>
                          {child.description && (
                            <span className="block text-xs text-muted-foreground/70 mt-0.5">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Button
              className="ml-4 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90 cursor-pointer"
              onClick={() => {
                trackOutboundLink('ris_login');
                window.open('https://ris.somatiq.ai', '_blank');
              }}
            >
              Login to RIS
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.children ? (
                  // Mobile dropdown
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base transition-colors ${
                        isParentActive(link)
                          ? 'text-foreground font-medium bg-muted/30'
                          : 'text-muted-foreground font-light hover:text-foreground hover:bg-muted/20'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile dropdown items */}
                    <div className={`overflow-hidden transition-all duration-200 ${
                      activeDropdown === link.name ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="pl-4 py-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                              isActive(child.path)
                                ? 'text-foreground font-medium bg-muted/30'
                                : 'text-muted-foreground font-light hover:text-foreground hover:bg-muted/20'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Mobile regular link
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base transition-colors ${
                      isActive(link.path)
                        ? 'text-foreground font-medium bg-muted/30'
                        : 'text-muted-foreground font-light hover:text-foreground hover:bg-muted/20'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 px-4">
            <Button
              className="w-full bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90"
              onClick={() => {
                trackOutboundLink('ris_login_mobile');
                window.open('https://ris.somatiq.ai', '_blank');
              }}
            >
              Login to RIS
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
