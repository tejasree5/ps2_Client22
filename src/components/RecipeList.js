import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Rating } from '@mui/material';
import '../App.css'; // Correct import for App.css

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showNutritionalInfo, setShowNutritionalInfo] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      const newRecipes = [];
      const totalPages = 3; // Set the number of pages you want to fetch

      for (let page = 1; page <= totalPages; page++) {
        try {
          const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pasta&page=${page}`);
          newRecipes.push(...response.data.recipes);
        } catch (error) {
          console.error('Error fetching the recipes', error);
        }
      }

      setRecipes(newRecipes);
    };

    fetchRecipes();
  }, []);

  const handleInfoClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowNutritionalInfo(true);
  };

  // Sample nutritional info for demonstration
  const nutritionalInfo = {
    calories: '400 kcal',
    fat: '20g',
    carbs: '50g',
    protein: '10g',
  };

  return (
    <div className="recipe-list">
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.recipe_id}>
            <Card className="recipe-card" onMouseEnter={() => setSelectedRecipe(recipe)} onMouseLeave={() => setShowNutritionalInfo(false)}>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image_url}
                alt={recipe.title}
                style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
              />
              <CardContent>
                <Typography variant="h5">{recipe.title}</Typography>
                {/* Add Rating */}
                <Rating name={`rating-${recipe.recipe_id}`} value={Math.floor(Math.random() * 5) + 1} readOnly />
                <Button onClick={() => handleInfoClick(recipe)} variant="contained" color="primary">
                  Info
                </Button>
                {showNutritionalInfo && selectedRecipe && selectedRecipe.recipe_id === recipe.recipe_id && (
                  <div className="nutritional-info">
                    <Typography variant="body2" color="text.secondary">
                      Calories: {nutritionalInfo.calories}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Fat: {nutritionalInfo.fat}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Carbs: {nutritionalInfo.carbs}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Protein: {nutritionalInfo.protein}
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipeList;
