import React from 'react';
import { MainNav, NavContent, NavList, NavItem, NavLink } from './Navbar.styled.jsx';
import SubNav from './SubNav';
import navItems from '../nav-data';

function Navbar() {
  return (
    <MainNav>
      <NavContent>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.text}>
              <NavLink href={item.href}>{item.text}</NavLink>

              {/* Always render subnav if present. Display is controlled via CSS hover. */}
              {item.subnav && <SubNav items={item.subnav} />}
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </MainNav>
  );
}

export default Navbar;