import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { User } from "@/types";

interface SearchFormProps {
  users: Array<User>;
  setUsers: (array: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ users, setUsers }) => {
  const [search, setSearch] = useState<string>("");

//   useEffect(() => {
//     const filtered = users.filter((user) =>
//       user.name.toLowerCase().includes(search.toLowerCase().trim())
//     );

//     setUsers(filtered);
//   }, [search]);

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setUsers(users); 
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase().trim())
      );
      setUsers(filtered);
    }
  };

  return (
    <Card className="p-4 w-[400px]">
      <CardHeader>
        <CardTitle>Search bar</CardTitle>
        <CardDescription>Type user name</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex items-center gap-2">
          <Input
            placeholder="seach"
            name="search"
			value={search}
            onChange={handleSearch}
          />
          <Button variant="outline">search</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;

