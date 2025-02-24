import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
  padding: 0px;
  z-index: 100;
`;

/* In your new code, you mainly use this: */
export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;