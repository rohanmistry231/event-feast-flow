
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-feast-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">EF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">Event</span>
                <span className="font-display font-bold text-lg text-feast-500 -mt-1">Feast</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your premier destination for bulk event catering, connecting you with the best caterers for groups of 25 or more people.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-feast-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-feast-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-feast-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/caterers" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Caterers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-feast-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Event Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events/wedding" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/events/corporate" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/events/birthday" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link to="/events/social" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Social Gatherings
                </Link>
              </li>
              <li>
                <Link to="/events/festival" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Festivals & Fairs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-feast-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-feast-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/for-caterers" className="text-gray-400 hover:text-feast-500 transition-colors">
                  For Caterers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Event Feast. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-feast-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-feast-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-feast-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
