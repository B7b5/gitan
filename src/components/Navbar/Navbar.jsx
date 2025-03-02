// src/components/Navbar/Navbar.jsx

import React from 'react';
import {
  MainNav,
  NavContent,
  LeftSection,
  CenterSection,
  RightSection,
  Logo,
  NavList,
  NavItem,
  TopNavLink,
  SubmitContainer,
  SubmitLink
} from './Navbar.styled';
import SubNav from './SubNav';
import navItems from '../../nav-data';

function Navbar() {
  return (
    <MainNav>
      <NavContent>

        <LeftSection>
          <Logo href="/">GITAN</Logo>
        </LeftSection>

        <CenterSection>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.text}>
                <TopNavLink href={item.href}>{item.text}</TopNavLink>
                {item.subnav && <SubNav items={item.subnav} />}
              </NavItem>
            ))}
          </NavList>
        </CenterSection>

        <RightSection>
          <SubmitContainer>
            <SubmitLink href="/submit">SUBMIT AN INSTRUMENT</SubmitLink>
          </SubmitContainer>
        </RightSection>

      </NavContent>
    </MainNav>
  );
}

export default Navbar;