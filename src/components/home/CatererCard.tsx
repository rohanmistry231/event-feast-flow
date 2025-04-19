
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CatererCardProps {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  description: string;
  rating: number;
  reviews: number;
  cuisines: string[];
  location: string;
  minOrderSize: number;
  special?: string;
}

export default function CatererCard({
  id,
  name,
  logo,
  coverImage,
  description,
  rating,
  reviews,
  cuisines,
  location,
  minOrderSize,
  special,
}: CatererCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/caterer/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={coverImage}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {special && (
            <Badge className="absolute top-3 left-3 bg-tomato-500 text-white font-medium">
              {special}
            </Badge>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-end gap-3">
              <div className="w-16 h-16 rounded-md overflow-hidden border-2 border-white bg-white flex items-center justify-center">
                <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{name}</h3>
                <div className="flex items-center text-white">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium mr-1">{rating.toFixed(1)}</span>
                  <span className="text-sm text-gray-300">({reviews})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex flex-wrap gap-1 mb-3">
            {cuisines.map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="text-xs bg-feast-50 text-feast-700">
                {cuisine}
              </Badge>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
          
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500">
            <div className="flex items-center mb-2 sm:mb-0">
              <MapPin className="w-4 h-4 mr-1 text-feast-500" />
              <span>{location}</span>
            </div>
            <div className="font-medium text-feast-700">
              Min. Order: {minOrderSize}+ people
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
