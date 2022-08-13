import type { NextPage } from 'next';
import Script from 'next/script';

import Home from './home';

const Root: NextPage = props => {
  return (
    <>
      <Script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"></Script>
      <Home {...props} />
    </>
  );
};

export default Root;
