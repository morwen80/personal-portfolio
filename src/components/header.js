import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div>
      <h1>Valeria's Portfolio</h1>
      <nav>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/projects'>projects</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
      </ul>

      </nav>
    </div>
  )
}

export default Header
