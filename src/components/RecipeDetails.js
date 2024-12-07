import React from 'react';
import { Typography } from '@mui/material';

const RecipeDetail = ({ recipe }) => (
  <div>
    <Typography variant="h4">{recipe.title}</Typography>
    <Typography>Calories: {recipe.calories}</Typography>
    <Typography>Steps: {recipe.steps.join(', ')}</Typography>
  </div>
);

export default RecipeDetail;
