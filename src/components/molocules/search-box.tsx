import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBox = () => {
  return (
    <div className="flex w-full max-w-2xl items-center space-x-2">
      <Input type="search" placeholder="Search for movies, tv shows, actors" />
      <Button type="submit">Search</Button>
    </div>
  );
};

export default SearchBox;
