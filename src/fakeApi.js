// src/fakeApi.js
const fakeRecipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      imageUrl: "https://example.com/spaghetti.jpg",
    },
    {
      id: 2,
      title: "Chicken Curry",
      imageUrl: "https://example.com/chicken-curry.jpg",
    },
    {
      id: 3,
      title: "Beef Stroganoff",
      imageUrl: "https://example.com/beef-stroganoff.jpg",
    },
    // ... Add more than 500 recipes
  ];
  
  // Simulate fetching data
  export const fetchRecipes = async () => {
    return [
      { id: 1, title: "Spaghetti Carbonara", imageUrl: "https://example.com/spaghetti.jpg" },
      { id: 2, title: "Chicken Curry", imageUrl: "https://example.com/chicken-curry.jpg" },
      { id: 3, title: "Beef Stroganoff", imageUrl: "https://example.com/beef-stroganoff.jpg" },
      // Add more recipes as needed
    ];
  };
  