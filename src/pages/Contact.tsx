
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-feast-800 mb-4 sm:mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              Have questions? We're here to help with your event catering needs. Reach out to us using any of the methods below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-feast-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-feast-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">123 Event Street, Feast City<br />New Delhi, 110001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-feast-50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-feast-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone Number</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm mt-1">Monday to Friday, 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-feast-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-feast-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Address</h3>
                  <p className="text-gray-600">contact@eventfeast.com</p>
                  <p className="text-gray-600 text-sm mt-1">We'll respond as soon as possible</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-feast-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto bg-feast-500 hover:bg-feast-600 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
