import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky; /* keeps the header pinned at top (if desired) */
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #f0f0f0;
  padding: 0px;

  /* If you want it non-sticky, swap to position: relative; */
  /* position: relative; */
`;