
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-feast-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-feast-500 to-feast-700 rounded-2xl overflow-hidden">
          <div className="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <svg
                className="absolute top-0 left-0 transform translate-x-[-40%] translate-y-[-30%] text-feast-600/20"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="85737c0e-0916-41d7-917f-596dc7edfa27"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
              </svg>
              <svg
                className="absolute bottom-0 right-0 transform translate-x-[40%] translate-y-[30%] text-feast-600/20"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="85737c0e-0916-41d7-917f-596dc7edfa28"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
              </svg>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                  Planning a Special Event?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Let Event Feast handle the catering so you can focus on what matters most.
                  Our platform connects you with the best caterers for events with 25+ guests.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="bg-white text-feast-700 hover:bg-feast-50 text-base"
                    >
                      Find Caterers
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10 text-base"
                    >
                      Request a Quote
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
