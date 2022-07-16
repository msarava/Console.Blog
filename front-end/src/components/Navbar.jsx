import Link from 'next/link';
import React from 'react';
import nav from '@/styles/Nav.module.css'


function Navbar() {
  return (
    <nav className={nav.container}>
      <h1 className={nav.title}> &gt; Console.Blog( )</h1>
      <ul>
        <li>
          <Link href='/'>Acueil</Link>
        </li>
        <li>
          <Link href='/signup'>Inscription</Link>
        </li>
        <li>
          <Link href='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
