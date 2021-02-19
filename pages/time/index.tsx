import Link from 'next/link';

interface Props {
  staticDateString: string,
  children?: unknown
}

const Time: React.FC = (props: Props) => {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

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
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

export default Time;