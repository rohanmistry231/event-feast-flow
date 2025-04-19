
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

// Sample cart data
const cartItems = [
  {
    id: 1,
    caterer: {
      id: "royal-feasts",
      name: "Royal Feasts",
      logo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    },
    items: [
      {
        id: "butter-chicken",
        name: "Butter Chicken",
        price: 1200,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        servingSize: 25,
      },
      {
        id: "palak-paneer",
        name: "Palak Paneer",
        price: 950,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        servingSize: 25,
      },
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        price: 600,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1589125223492-2f8ce3ace28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        servingSize: 25,
      },
    ],
  },
];

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    servingSize: number;
  };
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-100">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="font-medium text-feast-800">{item.name}</h3>
        <p className="text-sm text-gray-500">Serves {item.servingSize} people per order</p>
      </div>
      
      <div className="flex items-center mr-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handleDecreaseQuantity}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <span className="w-10 text-center font-medium">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handleIncreaseQuantity}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="w-24 text-right font-medium">
        ₹{(item.price * item.quantity).toLocaleString()}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="ml-2 text-gray-400 hover:text-tomato-500"
        onClick={() => onRemove(item.id)}
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default function Cart() {
  const [cart, setCart] = useState(cartItems);
  const [eventDetails, setEventDetails] = useState({
    date: "",
    time: "",
    location: "",
    guests: 25,
    specialInstructions: "",
  });

  // Calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cart.reduce(
      (total, caterer) =>
        total +
        caterer.items.reduce(
          (catererTotal, item) => catererTotal + item.price * item.quantity,
          0
        ),
      0
    );
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (catererId: string, itemId: string) => {
    setCart(
      cart.map((caterer) => {
        if (caterer.caterer.id === catererId) {
          return {
            ...caterer,
            items: caterer.items.filter((item) => item.id !== itemId),
          };
        }
        return caterer;
      }).filter((caterer) => caterer.items.length > 0)
    );
  };

  // Handle updating the quantity of an item
  const handleUpdateQuantity = (catererId: string, itemId: string, quantity: number) => {
    setCart(
      cart.map((caterer) => {
        if (caterer.caterer.id === catererId) {
          return {
            ...caterer,
            items: caterer.items.map((item) => {
              if (item.id === itemId) {
                return { ...item, quantity };
              }
              return item;
            }),
          };
        }
        return caterer;
      })
    );
  };

  // Handle input changes for event details
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  return (
    <Layout showSidebar={false}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <ShoppingCart className="w-8 h-8 text-feast-500 mr-3" />
          <h1 className="text-3xl font-display font-bold text-feast-800">Your Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven't added any catering items to your cart yet.
              </p>
              <Button asChild className="bg-feast-500 hover:bg-feast-600 text-white">
                <Link to="/caterers">Browse Caterers</Link>
              </Button>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cart.map((caterer) => (
                <div
                  key={caterer.caterer.id}
                  className="bg-white rounded-lg shadow-md p-6 mb-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center border border-gray-200 mr-3">
                      <img
                        src={caterer.caterer.logo}
                        alt={caterer.caterer.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h2 className="text-xl font-semibold">{caterer.caterer.name}</h2>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {caterer.items.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onRemove={(itemId) => handleRemoveItem(caterer.caterer.id, itemId)}
                        onUpdateQuantity={(itemId, quantity) =>
                          handleUpdateQuantity(caterer.caterer.id, itemId, quantity)
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="mb-1.5 block">
                      Event Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        className="pl-10"
                        value={eventDetails.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="time" className="mb-1.5 block">
                      Event Time
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        className="pl-10"
                        value={eventDetails.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location" className="mb-1.5 block">
                      Event Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="location"
                        name="location"
                        placeholder="Enter the event address"
                        className="pl-10"
                        value={eventDetails.location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="mb-1.5 block">
                      Number of Guests
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="25"
                        placeholder="Minimum 25 guests"
                        className="pl-10"
                        value={eventDetails.guests}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="specialInstructions" className="mb-1.5 block">
                    Special Instructions
                  </Label>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    placeholder="Dietary requirements, allergies, or other special requests"
                    rows={3}
                    value={eventDetails.specialInstructions}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  {cart.map((caterer) => (
                    <div key={caterer.caterer.id}>
                      <h3 className="font-medium text-gray-800">{caterer.caterer.name}</h3>
                      <div className="text-sm text-gray-600">
                        {caterer.items.length} item{caterer.items.length > 1 ? "s" : ""}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>₹1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Charge (5%)</span>
                    <span>₹{Math.round(getTotalPrice() * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span>₹{Math.round(getTotalPrice() * 0.18).toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-semibold mb-6">
                  <span>Total</span>
                  <span className="text-feast-800">
                    ₹
                    {(
                      getTotalPrice() +
                      1500 +
                      Math.round(getTotalPrice() * 0.05) +
                      Math.round(getTotalPrice() * 0.18)
                    ).toLocaleString()}
                  </span>
                </div>

                <Button className="w-full bg-feast-500 hover:bg-feast-600 text-white" size="lg">
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-center text-gray-500 text-sm">
                  By proceeding, you agree to our{" "}
                  <Link to="/terms" className="text-feast-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-feast-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
