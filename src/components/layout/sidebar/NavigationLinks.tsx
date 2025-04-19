
import { Link } from "react-router-dom";
import { Home, Users, Info, Phone } from "lucide-react";

export function NavigationLinks() {
  return (
    <div className="space-y-1">
      <Link to="/" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
        <Home size={18} className="mr-2" />
        <span>Home</span>
      </Link>
      <Link to="/caterers" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
        <Users size={18} className="mr-2" />
        <span>Caterers</span>
      </Link>
      <Link to="/about" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
        <Info size={18} className="mr-2" />
        <span>About Us</span>
      </Link>
      <Link to="/contact" className="flex items-center py-2 px-2 rounded-md hover:bg-feast-50 text-feast-800 transition-colors">
        <Phone size={18} className="mr-2" />
        <span>Contact</span>
      </Link>
    </div>
  );
}
