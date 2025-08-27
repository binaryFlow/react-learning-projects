import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { type MovieResult } from "../types";



interface SearchProps{
  setResults : (results: MovieResult[]) => void;
}
const Search = ({setResults} : SearchProps) => {
  const [input, setInput] = useState("");
  
  const fetchData = async (value: string) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${value}&apikey=cdadedae&type=movie`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      let searchData = await response.json();
      if(searchData.Search){
        setResults(searchData.Search)
      }else{
        console.log("Not found")
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(value: string) {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className="pt-10">
      <div className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search Mockups, Logos..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <button
            type="submit"
            onClick={() => handleChange(input)}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
