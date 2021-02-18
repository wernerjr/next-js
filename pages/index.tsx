import React from 'react';
import Link from 'next/link';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
  <>
    <h1>Home</h1>
    <Link href="/about">
      <a >Acessar pagina Sobre</a>
    </Link>
  </>);
}

export default Home;