import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { trackOutboundLink } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  path: string;
  children?: { name: string; path: string; description?: string }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
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

  // Scroll-aware navbar: show/hide on scroll direction, change style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background styling
      setIsScrolled(currentScrollY > 20);

      // Hide/show navbar based on scroll direction (only after scrolling 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          // Scrolling down & past threshold - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            className="shrink-0 w-36 h-14"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="block h-full">
              <img
                src="/logo/navbar-logo.svg"
                alt="Somatiq Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                {link.children ? (
                  // Dropdown menu item
                  <Link
                    to={link.path}
                    className={cn(
                      "group relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm tracking-wide transition-all duration-200",
                      isParentActive(link)
                        ? "text-foreground font-medium"
                        : "text-foreground/60 font-light hover:text-foreground"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === link.name ? "rotate-180" : ""
                      )}
                    />
                    {/* Hover indicator */}
                    <span className={cn(
                      "absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full transition-transform duration-200 origin-left",
                      isParentActive(link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )} />
                  </Link>
                ) : (
                  // Regular link
                  <Link
                    to={link.path}
                    className={cn(
                      "group relative px-4 py-2 rounded-lg text-sm tracking-wide transition-all duration-200",
                      isActive(link.path)
                        ? "text-foreground font-medium"
                        : "text-foreground/60 font-light hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {/* Hover indicator */}
                    <span className={cn(
                      "absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full transition-transform duration-200 origin-left",
                      isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )} />
                  </Link>
                )}

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-0 pt-2 w-72"
                    >
                      <div className="bg-background/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-xl shadow-black/20 py-2 overflow-hidden">
                        {link.children.map((child, index) => (
                          <motion.div
                            key={child.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15, delay: index * 0.03 }}
                          >
                            <Link
                              to={child.path}
                              className={cn(
                                "group block px-4 py-3 transition-all duration-200",
                                isActive(child.path)
                                  ? "bg-primary/10"
                                  : "hover:bg-white/[0.04]"
                              )}
                            >
                              <span className={cn(
                                "text-sm transition-colors duration-200",
                                isActive(child.path)
                                  ? "text-foreground font-medium"
                                  : "text-foreground/80 group-hover:text-foreground font-light"
                              )}>
                                {child.name}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-foreground/40 mt-0.5 group-hover:text-foreground/50 transition-colors">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4"
            >
              <Button
                className={cn(
                  "relative overflow-hidden rounded-lg text-sm font-medium transition-all duration-300",
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white/10 text-foreground hover:bg-white/20 border border-white/10"
                )}
                onClick={() => {
                  trackOutboundLink('ris_login');
                  window.open('https://ris.somatiq.ai', '_blank');
                }}
              >
                Login to RIS
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
              isOpen
                ? "bg-white/10 text-foreground"
                : "text-foreground/60 hover:text-foreground hover:bg-white/5"
            )}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden fixed inset-x-0 top-16 bg-background/98 backdrop-blur-xl border-t border-white/[0.08] overflow-hidden"
          >
            <div className="h-full overflow-y-auto px-4 py-6">
              <div className="space-y-1">
                {navLinks.map((link, linkIndex) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: linkIndex * 0.05 }}
                  >
                    {link.children ? (
                      // Mobile dropdown
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(link.name)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base transition-all duration-200",
                            isParentActive(link)
                              ? "text-foreground font-medium bg-white/[0.06]"
                              : "text-foreground/70 font-light hover:text-foreground hover:bg-white/[0.04]"
                          )}
                        >
                          {link.name}
                          <motion.div
                            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>

                        {/* Mobile dropdown items */}
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1">
                                {link.children.map((child, childIndex) => (
                                  <motion.div
                                    key={child.path}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15, delay: childIndex * 0.03 }}
                                  >
                                    <Link
                                      to={child.path}
                                      className={cn(
                                        "block px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                                        isActive(child.path)
                                          ? "text-foreground font-medium bg-primary/10"
                                          : "text-foreground/60 font-light hover:text-foreground hover:bg-white/[0.04]"
                                      )}
                                    >
                                      {child.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Mobile regular link
                      <Link
                        to={link.path}
                        className={cn(
                          "block px-4 py-3.5 rounded-xl text-base transition-all duration-200",
                          isActive(link.path)
                            ? "text-foreground font-medium bg-white/[0.06]"
                            : "text-foreground/70 font-light hover:text-foreground hover:bg-white/[0.04]"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                className="mt-8 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  className="w-full bg-primary text-white rounded-xl text-base font-medium hover:bg-primary/90 py-6"
                  onClick={() => {
                    trackOutboundLink('ris_login_mobile');
                    window.open('https://ris.somatiq.ai', '_blank');
                  }}
                >
                  Login to RIS
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
