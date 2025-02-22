import React, { useState } from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink, Logo, SubmitLink } from './Navbar.styled.jsx';
import SubNav from './SubNav';
import navItems from '../nav-data';

function Navbar() {
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
              onMouseEnter={() => setHoveredNavItem(item.text)}
              onMouseLeave={() => setHoveredNavItem(null)}
            >
              <NavLink href={item.href} $isHovered={hoveredNavItem && hoveredNavItem !== item.text}>
                {item.text}
              </NavLink>
              {/* Always render SubNav if item has subnav data */}
              {item.subnav && (
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