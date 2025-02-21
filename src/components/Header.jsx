import React from 'react';
import Navbar from './Navbar';
import { HeaderWrapper } from './Navbar.styled.jsx'; // Import the HeaderWrapper

function Header() {
  return (
    <HeaderWrapper>
      <Navbar />
      <div className="header-content">
        <div className="header-text">
          <h1>Banner H1 Line 1</h1>
          <p>Banner H1 Line 2</p>
          <p>Banner H2</p>
        </div>
        <button>Button</button>
      </div>
    </HeaderWrapper>
  );
}

export default Header;