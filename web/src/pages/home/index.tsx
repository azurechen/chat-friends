import type { NextPage } from 'next';

import './Home.sass';
import { Meta, Header, Footer } from '../../elements';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Meta title="" description="" />

      <Header />

      <main></main>

      <Footer />
    </div>
  );
};

export default Home;
