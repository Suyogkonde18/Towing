import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isHomePage
          ? 'bg-gradient-to-r from-sky-50 via-yellow-50 to-blue-50 text-black'
          : 'bg-white text-black'
      } backdrop-blur-md shadow-sm border-b border-gray-200 font-poppins transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl sm:text-3xl font-extrabold tracking-wider">
          Govind Towing
        </h1>

        {/* Hamburger Icon (Mobile) */}
        <motion.button
          className="sm:hidden text-3xl transition-transform transform hover:scale-110"
          onClick={toggleMenu}
          initial={{ rotate: 0 }}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="w-8 h-1 bg-current" />
            <div className="w-8 h-1 bg-current" />
            <div className="w-8 h-1 bg-current" />
          </div>
        </motion.button>

        {/* Navigation Links */}
        <motion.ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:flex-row gap-10 items-center text-lg font-semibold sm:space-x-10 transition-all duration-300`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {['Home', 'About Us', 'Services', 'Contact'].map((label, index) => {
            const path = label === 'Home' ? '/' : `/${label.toLowerCase().replace(/\s+/g, '')}`;
            return (
              <motion.li
                key={label}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={path}
                  className="hover:text-yellow-600 hover:underline transition-all duration-300 transform hover:scale-105"
                >
                  {label}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
