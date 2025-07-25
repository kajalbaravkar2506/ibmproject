
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Baby, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
    const { toast } = useToast();

    const handleFeatureClick = (e) => {
        e.preventDefault();
        toast({
            title: "🚧 Feature in Progress",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <NavLink to="/" className="flex items-center space-x-2">
                            <Baby className="h-8 w-8 text-pink-500" />
                            <span className="text-xl font-bold text-gray-800">BabyCare Buddy</span>
                        </NavLink>
                        <p className="text-sm">Personalized Care for Every Tiny Step.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 mb-4">Quick Links</p>
                        <ul className="space-y-2">
                            <li><NavLink to="/about" onClick={handleFeatureClick} className="hover:text-pink-500">About Us</NavLink></li>
                            <li><NavLink to="/privacy" onClick={handleFeatureClick} className="hover:text-pink-500">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms" onClick={handleFeatureClick} className="hover:text-pink-500">Terms of Service</NavLink></li>
                            <li><NavLink to="/blog" className="hover:text-pink-500">Blog</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 mb-4">Stay Connected</p>
                        <p className="text-sm mb-4">Sign up for our newsletter for the latest tips and tricks.</p>
                        <form onClick={handleFeatureClick} className="flex">
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400" />
                            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
                        <div className="flex space-x-4">
                            <a href="#" onClick={handleFeatureClick} className="text-gray-500 hover:text-pink-500"><Twitter /></a>
                            <a href="#" onClick={handleFeatureClick} className="text-gray-500 hover:text-pink-500"><Facebook /></a>
                            <a href="#" onClick={handleFeatureClick} className="text-gray-500 hover:text-pink-500"><Instagram /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm">
                    <p>&copy; 2025 BabyCare Buddy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
  