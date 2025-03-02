// src/components/Carousel/Carousel.jsx

import React, { useState } from 'react';
import {
  CarouselContainer,
  ArrowButton,
  CarouselViewport,
  CarouselTrack,
  CarouselCard,
  ImageContainer,
  CardImage,
  CardCaption,
  CardTitle,
  CardViews,
  EyeIcon,
  CardSubhead,
  CardPrice,
} from './Carousel.styled';

// EXAMPLE DATA (replace with real data or pass as props)
const mockProducts = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/420x630.png?text=Image+1',
    title: 'Castelluccia Grande Bouche Gypsy Jazz Guitar, c. 1955',
    subhead: 'Owned and played by Biréli Lagrène',
    price: '$12,800.00 USD',
    views: '2k',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/420x630.png?text=Image+2',
    title: 'Markneukirchen Resophonic Violin Prototype, c. 1910',
    subhead: 'Truly one of a kind tone',
    price: '$24,500.00 USD',
    views: '10k',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/420x630.png?text=Image+3',
    title: 'Collection of Wooden and Bamboo Flutes',
    subhead: 'Owned and played by Andre Kertesz',
    price: '$8,400.00 USD',
    views: '3.5k',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/420x630.png?text=Image+4',
    title: 'Gibson F-4 Mandolin with Virzi-Carved Top, 1917',
    subhead: 'Owned and played by David Grisman',
    price: '$10,800.00 USD',
    views: '5k',
  },
  {
    id: 5,
    imageUrl: 'https://via.placeholder.com/420x630.png?text=Image+5',
    title: 'Unique Rare Flute–Violin Hybrid',
    subhead: 'A bizarre but fascinating design',
    price: '$12,000.00 USD',
    views: '1.2k',
  },
  {
    id: 6,
    imageUrl: 'https://via.placeholder.com/420x630.png?text=Image+6',
    title: 'Vintage Classical Guitar with Intricate Rosette',
    subhead: 'European origin, c. 1900',
    price: '$5,200.00 USD',
    views: '820',
  },
  // ... more items
];

export default function Carousel() {
  // Current index for the carousel track. Each step moves by 3 cards.
  const [currentIndex, setCurrentIndex] = useState(0);

  const ITEMS_PER_STEP = 3;
  // 460 card width + ~20 margin = 480
  const CARD_FULL_WIDTH = 480;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - ITEMS_PER_STEP, 0));
  };

  const handleNext = () => {
    const maxIndex = mockProducts.length - ITEMS_PER_STEP;
    setCurrentIndex((prev) => Math.min(prev + ITEMS_PER_STEP, maxIndex));
  };

  return (
    <CarouselContainer>
      <ArrowButton onClick={handlePrev} style={{ left: 0 }}>
        &larr;
      </ArrowButton>
      <ArrowButton onClick={handleNext} style={{ right: 0 }}>
        &rarr;
      </ArrowButton>

      <CarouselViewport>
        <CarouselTrack
          style={{
            transform: `translateX(-${currentIndex * CARD_FULL_WIDTH}px)`,
          }}
        >
          {mockProducts.map((item) => (
            <CarouselCard key={item.id}>
              <ImageContainer>
                <CardImage src={item.imageUrl} alt={item.title} />
              </ImageContainer>

              <CardCaption>
                <CardTitle>{item.title}</CardTitle>
                <CardViews>
                  <span>{item.views}</span>
                  {/* Placeholder “eye” icon */}
                  <EyeIcon>👁️</EyeIcon>
                </CardViews>
                <CardSubhead>{item.subhead}</CardSubhead>
                <CardPrice>{item.price}</CardPrice>
              </CardCaption>
            </CarouselCard>
          ))}
        </CarouselTrack>
      </CarouselViewport>
    </CarouselContainer>
  );
}