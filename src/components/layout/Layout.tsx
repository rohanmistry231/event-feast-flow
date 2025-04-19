
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = true }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1">
        {showSidebar && (
          <AnimatePresence>
            <Sidebar />
          </AnimatePresence>
        )}
        
        <motion.main
          className={`flex-1 ${showSidebar && !isMobile ? "ml-64" : ""}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          {children}
        </motion.main>
      </div>
      
      <Footer />
    </div>
  );
}
