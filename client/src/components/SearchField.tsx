import { SearchConsumer } from "../context/searchContext";

const SearchField = () => {
  const { setSearch } = SearchConsumer();
  return (
    <div className="p-4 flex justify-center md:justify-start">
      <label className="sr-only">Search</label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          placeholder="Search for items"
        />
      </div>
    </div>
  );
};

export default SearchField;
