
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="mt-4 mb-2 relative">
      <div className="relative">
        <Search size={16} className="absolute left-2 top-2.5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search caterers..."
          className="pl-8 pr-4 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-feast-500 focus:border-feast-500"
        />
      </div>
    </div>
  );
}
