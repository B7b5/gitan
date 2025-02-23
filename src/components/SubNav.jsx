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
  console.log('SubNav component rendered with items:', items);

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
// In the SubNav component, we import styled-components and create styled components for the sub-navigation list, sub-navigation item, and sub-navigation link. We then define the SubNav component that takes in an items prop. This prop is an array of objects, where each object represents a sub-navigation item with text and href properties. We map over the items array and render a list of sub-navigation items with links.