import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Grid, Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import cakeImage from '../assets/cakew.jpeg';
import pastaImage from '../assets/pasta.jpeg';
import tortillasImage from '../assets/tortillas.jpeg';
import axios from 'axios';
import './RecipeCarousel.css';

const RecipeCarousel = () => {
  
  return (
    <div className="carousel-container">
      {/* Carousel Section */}
      <Carousel className="carousel">
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={cakeImage} 
            alt="Cake" 
            style={{ height: '400px', objectFit: 'cover' }} // Fixed height and cover fit
          />
          <Carousel.Caption>
            <h3>Cake</h3>
            <p>Delicious and fluffy cake.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={pastaImage} 
            alt="Pasta" 
            style={{ height: '400px', objectFit: 'cover' }} // Fixed height and cover fit
          />
          <Carousel.Caption>
            <h3>Pasta</h3>
            <p>Freshly cooked pasta with herbs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={tortillasImage} 
            alt="Tortillas" 
            style={{ height: '400px', objectFit: 'cover' }} // Fixed height and cover fit
          />
          <Carousel.Caption>
            <h3>Tortillas</h3>
            <p>Soft and warm tortillas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
};

export default RecipeCarousel;
