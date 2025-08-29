import React, { useState } from 'react';

const wineData = [
  {
    name: "Cabernet Sauvignon",
    type: "Red",
    profile: "Full-bodied, high tannin, black fruits (cassis, black cherry), pepper, cedar",
    acid: "Medium-high",
    body: "Full",
    pairings: [
      { food: "Grilled Steak", reason: "The bold tannins in the wine cut through the fat of the steak, cleansing the palate and enhancing the meat's flavor." },
      { food: "Lamb Chops", reason: "Its strong structure stands up to the rich, gamey flavor of lamb." },
      { food: "Aged Cheddar Cheese", reason: "The fat and salt in the cheese soften the wine's tannins, creating a smoother, more complex taste." },
      { food: "Mushroom Risotto", reason: "The wine's earthy notes complement the savory flavor of mushrooms, while its body matches the richness of the risotto." },
      { food: "Dark Chocolate", reason: "The bitterness of the chocolate is balanced by the wine's dark fruit flavors and robust body." }
    ]
  },
  {
    name: "Chardonnay",
    type: "White",
    profile: "Oaky, buttery, stone fruits (apple, pear), citrus, vanilla",
    acid: "Medium-low",
    body: "Medium-full",
    pairings: [
      { food: "Roasted Chicken", reason: "The wine's buttery notes and full body complement the richness of the chicken." },
      { food: "Creamy Pasta", reason: "Its creamy texture creates a harmonious match with rich, cream-based sauces." },
      { food: "Grilled Salmon", reason: "The wine's weight and subtle oak flavors pair well with the fatty texture of the fish without overpowering it." },
      { food: "Soft Cheeses (Brie)", reason: "The rich, creamy texture of the cheese is a perfect match for the wine's body and buttery finish." },
      { food: "Corn on the Cob", reason: "The natural sweetness of the corn is enhanced by the wine's fruit-forward profile." }
    ]
  },
  {
    name: "Sauvignon Blanc",
    type: "White",
    profile: "Crisp, high acidity, green fruits (grapefruit, green apple), herbaceous, grassy",
    acid: "High",
    body: "Light-medium",
    pairings: [
      { food: "Goat Cheese Salad", reason: "The wine's zesty acidity contrasts and cuts through the tanginess of the goat cheese and the dressing." },
      { food: "Grilled Asparagus", reason: "Its green, herbaceous notes complement the distinct flavor of the asparagus." },
      { food: "Oysters", reason: "The clean, crisp acidity of the wine is a classic pairing that refreshes the palate and highlights the briny flavor of the oysters." },
      { food: "Fish Tacos", reason: "The bright acidity and citrus notes cut through the richness of fried fish and complement the freshness of the salsa." },
      { food: "Pesto Pasta", reason: "The herbal flavors in the wine are a perfect complement to the fresh basil in the pesto." }
    ]
  },
  {
    name: "Pinot Noir",
    type: "Red",
    profile: "Light-bodied, red fruits (cherry, raspberry), earthy, mushroom, forest floor",
    acid: "Medium-high",
    body: "Light",
    pairings: [
      { food: "Roasted Duck", reason: "The wine's red fruit and earthy notes are a classic complement to the rich flavor of duck." },
      { food: "Mushroom and Truffle dishes", reason: "The earthy, savory characteristics of the wine create a perfect harmony with the 'umami' of mushrooms and truffles." },
      { food: "Grilled Salmon", reason: "A rare red wine pairing with fish. Its light body and low tannins don't overwhelm the delicate flavor of the salmon." },
      { food: "Roast Chicken", reason: "The wine's light body and bright acidity complement the white meat without overpowering it." },
      { food: "Gruyere Cheese", reason: "The nutty flavor of the cheese is enhanced by the wine's earthy and fruity notes." }
    ]
  }
];

const foodData = [
  {
    name: "Grilled Steak",
    profile: "Rich, fatty, savory, beef",
    pairings: [
      { wine: "Cabernet Sauvignon", reason: "The wine's bold tannins cut through the fat of the steak, cleansing the palate and enhancing the meat's flavor." },
      { wine: "Malbec", reason: "Malbec's dark fruit flavors and smooth finish complement the savory, fatty characteristics of steak." },
      { wine: "Syrah", reason: "A full-bodied Syrah with notes of black pepper and spice pairs wonderfully with a charred, peppery steak." },
      { wine: "Merlot", reason: "A softer, less tannic option that still has enough body to stand up to the richness of the meat." },
      { wine: "Zinfandel", reason: "Its jammy fruit and hint of spice can create a bold and delicious contrast with a well-seasoned steak." }
    ]
  },
  {
    name: "Roasted Chicken",
    profile: "Savory, tender, poultry",
    pairings: [
      { wine: "Chardonnay", reason: "The wine's buttery notes and full body complement the richness of the chicken." },
      { wine: "Pinot Noir", reason: "Its light body and bright acidity complement the white meat without overpowering it." },
      { wine: "Sauvignon Blanc", reason: "A crisp Sauvignon Blanc offers a refreshing contrast and cuts through the chicken's richness." },
      { wine: "Viognier", reason: "The wine's aromatic, floral notes and rich texture are a great match for a roasted chicken with herbs." },
      { wine: "Rosé", reason: "A dry Rosé has enough body and acidity to pair well with the chicken and any accompanying vegetables." }
    ]
  },
  {
    name: "Mushroom Risotto",
    profile: "Earthy, creamy, savory, umami",
    pairings: [
      { wine: "Pinot Noir", reason: "The earthy, savory characteristics of the wine create a perfect harmony with the 'umami' of mushrooms and the creaminess of the risotto." },
      { wine: "Cabernet Sauvignon", reason: "Its earthy notes complement the savory flavor of mushrooms, while its body matches the richness of the risotto." },
      { wine: "Nebbiolo", reason: "A wine with strong tannins and earthy notes, it balances the richness of the dish." },
      { wine: "Chardonnay", reason: "An oaked Chardonnay can match the creamy texture of the risotto, with its buttery notes complementing the dish's richness." },
      { wine: "Sangiovese", reason: "Its high acidity and rustic, earthy notes make it a great foil for the richness of the dish." }
    ]
  },
  {
    name: "Grilled Salmon",
    profile: "Rich, fatty, fish",
    pairings: [
      { wine: "Chardonnay", reason: "The wine's weight and subtle oak flavors pair well with the fatty texture of the fish without overpowering it." },
      { wine: "Pinot Noir", reason: "A rare red wine pairing with fish. Its light body and low tannins don't overwhelm the delicate flavor of the salmon." },
      { wine: "Sauvignon Blanc", reason: "The wine's crisp acidity cuts through the salmon's fat, refreshing the palate." },
      { wine: "Dry Rosé", reason: "Its versatility and balance of fruit and acidity make it a great option for fatty fish like salmon." },
      { wine: "Pinot Gris", reason: "A slightly richer white wine with a refreshing acidity that complements the fish without being too heavy." }
    ]
  }
];

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
    let exactMatchFound = false;
    
    if (isWineSearch) {
      const wineMatch = wineData.find(wine => wine.name.toLowerCase() === query.toLowerCase());
      if (wineMatch) {
        matches = wineMatch.pairings.slice(0, 5);
        exactMatchFound = true;
      }
    } else {
      const foodMatch = foodData.find(food => food.name.toLowerCase() === query.toLowerCase());
      if (foodMatch) {
        matches = foodMatch.pairings.slice(0, 5);
        exactMatchFound = true;
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
            <img src="https://i.imgur.com/rQ1p5w2.png" alt="Cork & Cuisine Logo" className="w-48 mb-4"/>
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
