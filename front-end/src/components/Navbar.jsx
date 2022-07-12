import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Register</Link>
        </li>
        <li>
          <Link href='/login'>Login</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
