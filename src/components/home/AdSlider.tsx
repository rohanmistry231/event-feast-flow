
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    title: "Premium Corporate Catering",
    description: "Elevate your corporate events with our premium catering services",
    buttonText: "Explore Options",
    buttonLink: "/caterers",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    title: "Wedding Feast Packages",
    description: "Make your special day unforgettable with our delicious wedding catering",
    buttonText: "View Packages",
    buttonLink: "/wedding-packages",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    title: "Special Festive Offers",
    description: "Celebrate the season with our limited-time festive catering deals",
    buttonText: "Get Offers",
    buttonLink: "/offers",
  },
];

export default function AdSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(goToNextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-lg md:text-xl mb-6"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="bg-feast-500 hover:bg-feast-600 text-white font-medium px-6"
                  >
                    {slides[currentSlide].buttonText}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 z-10"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 z-10"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
