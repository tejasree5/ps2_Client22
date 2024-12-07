import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    // Simulating API call for shopping list
    axios.get('https://jsonplaceholder.typicode.com/todos') // Fake API
      .then((response) => {
        setShoppingList(response.data.slice(0, 10)); // Show limited items
      })
      .catch((error) => {
        console.error('Error fetching shopping list:', error);
      });
  }, []);

  return (
    <List>
      {shoppingList.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default ShoppingList;
