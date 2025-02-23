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
          console.log('Navbar item with subnav:', item.subnav); // Ensure subnav is logged
          return (
            <NavItem
              key={item.text}
              onMouseEnter={() => setHoveredNavItem(item.text)}  // Handle hover enter
              onMouseLeave={() => setHoveredNavItem(null)}       // Handle hover leave
            >
              <NavLink href={item.href}>
                {item.text}
              </NavLink>
              {item.subnav && hoveredNavItem === item.text && (
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
