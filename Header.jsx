
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Baby, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const { toast } = useToast();

  const handleFeatureClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature in Progress",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };
  
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/age-groups/newborn', text: 'Age Groups' },
    { to: '/nutrition', text: 'Nutrition' },
    { to: '/essentials', text: 'Essentials' },
    { to: '/toys', text: 'Toys' },
    { to: '/clothes', text: 'Clothes' },
    { to: '/dos-and-donts', text: 'Do\'s & Don\'ts' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <Baby className="h-8 w-8 text-pink-500" />
          <span className="text-2xl font-bold text-gray-800">BabyCare Buddy</span>
        </NavLink>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-600 hover:text-pink-500 transition-colors duration-300 font-medium ${isActive ? 'text-pink-500' : ''}`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={handleFeatureClick}>
            <Search className="h-5 w-5 text-gray-600" />
          </Button>
          <Button onClick={handleFeatureClick}>
            <User className="mr-2 h-5 w-5" /> Login/Signup
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
  