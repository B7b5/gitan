import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  /* position: sticky; */
  /* top: 0; */
  width: 100%;
  z-index: 100;
`;

/* Your main nav styling */
export const MainNav = styled.nav`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-bottom: 1px solid #eee;
  width: 100%;

  /* Removed sticky/fixed from here
     (because we have nav { position: fixed } in index.css)
  */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Remove overflow-x: hidden if not strictly needed,
     it can clip the subnav if it extends horizontally */
  /* overflow-x: hidden; */

  min-width: 800px;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NavItem = styled.li`
  margin-right: 40px;
  position: relative;
  height: 100%;

  &:hover a {
    color: #000;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #002B31;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Unica One', sans-serif;
  transition: color 0.3s ease;
`;

export const Logo = styled.a`
  font-family: 'Unica One', sans-serif;
  font-size: 16px;
  color: #B30000;
  text-decoration: none;
  font-weight: bold;
  padding: 0 60px 0 0;

  &:hover {
    color: #B30000;
  }
`;

export const SubmitLink = styled(NavLink)`
  color: #F49200;
  padding: 0 60px 0 40px;
  white-space: nowrap;

  &:hover {
    color: #B30000;
  }
`;
