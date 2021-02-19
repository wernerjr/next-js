import Link from 'next/link';

const Home: React.FC = () => {
  return (
  <>
    <h1>Home</h1>
    <Link href="/about">
      <a >Acessar pagina Sobre</a>
    </Link>
    <br />
    <Link href="/time">
      <a >Acessar pagina Tempo</a>
    </Link>
  </>);
}

export default Home;