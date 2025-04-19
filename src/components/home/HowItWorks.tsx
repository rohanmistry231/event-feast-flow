
import { motion } from "framer-motion";
import { Search, CheckCircle, Calendar, DollarSign } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Find the Perfect Caterer",
    description: "Browse our curated selection of premium caterers specializing in event catering for 25+ people.",
    color: "bg-feast-500",
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Customize Your Menu",
    description: "Work with caterers to create the perfect menu for your event, with options for dietary requirements.",
    color: "bg-mint-500",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Book Your Event",
    description: "Select your date, provide event details, and secure your booking with a simple payment process.",
    color: "bg-tomato-500",
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Enjoy Hassle-Free Catering",
    description: "Relax and enjoy your event while our professional caterers handle everything from setup to cleanup.",
    color: "bg-feast-700",
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold text-feast-800 mb-2">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Event Feast makes it easy to find and book the perfect catering for your next event
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white`}>
                  <step.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              <div className="flex justify-center mt-4">
                <span className="font-display font-bold text-2xl text-feast-500">{step.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium mb-4">Ready to start planning your event?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-feast-500 hover:bg-feast-600 text-white font-medium rounded-md transition-colors text-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
