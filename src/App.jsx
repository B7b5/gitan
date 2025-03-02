// src/App.jsx

import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
// Import the Carousel
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel />
    </>
  );
}

export default App;