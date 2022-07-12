import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Register</a>
        </li>
        <li>
          <a href='/login'>Login</a>
        </li>
        <li>
          <a href='/users'>Users</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
