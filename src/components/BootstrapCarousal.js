import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cakeImage from '../assets/cakew.jpeg';
import pastaImage from '../assets/pasta.jpeg';
import tortillasImage from '../assets/tortillas.jpeg';

const RecipeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={cakeImage} alt="Cake" />
        <Carousel.Caption>
          <h3>Cake</h3>
          <p>Delicious and fluffy cake.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pastaImage} alt="Pasta" />
        <Carousel.Caption>
          <h3>Pasta</h3>
          <p>Freshly cooked pasta with herbs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tortillasImage} alt="Tortillas" />
        <Carousel.Caption>
          <h3>Tortillas</h3>
          <p>Soft and warm tortillas.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default RecipeCarousel;
