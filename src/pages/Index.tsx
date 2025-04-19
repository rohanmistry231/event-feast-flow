
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
      >
        <AdSlider />
        
        <FeaturedCaterers />
        
        <HowItWorks />
        
        <Testimonials />
        
        <CallToAction />
      </motion.div>
    </Layout>
  );
};

export default Index;
