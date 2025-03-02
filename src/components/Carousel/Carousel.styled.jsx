// src/components/Carousel/Carousel.styled.jsx

import styled from 'styled-components';

/*
  OUTER WRAPPER: pinned 80px from the left,
  letting it bleed off to the right.
*/
export const CarouselContainer = styled.div`
  position: relative;
  margin-left: 80px; /* As per your requirement */
  padding: 20px 0;
`;

/*
  ARROW BUTTONS: absolutely positioned on the left & right
*/
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

/*
  The “window” that hides overflow (scroll).
*/
export const CarouselViewport = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

/*
  The flex container that holds all cards in a row;
  shift it with transform to “slide.”
*/
export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.4s ease;
`;

/*
  Each “tile,” 460×824, with a 16px radius
  and box-shadow on hover.
*/
export const CarouselCard = styled.div`
  position: relative;
  width: 460px;
  height: 824px;
  background: #ffffff;
  border: 1px solid rgba(110, 110, 110, 0.33);
  border-radius: 16px;
  margin-right: 20px; /* Gap between cards */

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.22);
  }
`;

/*
  The image area: 420×630 from Figma.
  Centered horizontally with margin: 0 auto.
*/
export const ImageContainer = styled.div`
  position: relative;
  width: 420px;
  height: 630px;
  margin: 20px auto 0;
  border-radius: 16px;
  overflow: hidden; /* So the image corners are clipped */
`;

export const CardImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

/*
  Bottom caption area, containing title, views, subhead, price
*/
export const CardCaption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

/* Title in bigger bold font */
export const CardTitle = styled.h3`
  font-family: 'SF Pro Display', sans-serif; /* or your chosen font */
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #002b31;
  margin: 0 0 8px 0;
`;

/* The view count row (text + “icon”) */
export const CardViews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #002b31;
`;

/* Placeholder “eye” icon or your own icon */
export const EyeIcon = styled.span`
  margin-left: 8px;
  font-size: 18px;
`;

/* Subhead in normal weight */
export const CardSubhead = styled.h4`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #131212;
  margin: 8px 0;
`;

/* Price text */
export const CardPrice = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #131212;
  margin-top: 8px;
`;