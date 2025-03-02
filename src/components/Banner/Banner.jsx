// src/components/Banner/Banner.jsx

import React from 'react';
import {
  BannerContainer,
  BannerContent,
  BannerTextBlock,
  BannerHeading,
  BannerSubheading,
  BannerButton,
  BannerOverlaySVG,
  CategoryHeader
} from './Banner.styled';

function Banner() {
  return (
    <BannerContainer>
      {/* 1) The faint SVG text behind everything */}
      <BannerOverlaySVG
        src="/assets/Banner_bg_text_1.svg"
        alt="Decorative faint text"
      />

      {/* 2) The main banner content */}
      <BannerContent>
        <BannerTextBlock>
          <BannerHeading>VIOLAS & VIOLINS</BannerHeading>
          <BannerHeading>1890–1940</BannerHeading>

          {/* Flex container for COLLECTION + Button */}
          <CategoryHeader>
            <BannerHeading>COLLECTION</BannerHeading>
            <BannerButton>EXPLORE</BannerButton>
          </CategoryHeader>
        </BannerTextBlock>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;