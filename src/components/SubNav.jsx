import React from 'react';
import styled from 'styled-components';

const SubNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SubNavItem = styled.li`
  /* Styles for each sub-nav item */
`;

const SubNavLink = styled.a`
  text-decoration: none;
  color: #333;
`;

function SubNav({ items }) {
  return (
    <SubNavList className="subnav"> 
      {items.map((item, index) => (
        <SubNavItem key={index}>
          <SubNavLink href={item.href}>{item.text}</SubNavLink>
        </SubNavItem>
      ))}
    </SubNavList>
  );
}

export default SubNav;