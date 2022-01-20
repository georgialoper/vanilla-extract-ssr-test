import { HelloWorld } from '../components/HelloWorld';

const Home = () => {
  return (
    <HelloWorld />
  );
}

export async function getServerSideProps() {

  // Pass data to the page via props
  return { props: { foo: "bar" } }
}

export default Home