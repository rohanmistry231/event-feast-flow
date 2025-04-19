
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSectionProps {
  title: string;
  items: { id: string; label: string }[];
  expanded: boolean;
  onToggle: () => void;
}

export function FilterSection({ title, items, expanded, onToggle }: FilterSectionProps) {
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
}
