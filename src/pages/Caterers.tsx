
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const Caterers = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-display font-bold text-feast-800 mb-6">Our Caterers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our network of professional caterers ready to make your event unforgettable.
        </p>
      </motion.div>
    </Layout>
  );
};

export default Caterers;
