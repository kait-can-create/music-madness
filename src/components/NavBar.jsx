import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/NineInchNails">Nine Inch Nails</Link>
        </li>
        <li>
          <Link to="/TheCrystalMethod">The Crystal Method</Link>
        </li>
        <li>
          <Link to="/KoRn">KoЯn</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
