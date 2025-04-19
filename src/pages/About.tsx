
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-display font-bold text-feast-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Event Feast is your premier destination for bulk event catering, connecting you with the best caterers for groups of 25 or more people.
        </p>
      </motion.div>
    </Layout>
  );
};

export default About;
