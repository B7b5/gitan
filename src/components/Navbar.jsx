import React, { useState } from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink } from './Navbar.styled.jsx';
import SubNav from './SubNav';
import navItems from '../nav-data';

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const handleMouseEnter = (itemText) => {
    console.log('Hovered on:', itemText); // Check if hover event is firing
    setHoveredNavItem(itemText);
  };

  const handleMouseLeave = () => {
    console.log('Left hover'); // Check when the hover leaves
    setHoveredNavItem(null);
  };

  return (
    <MainNav>
      <NavContent>
        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              onMouseEnter={() => handleMouseEnter(item.text)}  // Ensure this is firing
              onMouseLeave={handleMouseLeave}  // Ensure this is firing
            >
              <NavLink href={item.href}>
                {item.text}
              </NavLink>

              {/* Conditional rendering of SubNav */}
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
