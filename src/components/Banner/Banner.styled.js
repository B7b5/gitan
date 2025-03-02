// src/components/Banner/Banner.styled.js

import styled from 'styled-components';

/*
  Outer container for the banner
*/
export const BannerContainer = styled.section`
  position: relative;     /* To place an absolutely-positioned overlay inside */
  margin-top: 100px; /* or padding-top: 100px */
  width: 100%;
  min-height: 00px; 
  background-color: rgb(225, 225, 225);  /* Base color or pattern */

  /* Optional padding around the content */
  padding: 60px 0px 60px 0px;

  /* 1) Clip anything that goes beyond the container bounds */
  overflow: hidden;
`;

/*
  The faint overlayed SVG
*/
export const BannerOverlaySVG = styled.img`
  position: absolute;
  top: -100px;         /* Pin to top edge */
  right: -180px;       /* Pin to right edge */
  opacity: 0.6;

  /* Don't block clicks or text selection behind it */
  pointer-events: none;
  user-select: none;

  /* 
    2) Example size: 800px wide, auto height
    If you want it even wider, adjust here
  */
  width: 1200px;
  height: auto;

  /*
    Optional transform if you want to shift or rotate it:
    transform: rotate(-10deg) translate(50px, 0);
  */

  /*
    Responsiveness: shrink & fade further on screens <=768px
  */
  @media (max-width: 768px) {
    width: 200px;
    opacity: 0.05;
  }
`;

/*
  A content wrapper for your main text (heading, subheading, button)
*/
export const BannerContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative; /* So it's stacked above the overlay (z-index if needed) */
`;

/*
  The text block
*/
export const BannerTextBlock = styled.div`
  text-align: left;
  margin-left: 4rem; 
  margin-right: 4rem; 
`;

/*
  Big heading
*/
export const BannerHeading = styled.h1`
  font-size: 6rem;
  font-family: 'Unica One', sans-serif;
  line-height: 1.2;
  margin: 0 0 0 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

/*
  Subheading
*/
export const BannerSubheading = styled.h2`
  font-size: 3rem;
  font-family: 'Unica One', sans-serif;
  line-height: 1.2;
  margin: 0 0 0 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


/*
  A generic flex container for category headers
*/
export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .2rem; /* optional spacing */
`;

/*
  Call-to-action button
*/

export const BannerButton = styled.button`
  position: relative;
  z-index: 0; 
  font-size: 1rem;
  font-family: 'Unica One', sans-serif;

  /* Spacing and layout */
  padding: 1.3em 4em;
  margin: 0 16px 0 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  /* Text color stays white */
  color: #fff;
  background-color: transparent; /* We'll handle the background via pseudo-element */
  
  /* We only transition the border-radius on the button itself */
  transition: border-radius 0.3s ease;

  /* Use a pseudo-element as the background “layer” behind the text */
  &::before {
    content: '';
    position: absolute;
    inset: 0;                /* top:0; right:0; bottom:0; left:0; */
    z-index: -1;            /* behind the text */
    background-color: #002b31;
    border-radius: 6px;
    
    /* Start at scale(1) */
    transform: scale(1);
    transform-origin: center;
    
    /* We'll animate transform and border-radius on this layer */
    transition: transform 0.3s ease, border-radius 0.3s ease;
  }

  /* On hover, make the background “grow” but NOT the text */
  &:hover {
    border-radius: 7px; /* Slightly more rounded corners on the button element itself */
  }

  /* Apply the scale and corner rounding to the pseudo-element */
  &:hover::before {
    transform: scale(1.05);  /* Grow the background */
    border-radius: 7px;      /* Match the new corner radius */
  }
`;