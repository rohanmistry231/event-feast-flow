
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AdSlider from "@/components/home/AdSlider";
import FeaturedCaterers from "@/components/home/FeaturedCaterers";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen w-full"
      >
        <AdSlider />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-6 sm:py-8">
          <FeaturedCaterers />
          <HowItWorks />
          <Testimonials />
          <CallToAction />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Index;
