import React, { createContext, useContext, useState } from "react";

interface SearchContextProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

const useSearch = () => {
  const [search, setSearch] = useState("");

  return {
    search,
    setSearch,
  };
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const { search, setSearch } = useSearch();
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchConsumer = () => useContext(SearchContext);
