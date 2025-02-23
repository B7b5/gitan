import React from 'react';
import styled from 'styled-components';

// Styled component for the subnav list
const SubNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
`;

const SubNavItem = styled.li`
  padding: 10px;
`;

const SubNavLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

function SubNav({ items }) {
  return (
    <SubNavList>
      {items.map((item, index) => (
        <SubNavItem key={index}>
          <SubNavLink href={item.href}>{item.text}</SubNavLink>
        </SubNavItem>
      ))}
    </SubNavList>
  );
}

export default SubNav;
