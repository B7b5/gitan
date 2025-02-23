import React, { useState } from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink } from './Navbar.styled.jsx'; // Assuming your styled-components are defined
import SubNav from './SubNav';  // Import the SubNav component
import navItems from '../nav-data';  // Import the navItems data

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);  // Track which nav item is hovered

  return (
    <MainNav>
      <NavContent>
        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              onMouseEnter={() => setHoveredNavItem(item.text)} // Set the hovered item
              onMouseLeave={() => setHoveredNavItem(null)}    // Reset when mouse leaves
            >
              <NavLink href={item.href}>
                {item.text}
              </NavLink>

              {/* Conditionally render SubNav when hovered */}
              {item.subnav && hoveredNavItem === item.text && (
                <SubNav items={item.subnav} />
              )}
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </MainNav>
  );
}

export default Navbar;
