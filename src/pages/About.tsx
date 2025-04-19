
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-feast-800 mb-4 sm:mb-6">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Event Feast is your premier destination for bulk event catering, connecting you with the best caterers for groups of 25 or more people.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023, we've quickly become the go-to platform for event organizers looking for reliable, high-quality catering services for corporate events, weddings, parties, and more.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to make event planning easier by providing a curated selection of the best caterers in your area, all in one place.
            </p>
          </div>
          <div className="bg-feast-50 rounded-lg p-6">
            <h2 className="text-2xl font-display font-bold text-feast-800 mb-4">Why Choose Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-feast-500 text-white mr-3 mt-0.5">1</span>
                <span>Specialized in bulk orders for 25+ people</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-feast-500 text-white mr-3 mt-0.5">2</span>
                <span>Curated selection of professional caterers</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-feast-500 text-white mr-3 mt-0.5">3</span>
                <span>Easy comparison and booking process</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-feast-500 text-white mr-3 mt-0.5">4</span>
                <span>Secure payment and satisfaction guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
