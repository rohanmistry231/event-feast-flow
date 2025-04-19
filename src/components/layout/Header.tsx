
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Would be connected to a cart context in a real app
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 bg-white border-b border-muted z-40 px-4 py-2">
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="mr-2 p-2" aria-label="Menu">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[75vw] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-feast-500 flex items-center justify-center">
                        <span className="text-white font-display font-bold text-xl">EF</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-lg text-feast-800">Event</span>
                        <span className="font-display font-bold text-lg text-feast-500 -mt-1">Feast</span>
                      </div>
                    </div>
                  </div>
                  
                  <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                      <li>
                        <Link 
                          to="/"
                          className="flex items-center px-4 py-3 text-base font-medium rounded-md hover:bg-feast-50 text-feast-800"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/caterers"
                          className="flex items-center px-4 py-3 text-base font-medium rounded-md hover:bg-feast-50 text-feast-800"
                        >
                          Caterers
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/about"
                          className="flex items-center px-4 py-3 text-base font-medium rounded-md hover:bg-feast-50 text-feast-800"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/contact"
                          className="flex items-center px-4 py-3 text-base font-medium rounded-md hover:bg-feast-50 text-feast-800"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="p-4 border-t">
                    <Button 
                      className="w-full bg-feast-500 hover:bg-feast-600 text-white"
                      asChild
                    >
                      <Link to="/request-quote">Request Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-feast-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">EF</span>
              </div>
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-lg text-feast-800">Event</span>
              <span className="font-display font-bold text-lg text-feast-500 -mt-1">Feast</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center">
          <motion.div
            className="relative mr-2"
            animate={{
              width: isSearchExpanded ? (isMobile ? "180px" : "200px") : isMobile ? "40px" : "200px",
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="search"
              className={`w-full p-2 pl-10 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-feast-500 focus:border-feast-500 ${
                isSearchExpanded || !isMobile ? "opacity-100" : "opacity-0"
              }`}
              placeholder="Search caterers..."
              onFocus={() => setIsSearchExpanded(true)}
              onBlur={() => setIsSearchExpanded(false)}
            />
          </motion.div>

          <div className="flex space-x-1 sm:space-x-2">
            <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
              <Link to="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1.25rem] min-h-[1.25rem] flex items-center justify-center bg-feast-500 text-white"
                  >
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>

            <Button 
              className="hidden md:flex bg-feast-500 hover:bg-feast-600 text-white"
              size="sm"
              asChild
            >
              <Link to="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
