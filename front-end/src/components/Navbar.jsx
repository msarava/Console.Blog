import Link from 'next/link';
import React from 'react';
import nav from '@/styles/Nav.module.css'
import AccountMenu from './AccountMenu';

function Navbar() {
  return (
    <nav className={nav.container}>
      <Link href='/'>
        <h1 className={nav.title}> &gt; Console.Blog( )</h1>
      </Link>
       <AccountMenu/>

    </nav>
  );
}

export default Navbar;
