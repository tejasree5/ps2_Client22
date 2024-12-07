import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const IngredientInput = ({ setIngredients }) => {
  const [ingredient, setIngredient] = useState('');

  const addIngredient = () => {
    setIngredients(prev => [...prev, ingredient]);
    setIngredient('');
  };

  return (
    <div>
      <TextField value={ingredient} onChange={(e) => setIngredient(e.target.value)} label="Add Ingredient" />
      <Button onClick={addIngredient}>Add</Button>
    </div>
  );
};

export default IngredientInput;
