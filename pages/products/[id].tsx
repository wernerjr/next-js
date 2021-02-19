import { useRouter } from 'next/router';

interface Props {
  id: string,
  children?: unknown
}

const products: React.FC = (props: Props) => {
  const id = props.id;

  return <h1>teste {id}</h1>;
}

export const getStaticPaths = async () => {
  return {
    paths: [{
      params: {
        id: '10'
      }
    },{
      params: {
        id: '11'
      },
    }],
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  return {
    props: {
      id
    }
  }
}

export default products;