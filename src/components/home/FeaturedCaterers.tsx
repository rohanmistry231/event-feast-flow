
import { motion } from "framer-motion";
import CatererCard from "./CatererCard";

const caterers = [
  {
    id: "royal-feasts",
    name: "Royal Feasts",
    logo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Specializing in luxury wedding and corporate catering with a royal touch. Our chefs bring years of experience from 5-star hotels.",
    rating: 4.8,
    reviews: 142,
    cuisines: ["Indian", "Continental", "Asian Fusion"],
    location: "South Delhi",
    minOrderSize: 50,
    special: "Premium",
  },
  {
    id: "taste-of-india",
    name: "Taste of India",
    logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Authentic Indian flavors for your special occasions. We specialize in regional cuisines from across India.",
    rating: 4.6,
    reviews: 98,
    cuisines: ["North Indian", "South Indian", "Mughlai"],
    location: "Central Delhi",
    minOrderSize: 25,
  },
  {
    id: "global-bites",
    name: "Global Bites",
    logo: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "International cuisine for the global palate. Our diverse menu features dishes from around the world.",
    rating: 4.5,
    reviews: 76,
    cuisines: ["Italian", "Mexican", "Mediterranean"],
    location: "West Delhi",
    minOrderSize: 30,
    special: "New",
  },
  {
    id: "green-eats",
    name: "Green Eats",
    logo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Sustainable, organic catering with a focus on plant-based options. Perfect for eco-conscious events.",
    rating: 4.7,
    reviews: 64,
    cuisines: ["Vegan", "Organic", "Health Food"],
    location: "North Delhi",
    minOrderSize: 25,
  },
  {
    id: "spice-route",
    name: "Spice Route",
    logo: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Journey through the spice routes of Asia with our exquisite selection of pan-Asian delicacies.",
    rating: 4.4,
    reviews: 53,
    cuisines: ["Thai", "Chinese", "Japanese"],
    location: "East Delhi",
    minOrderSize: 30,
  },
  {
    id: "urban-feast",
    name: "Urban Feast",
    logo: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Modern fusion catering for the urban sophisticate. Creative presentations and innovative flavor combinations.",
    rating: 4.9,
    reviews: 41,
    cuisines: ["Fusion", "Modern European", "Asian"],
    location: "South Delhi",
    minOrderSize: 40,
    special: "Trending",
  },
];

export default function FeaturedCaterers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-display font-bold text-feast-800 mb-2">Featured Caterers</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our handpicked selection of premium caterers ready to make your next event unforgettable
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {caterers.map((caterer) => (
          <motion.div key={caterer.id} variants={itemVariants}>
            <CatererCard {...caterer} />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-feast-500 hover:bg-feast-600 text-white font-medium rounded-md transition-colors"
        >
          View All Caterers
        </motion.button>
      </div>
    </section>
  );
}
