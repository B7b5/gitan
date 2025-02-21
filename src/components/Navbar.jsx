import React, { useState } from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink, Logo, SubmitLink } from './Navbar.styled.jsx';
import SubNav from './SubNav';
import navItems from '../nav-data';

function Navbar() {
  const [openSubNav, setOpenSubNav] = useState(null);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  return (
    <MainNav>
      <NavContent>
        <div style={{ position: 'fixed', left: '40px' }}> 
          <Logo href="/">Gitan</Logo>
        </div>
        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              onMouseEnter={() => {
                setOpenSubNav(item.text); // Update openSubNav on mouse enter
                setHoveredNavItem(item.text);
              }}
              onMouseLeave={() => {
                setOpenSubNav(null); // Reset openSubNav on mouse leave
                setHoveredNavItem(null);
              }}
            >
              <NavLink href={item.href} $isHovered={hoveredNavItem && hoveredNavItem!== item.text}>
                {item.text}
              </NavLink>
              {/* Conditionally render SubNav based on openSubNav state */}
              {item.subnav && openSubNav === item.text && (
                <SubNav $isopen={true} items={item.subnav} />
              )}
            </NavItem>
          ))}
        </NavList>
        <div style={{ position: 'fixed', right: '40px' }}>
          <SubmitLink href="/submit">SUBMIT AN INSTRUMENT</SubmitLink>
        </div>
      </NavContent>
    </MainNav>
  );
}

export default Navbar;