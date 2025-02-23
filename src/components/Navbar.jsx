import React, { useState } from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink, Logo, SubmitLink } from './Navbar.styled.jsx';
import SubNav from './SubNav';
import navItems from '../nav-data';

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  return (
    <MainNav>
      <NavContent>
        {/* Render navigation items */}
        <NavList>
          {navItems.map((item) => {
            console.log('Navbar item with subnav:', item.subnav); // Ensure subnav data is printed
            return (
              <NavItem
                key={item.text}
                onMouseEnter={() => setHoveredNavItem(item.text)}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <NavLink href={item.href} $isHovered={hoveredNavItem && hoveredNavItem !== item.text}>
                  {item.text}
                </NavLink>
                
                {/* Conditionally render SubNav only if subnav exists */}
                {item.subnav && (
                  <SubNav items={item.subnav} />
                )}
              </NavItem>
            );
          })}
        </NavList>
      </NavContent>
    </MainNav>
  );
}

export default Navbar;
