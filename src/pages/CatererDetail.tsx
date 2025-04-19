
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Plus, 
  Minus, 
  Users, 
  Globe 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";

// Demo data for a caterer
const caterer = {
  id: "royal-feasts",
  name: "Royal Feasts",
  logo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  bannerImage: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=500&q=80",
  description: "Specializing in luxury wedding and corporate catering with a royal touch. Our chefs bring years of experience from 5-star hotels and international culinary competitions to your event. We use only the finest ingredients and can accommodate a variety of dietary requirements.",
  longDescription: "Royal Feasts was established in 2010 with a mission to bring fine dining experiences to special events. What sets us apart is our attention to detail, from menu planning to presentation. Our team consists of award-winning chefs who have worked in prestigious establishments worldwide. We pride ourselves on creating custom menus that reflect your event's theme and your guests' preferences. Every dish is prepared fresh on the day of your event to ensure the highest quality.",
  rating: 4.8,
  reviews: 142,
  cuisines: ["Indian", "Continental", "Asian Fusion"],
  location: "123 Catering Lane, South Delhi",
  phoneNumber: "+91 98765 43210",
  email: "info@royalfeasts.com",
  website: "www.royalfeasts.com",
  openingHours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: Closed",
  minOrderSize: 50,
  leadTime: "Minimum 7 days advance booking",
  specialFeatures: ["Customizable menus", "On-site cooking", "Premium table settings", "Experienced service staff", "Allergen-friendly options"],
  menu: [
    {
      category: "Starters",
      items: [
        {
          id: "paneer-tikka",
          name: "Paneer Tikka",
          description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions",
          price: 800,
          image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: true,
          isSignature: true,
        },
        {
          id: "chicken-seekh",
          name: "Chicken Seekh Kebab",
          description: "Minced chicken mixed with herbs and spices, skewered and grilled in tandoor",
          price: 950,
          image: "https://images.unsplash.com/photo-1606755456607-b46711b0c145?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: false,
        },
        {
          id: "samosa-platter",
          name: "Gourmet Samosa Platter",
          description: "Assorted samosas with different fillings served with mint and tamarind chutneys",
          price: 700,
          image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: true,
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          id: "butter-chicken",
          name: "Butter Chicken",
          description: "Tender chicken pieces in a rich, creamy tomato-based gravy",
          price: 1200,
          image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: false,
          isSignature: true,
        },
        {
          id: "palak-paneer",
          name: "Palak Paneer",
          description: "Cottage cheese cubes in a spinach-based gravy, seasoned with Indian spices",
          price: 950,
          image: "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: true,
        },
        {
          id: "biryani",
          name: "Royal Dum Biryani",
          description: "Aromatic basmati rice cooked with choice of vegetables or meat and saffron",
          price: 1500,
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: false,
          isSignature: true,
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          id: "gulab-jamun",
          name: "Gulab Jamun",
          description: "Soft khoya dumplings soaked in fragrant sugar syrup",
          price: 600,
          image: "https://images.unsplash.com/photo-1589125223492-2f8ce3ace28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: true,
        },
        {
          id: "rasmalai",
          name: "Rasmalai",
          description: "Soft cottage cheese patties soaked in sweetened, thickened milk flavored with cardamom",
          price: 750,
          image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
          isVegetarian: true,
          isSignature: true,
        },
      ],
    },
  ],
  reviewList: [
    {
      id: 1,
      user: "Anita Sharma",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      date: "2023-10-15",
      comment: "Royal Feasts catered our daughter's wedding, and it was absolutely perfect! The food was delicious, presentation was beautiful, and the service was impeccable. Highly recommended for any special occasion.",
      event: "Wedding Reception",
      guests: 200,
    },
    {
      id: 2,
      user: "Rajiv Khanna",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      date: "2023-09-22",
      comment: "We used Royal Feasts for our annual corporate gala. The food was excellent and they were very accommodating with our last-minute changes. The only small issue was that one dessert item ran out quickly. Otherwise, a great experience.",
      event: "Corporate Gala",
      guests: 150,
    },
    {
      id: 3,
      user: "Meera Patel",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5,
      date: "2023-08-05",
      comment: "From the tasting session to the final execution, Royal Feasts was a delight to work with. The guests at our charity fundraiser couldn't stop talking about the food! Their attention to detail with allergen concerns was much appreciated.",
      event: "Charity Fundraiser",
      guests: 120,
    },
  ],
};

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    isVegetarian: boolean;
    isSignature?: boolean;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-48">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        {item.isVegetarian && (
          <Badge className="absolute top-2 left-2 bg-mint-500 text-white">Vegetarian</Badge>
        )}
        {item.isSignature && (
          <Badge className="absolute top-2 right-2 bg-feast-700 text-white">Chef's Special</Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-feast-800">₹{item.price}/per 25 guests</span>
          
          <div className="flex items-center gap-2">
            {quantity > 0 ? (
              <>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7 rounded-full"
                  onClick={decreaseQuantity}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-6 text-center font-medium">{quantity}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7 rounded-full"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </>
            ) : (
              <Button 
                size="sm" 
                onClick={increaseQuantity}
                className="bg-feast-500 hover:bg-feast-600 text-white"
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CatererDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("menu");

  // In a real app, you would fetch the caterer data based on the ID
  // const catererData = useCatererData(id);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Banner Image */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img 
            src={caterer.bannerImage} 
            alt={`${caterer.name} banner`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-white bg-white flex items-center justify-center">
                <img src={caterer.logo} alt={caterer.name} className="w-full h-full object-contain" />
              </div>
              
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                  {caterer.name}
                </h1>
                <div className="flex items-center text-white">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`w-4 h-4 ${
                          index < Math.floor(caterer.rating) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-300"
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {caterer.rating} ({caterer.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="flex-1">
              <Tabs defaultValue="menu" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-3">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
                
                <TabsContent value="menu" className="space-y-8">
                  {caterer.menu.map((category) => (
                    <div key={category.category}>
                      <h2 className="text-2xl font-display font-bold text-feast-800 mb-4">
                        {category.category}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((item) => (
                          <MenuItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-display font-bold text-feast-800">
                        Customer Reviews
                      </h2>
                      <Button className="bg-feast-500 hover:bg-feast-600 text-white">
                        Write a Review
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      {caterer.reviewList.map((review) => (
                        <motion.div 
                          key={review.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <img 
                                src={review.avatar} 
                                alt={review.user} 
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                              />
                              <div>
                                <h3 className="font-semibold text-feast-800">{review.user}</h3>
                                <p className="text-sm text-gray-500">
                                  {review.event} • {review.guests} guests • {review.date}
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, index) => (
                                <Star 
                                  key={index} 
                                  className={`w-4 h-4 ${
                                    index < review.rating 
                                      ? "fill-yellow-400 text-yellow-400" 
                                      : "text-gray-300"
                                  }`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="about">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-display font-bold text-feast-800 mb-4">
                        About {caterer.name}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {caterer.longDescription}
                      </p>
                      
                      <h3 className="text-xl font-semibold text-feast-800 mt-6 mb-3">
                        Cuisine Specialties
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {caterer.cuisines.map((cuisine) => (
                          <Badge key={cuisine} className="bg-feast-50 text-feast-800 font-medium">
                            {cuisine}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-feast-800 mt-6 mb-3">
                        Special Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {caterer.specialFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <ChevronRight className="w-4 h-4 text-feast-500 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-xl font-semibold text-feast-800 mb-4">
                        Booking Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="bg-feast-50 p-2 rounded-full mr-3">
                            <Users className="w-5 h-5 text-feast-700" />
                          </div>
                          <div>
                            <p className="font-medium">Minimum Order Size</p>
                            <p className="text-gray-600">{caterer.minOrderSize}+ people</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-feast-50 p-2 rounded-full mr-3">
                            <Clock className="w-5 h-5 text-feast-700" />
                          </div>
                          <div>
                            <p className="font-medium">Lead Time</p>
                            <p className="text-gray-600">{caterer.leadTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-feast-800 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-feast-500 mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">{caterer.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-feast-500 mr-3 shrink-0" />
                    <a href={`tel:${caterer.phoneNumber}`} className="text-feast-600 hover:underline">
                      {caterer.phoneNumber}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-feast-500 mr-3 shrink-0" />
                    <a href={`mailto:${caterer.email}`} className="text-feast-600 hover:underline">
                      {caterer.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-feast-500 mr-3 shrink-0" />
                    <a href={`https://${caterer.website}`} target="_blank" rel="noopener noreferrer" className="text-feast-600 hover:underline">
                      {caterer.website}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-feast-500 mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">{caterer.openingHours}</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <Button className="w-full bg-feast-500 hover:bg-feast-600 text-white">
                    Request a Quote
                  </Button>
                  
                  <Button variant="outline" className="w-full border-feast-500 text-feast-500 hover:bg-feast-50">
                    View Sample Menus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
