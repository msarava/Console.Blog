import Link from 'next/link';
import React from 'react';
import nav from '@/styles/Nav.module.css'
import AccountMenu from './AccountMenu';


function Navbar() {
  return (
    <nav className={nav.container}>
      <h1 className={nav.title}> &gt; Console.Blog( )</h1>
       <AccountMenu/>

    </nav>
  );
}

export default Navbar;
