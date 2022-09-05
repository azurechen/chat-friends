import type { NextPage } from 'next';

import './Home.sass';
import { Head, Header, Footer } from '../../elements';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head title="" description="" imageUrl="" />

      <Header />

      <main></main>

      <Footer />
    </div>
  );
};

export default Home;
