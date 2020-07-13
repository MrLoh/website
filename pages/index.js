import Head from "next/head";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Tobias Lohse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Tobias Lohse</h1>
        <p>My new website build on iPad</p>
      </main>
    </Wrapper>
  );
};

export default Home;
