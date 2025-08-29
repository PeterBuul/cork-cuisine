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
  },
  {
    name: "Champagne",
    type: "Sparkling",
    profile: "High acidity, crisp, brioche, citrus, apple, mineral notes",
    acid: "High",
    body: "Light",
    pairings: [
      { food: "Sausages", reason: "The high acidity and effervescence of the wine cut through the fat and rich flavor of the sausage, refreshing the palate." },
      { food: "Fried Chicken", reason: "The bubbles act like a scrubbing brush for the palate, perfectly balancing the oily, fried coating." },
      { food: "Oysters", reason: "A classic pairing where the wine's crispness and acidity highlight the briny, fresh flavor of the oysters." },
      { food: "Popcorn", reason: "The saltiness of the popcorn contrasts with the wine's effervescence and toasty notes." },
      { food: "Smoked Salmon", reason: "The wine's light body and acidity complement the rich, smoky flavor of the salmon without overpowering it." }
    ]
  },
  {
    name: "Prosecco",
    type: "Sparkling",
    profile: "Fruity, crisp, floral, green apple, pear, melon",
    acid: "High",
    body: "Light",
    pairings: [
      { food: "Tacos", reason: "The wine's bright fruitiness and bubbles are a perfect match for the diverse flavors and light heat of tacos." },
      { food: "Bruschetta", reason: "Its fresh, fruity notes complement the tomatoes and basil, while the effervescence cuts through the olive oil." },
      { food: "Light Pasta Salad", reason: "The wine's lively character pairs well with the fresh vegetables and vinaigrette dressing." },
      { food: "Sashimi", reason: "The wine’s clean and fruity profile works beautifully with the delicate flavor of raw fish." },
      { food: "Spicy Asian Cuisine", reason: "The wine's slight sweetness and bubbles provide a refreshing contrast to the spice." }
    ]
  },
  {
    name: "Pinot Grigio",
    type: "White",
    profile: "Light-bodied, dry, crisp, green apple, lime, honeydew melon",
    acid: "High",
    body: "Light",
    pairings: [
      { food: "Quiche", reason: "The wine's high acidity cuts through the richness and creamy texture of the quiche filling." },
      { food: "Chicken Caesar Salad", reason: "Its crisp, light character complements the chicken and offsets the creamy dressing." },
      { food: "Grilled Shrimp", reason: "The wine's citrus notes and light body are a natural match for delicate seafood like shrimp." },
      { food: "Sushi", reason: "A versatile wine that won't overpower the subtle flavors of sushi, while providing a refreshing palate cleanser." },
      { food: "Light Fish Dishes", reason: "Its clean, dry finish and bright acidity pair well with flaky white fish prepared simply." }
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
  },
  {
    name: "Sausages",
    profile: "Savory, fatty, spiced",
    pairings: [
      { wine: "Champagne", reason: "The high acidity and bubbles cut through the fat of the sausage, cleansing the palate and enhancing its flavor." },
      { wine: "Syrah", reason: "The spicy notes in the wine complement the savory and peppery flavors often found in sausages." },
      { wine: "Zinfandel", reason: "Its bold fruit flavors and peppery notes stand up well to the richness and spice of sausages." },
      { wine: "Pinot Noir", reason: "A lighter option that pairs well with pork or chicken sausages, as its acidity complements the fat without being too heavy." },
      { wine: "Gamay", reason: "A light and fruity red wine that's excellent with savory sausages, especially those with herbs." }
    ]
  },
  {
    name: "Tacos",
    profile: "Spicy, savory, diverse flavors",
    pairings: [
      { wine: "Prosecco", reason: "The wine's bright fruitiness and bubbles are a perfect match for the diverse flavors and light heat of tacos." },
      { wine: "Sauvignon Blanc", reason: "Its crisp acidity and citrus notes cut through the richness and complement fresh salsas." },
      { wine: "Riesling", reason: "The wine's high acidity and natural sweetness are a perfect match for the complex, savory, and sometimes spicy flavors of stir fry." },
      { wine: "Rosé", reason: "A dry Rosé has enough body and acidity to pair well with a variety of taco fillings, from pork to fish." },
      { wine: "Gamay", reason: "The light, fruity character of this wine pairs well with chicken or fish tacos without overwhelming them." }
    ]
  },
  {
    name: "Quiche",
    profile: "Savory, creamy, rich, eggy",
    pairings: [
      { wine: "Pinot Grigio", reason: "The wine's high acidity cuts through the richness and creamy texture of the quiche filling." },
      { wine: "Sauvignon Blanc", reason: "Its zesty acidity is a classic counterpoint to the richness of eggs and cream." },
      { wine: "Chardonnay", reason: "A lightly oaked Chardonnay can match the creamy texture of the quiche, with its buttery notes complementing the dish." },
      { wine: "Pinot Noir", reason: "For a quiche with mushrooms or bacon, the wine's earthy notes and light body provide a great balance." },
      { wine: "Rosé", reason: "Its versatility and acidity make it a great choice, especially for a quiche with ham or cheese." }
    ]
  },
  {
    name: "Stir Fry",
    profile: "Sweet, savory, spicy, umami",
    pairings: [
      { wine: "Riesling", reason: "The wine's high acidity and natural sweetness are a perfect match for the complex, savory, and sometimes spicy flavors of stir fry." },
      { wine: "Sauvignon Blanc", reason: "Its green, herbal notes and crisp acidity are excellent with stir-fries that feature a lot of fresh vegetables." },
      { wine: "Gewürztraminer", reason: "Aromatic and often slightly sweet, this wine can stand up to and complement the spiciest stir-fries." },
      { wine: "Pinot Noir", reason: "For a stir-fry with duck or pork, the wine's light body and red fruit notes provide a harmonious pairing." },
      { wine: "Prosecco", reason: "The bubbles and fruitiness of Prosecco are a refreshing contrast to the rich flavors and spices of a stir-fry." }
    ]
  }
];

export { wineData, foodData };
