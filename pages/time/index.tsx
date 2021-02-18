import Link from 'next/link';

// import { Container } from './styles';

interface Props {
  staticDateString: string
}

const Time: React.FC = (props: Props) => {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
  <>
    <h1>Time</h1>
    <br />
    <div>{dynamicDateString} (dinâmico)</div>
    <div>{props.staticDateString} (estatico)</div>
    
    <br />
    <Link href="/">
      <a >Acessar pagina Home</a>
    </Link>
  </>);
}



export const getStaticProps = () => {
  //Somente Ocorre no build
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

export default Time;