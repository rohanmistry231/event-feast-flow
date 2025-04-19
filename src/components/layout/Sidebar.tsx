
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationLinks } from "./sidebar/NavigationLinks";
import { SearchBar } from "./sidebar/SearchBar";
import { FilterSection } from "./sidebar/FilterSection";
import { cuisineTypes, priceRanges, locations } from "./sidebar/constants";

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
            <Filter size={16} />
          </Button>
        )}

        <div className="mt-4 mb-4">
          <NavigationLinks />
        </div>

        <Separator />

        <SearchBar />

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
          <Button className="w-full bg-feast-500 hover:bg-feast-600 text-white">
            Apply Filters
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
