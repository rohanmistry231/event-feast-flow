
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Sidebar from "@/components/layout/Sidebar";

const Caterers = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout showSidebar={!isMobile}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-feast-800">Our Caterers</h1>
          
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[85vw] sm:w-[350px]">
                <Sidebar />
              </SheetContent>
            </Sheet>
          )}
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Discover our network of professional caterers ready to make your event unforgettable.
          We've partnered with the best in the business to ensure your gathering of 25+ guests 
          receives exceptional food and service.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for caterer cards that would be populated from an API */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-medium text-lg">Caterer Name {index + 1}</h3>
                <p className="text-gray-500 text-sm mb-2">Cuisine Type • Location</p>
                <div className="flex items-center text-amber-500 mb-3">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                  <span className="text-gray-600 text-sm ml-1">(42 reviews)</span>
                </div>
                <Button 
                  className="w-full bg-feast-500 hover:bg-feast-600 text-white"
                  asChild
                >
                  <a href={`/caterer/${index + 1}`}>View Menu</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Caterers;
