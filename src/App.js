import React, { useState } from 'react';
import { wineData, foodData } from './data.js';

// Simple fuzzy matching function
const fuzzyMatch = (query, list) => {
  if (!query) return [];
  const normalizedQuery = query.toLowerCase().replace(/\s/g, '');
  const matches = list.filter(item => {
    const normalizedName = item.name.toLowerCase().replace(/\s/g, '');
    let i = 0;
    let j = 0;
    while (i < normalizedQuery.length && j < normalizedName.length) {
      if (normalizedQuery[i] === normalizedName[j]) {
        i++;
      }
      j++;
    }
    return i === normalizedQuery.length;
  });
  return matches.map(match => match.name).slice(0, 5);
};

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isWineSearch, setIsWineSearch] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setQuery(input);
    setResults([]);
    
    if (isWineSearch) {
      setSuggestions(fuzzyMatch(input, wineData));
    } else {
      setSuggestions(fuzzyMatch(input, foodData));
    }
  };

  const handleSearch = () => {
    let matches = [];
    
    if (isWineSearch) {
      const wineMatch = wineData.find(wine => wine.name.toLowerCase() === query.toLowerCase());
      if (wineMatch) {
        matches = wineMatch.pairings.slice(0, 5);
      }
    } else {
      const foodMatch = foodData.find(food => food.name.toLowerCase() === query.toLowerCase());
      if (foodMatch) {
        matches = foodMatch.pairings.slice(0, 5);
      }
    }
    
    setResults(matches);
    setSuggestions([]);
  };

  const selectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  const clearResults = () => {
    setQuery("");
    setResults([]);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-[#FBF6F0] p-8 font-garamond text-[#4B1E37]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col items-center mb-6">
            <h1 className="text-5xl font-extrabold text-[#4B1E37] text-center">
              Cork & Cuisine
            </h1>
            <p className="text-xl text-center text-[#7C556F] italic">
              Your personal guide to perfect pairings.
            </p>
        </div>

        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => {
              setIsWineSearch(true);
              clearResults();
            }}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
              isWineSearch
                ? "bg-[#4B1E37] text-white shadow-lg"
                : "bg-gray-200 text-[#4B1E37] hover:bg-gray-300"
            }`}
          >
            Find Food for My Wine
          </button>
          <button
            onClick={() => {
              setIsWineSearch(false);
              clearResults();
            }}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
              !isWineSearch
                ? "bg-[#4B1E37] text-white shadow-lg"
                : "bg-gray-200 text-[#4B1E37] hover:bg-gray-300"
            }`}
          >
            Find Wine for My Meal
          </button>
        </div>

        <div className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={
              isWineSearch
                ? "e.g., Cabernet Sauvignon"
                : "e.g., Grilled Steak"
            }
            className="flex-grow p-4 text-lg border-2 border-[#4B1E37] rounded-lg focus:outline-none focus:border-[#7C556F] transition-colors"
          />
          <button
            onClick={handleSearch}
            className="bg-[#4B1E37] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-[#7C556F] transition-colors duration-300"
          >
            Search
          </button>
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-10 bg-white border border-[#4B1E37] rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
              <ul className="divide-y divide-gray-200">
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    onClick={() => selectSuggestion(s)}
                    className="p-4 text-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-[#4B1E37] mb-6">
              Top 5 Pairings for "{query}"
            </h2>
            <ul className="space-y-6">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="bg-[#FBF6F0] p-6 rounded-lg shadow-sm border border-gray-200 transition-transform duration-200 hover:scale-105"
                >
                  <div className="text-2xl font-semibold text-[#4B1E37] mb-2">
                    {index + 1}. {isWineSearch ? result.food : result.wine}
                  </div>
                  <p className="text-[#4B1E37] leading-relaxed">
                    <span className="font-medium text-[#7C556F]">Why it works:</span> {result.reason}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.length === 0 && query && suggestions.length === 0 && (
          <div className="mt-8 p-6 text-center text-[#7C556F] border-2 border-dashed border-gray-300 rounded-lg">
            No pairings found for "{query}". Please check your spelling or try a different search.
          </div>
        )}

        {results.length === 0 && !query && (
          <div className="mt-8 p-6 text-center text-[#7C556F] rounded-lg">
            Start by entering a wine or a food to find the perfect pairing!
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
