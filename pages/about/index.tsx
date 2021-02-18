import Link from 'next/link';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
  <>
    <h1>About</h1>
    <Link href="/">
      <a >Acessar pagina Home</a>
    </Link>
  </>);
}

export default About;