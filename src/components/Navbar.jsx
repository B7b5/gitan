import React, { useState } from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink } from './Navbar.styled.jsx';
import SubNav from './SubNav';
import navItems from '../nav-data';

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const handleMouseEnter = (itemText) => {
    console.log('Hovered on:', itemText); // Log when an item is hovered
    setHoveredNavItem(itemText);
  };

  const handleMouseLeave = () => {
    console.log('Left hover');
    setHoveredNavItem(null);
  };

  return (
    <MainNav>
      <NavContent>
        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              onMouseEnter={() => handleMouseEnter(item.text)} // Updated to log
              onMouseLeave={handleMouseLeave}
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
