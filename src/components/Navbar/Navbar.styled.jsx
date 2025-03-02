// src/components/Navbar/Navbar.styled.js

import styled from 'styled-components';

/*
  The main nav bar (fixed at the top, spanning the entire screen).
*/
export const MainNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;         /* fill the entire screen width */
  z-index: 1000;
  background-color: #fff;
  color: #333;

  /* Optional top/bottom padding and a bottom border */
  padding: 20px 0;     
  border-bottom: 1px solid #eee;
`;

/*
  The container that:
  - always fills the entire width of MainNav,
  - has a min-width of 800px so it won't shrink below that,
    causing horizontal scroll if the window is <800px,
  - is "position: relative" so we can absolutely-position children
*/
export const NavContent = styled.div`
  position: relative;
  /* fill the entire width of the nav */
  width: 100%;

  /* if the window is narrower than 800px, we crop/scroll horizontally */
  min-width: 800px;

  /* a fixed height so absolute children can align vertically */
  height: 60px;  

  /*
    Because we want it fully fluid above 800px, 
    we do NOT set a max-width or margin: 0 auto.
    That way, it spans the entire screen if screen >800px.
  */
`;

/*
  Left section pinned to the container's left edge
*/
export const LeftSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  display: flex;
  align-items: center;
  /* optional spacing if you want a bit of left padding: padding-left: 20px; */
`;

/*
  Center section pinned exactly at the horizontal center
*/
export const CenterSection = styled.div`
  position: absolute;
  top: 0;
  left: 50%;                 /* place at center line */
  transform: translateX(-50%); /* shift left by half its width */
  height: 100%;

  display: flex;
  align-items: center;
`;

/*
  Right section pinned to the container's right edge
*/
export const RightSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  display: flex;
  align-items: center;
  /* optional spacing if you want a bit of right padding: padding-right: 20px; */
`;

/*
  Top-level nav link for your "dim-other-links" logic
*/
export const TopNavLink = styled.a`
  text-decoration: none;
  color: #002B31;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Unica One', sans-serif;

  transition: color 0.3s ease;
`;

/*
  Nav list for the center items 
*/
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  gap: 40px;

  /* 
    On hover, all top-level links become grey,
    except the hovered one overrides that below
  */
  &:hover ${TopNavLink} {
    color: #9b9b9b;
  }
`;

export const NavItem = styled.li`
  position: relative;

  /* Subnav display logic if needed */
  &:hover .subnav {
    display: block;
  }

  /* The hovered item remains black */
  &:hover > ${TopNavLink} {
    color: #000;
  }
`;

/*
  Logo (left)
*/
export const Logo = styled.a`
  font-family: 'Unica One', sans-serif;
  font-size: 16px;
  color: #B30000;
  text-decoration: none;
  font-weight: bold;
  padding-left: 40px; /* optional spacing from the left edge */

  &:hover {
    color: #B30000;
  }
`;

/*
  "Submit" link (right)
*/
export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SubmitLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #F49200;
  white-space: nowrap;
  font-family: 'Unica One', sans-serif;
  padding-right: 40px; /* optional spacing from the right edge */

  &:hover {
    color: #B30000 !important;
  }
`;