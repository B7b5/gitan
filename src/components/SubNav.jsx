import React from 'react';
import styled from 'styled-components';

const SubNavList = styled.ul`
  /* Let .subnav in index.css control the display property */
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
