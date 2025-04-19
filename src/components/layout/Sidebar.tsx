
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Users, 
  Info, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useIsMobile } from "@/hooks/use-mobile";

const cuisineTypes = [
  { id: "italian", label: "Italian" },
  { id: "indian", label: "Indian" },
  { id: "mexican", label: "Mexican" },
  { id: "chinese", label: "Chinese" },
  { id: "thai", label: "Thai" },
  { id: "american", label: "American" },
];

const priceRanges = [
  { id: "budget", label: "Budget (₹500-1000/person)" },
  { id: "moderate", label: "Moderate (₹1000-1500/person)" },
  { id: "premium", label: "Premium (₹1500+/person)" },
];

const locations = [
  { id: "north", label: "North Delhi" },
  { id: "south", label: "South Delhi" },
  { id: "east", label: "East Delhi" },
  { id: "west", label: "West Delhi" },
  { id: "central", label: "Central Delhi" },
];

interface FilterSectionProps {
  title: string;
  items: { id: string; label: string }[];
  expanded: boolean;
  onToggle: () => void;
}

const FilterSection = ({ title, items, expanded, onToggle }: FilterSectionProps) => {
  return (
    <div className="mb-4">
      <button 
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left font-medium text-feast-800 mb-2"
      >
        <span>{title}</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 ml-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox id={item.id} />
                  <label
                    htmlFor={item.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    cuisine: true,
    price: false,
    location: false,
  });
  const isMobile = useIsMobile();

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  if (isMobile && !isOpen) {
    return (
      <div className="fixed left-0 top-20 z-40">
        <Button
          variant="outline"
          className="bg-background border-feast-500 text-feast-500 hover:bg-feast-50"
          onClick={() => setIsOpen(true)}
        >
          <Filter size={16} className="mr-2" />
          Filters
        </Button>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={isMobile ? "closed" : "open"}
        animate="open"
        exit="closed"
        variants={sidebarVariants}
        className={`bg-white border-r border-muted p-4 flex flex-col min-h-screen w-64 z-30 ${
          isMobile ? "fixed left-0 top-0 pt-20" : "relative"
        }`}
      >
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-16 p-1 h-8 w-8"
          >
            <ChevronDown />
          </Button>
        )}

        <div className="mt-4 mb-4">
          <div className="space-y-1">
            <Link to="/" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </Link>
            <Link to="/caterers" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
              <Users size={18} className="mr-2" />
              <span>Caterers</span>
            </Link>
            <Link to="/about" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
              <Info size={18} className="mr-2" />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
              <Phone size={18} className="mr-2" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        <Separator />

        <div className="mt-4 mb-2 relative">
          <div className="relative">
            <Search size={16} className="absolute left-2 top-2.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search caterers..."
              className="pl-8 pr-4 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-feast-500 focus:border-feast-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 mt-2">
          <h3 className="font-medium">Filters</h3>
        </div>

        <div className="overflow-auto flex-1">
          <FilterSection
            title="Cuisine Type"
            items={cuisineTypes}
            expanded={expandedSections.cuisine}
            onToggle={() => toggleSection("cuisine")}
          />
          <FilterSection
            title="Price Range"
            items={priceRanges}
            expanded={expandedSections.price}
            onToggle={() => toggleSection("price")}
          />
          <FilterSection
            title="Location"
            items={locations}
            expanded={expandedSections.location}
            onToggle={() => toggleSection("location")}
          />
        </div>

        <div className="mt-auto pt-4">
          <Button
            className="w-full bg-feast-500 hover:bg-feast-600 text-white"
          >
            Apply Filters
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
