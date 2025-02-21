import React from 'react';
import styled from 'styled-components';

const SubNavContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: pink;
  padding: 10px;
  display: ${props => props.$isopen? 'block': 'none'};
  z-index: 101;
`;

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

function SubNav({ $isopen, items }) {
  return (
    <SubNavContainer $isopen={$isopen}>
      <SubNavList>
        {items.map((item, index) => (
          <SubNavItem key={index}>
            <SubNavLink href={item.href}>{item.text}</SubNavLink>
          </SubNavItem>
        ))}
      </SubNavList>
    </SubNavContainer>
  );
}

export default SubNav;