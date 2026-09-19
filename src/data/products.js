const products = [
{
  id: 1,
  name: "Moringa Powder",
  category: "Herbal",
  price: 199,
  unit: "100g",

  image: "/images/products/moringa-front.png",

  images: [
    {
      src: "/images/products/moringa-front.png",
      label: "Front"
    },
    {
      src: "/images/products/moringa-back.png",
      label: "Back"
    },
    {
      src: "/images/products/moringa-nutrition.png",
      label: "Nutrition"
    }
  ],

  description:
    "Pure and naturally dried moringa powder made from carefully selected moringa leaves.",

  benefits: [
    "Convenient way to include moringa in your daily diet",
    "Suitable for smoothies, drinks and everyday recipes",
    "Easy to store and use"
  ],

  uses: [
    "Add to smoothies",
    "Mix into warm water or beverages",
    "Use in everyday recipes"
  ],

  ingredients: [
    "100% Moringa Leaves"
  ],

  storage:
    "Store in a cool, dry place away from direct sunlight. Keep the pouch tightly closed after use.",

  sizes: {
    "100g": 199,
    "250g": 449,
    "500g": 799,
    "1 kg": 1499
  },

  nutritionImage:
    "/images/products/moringa-nutrition.jpg",

  featured: true

  
},

];

export default products;