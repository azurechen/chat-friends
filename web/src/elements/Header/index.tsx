import type { NextPage } from 'next';

import './Header.sass';
import Nav from '../Nav';

const Header: NextPage = () => {
  return (
    <header>
      <Nav />
    </header>
  );
};

export default Header;
