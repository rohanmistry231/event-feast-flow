
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wedding Planner",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    quote: "Event Feast made wedding catering stress-free. The caterer we booked was incredible - our guests are still talking about the food months later!",
    rating: 5,
    eventType: "Wedding"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "We've used Event Feast for three corporate events now. The process is seamless and the quality has been consistently excellent.",
    rating: 5,
    eventType: "Corporate Dinner"
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Event Coordinator",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The ability to compare different caterers in one place saved us so much time. The food was outstanding and perfectly matched our requirements.",
    rating: 4,
    eventType: "Charity Gala"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    quote: "From menu customization to on-site service, everything was handled professionally. Will definitely be using Event Feast again.",
    rating: 5,
    eventType: "Product Launch"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold text-feast-800 mb-2">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from event planners who have found the perfect catering through Event Feast
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto p-6">
          <div className="absolute top-10 bottom-10 left-0 right-0 bg-feast-50 rounded-2xl -z-10"></div>
          
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white p-8 rounded-xl shadow-lg w-full"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="shrink-0">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-feast-100"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic mb-4">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="font-semibold text-feast-800">
                        {testimonials[currentIndex].name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <span>{testimonials[currentIndex].role}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                        <span>{testimonials[currentIndex].eventType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-feast-300 text-feast-800 hover:bg-feast-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === currentIndex ? "bg-feast-500" : "bg-feast-200"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-feast-300 text-feast-800 hover:bg-feast-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
