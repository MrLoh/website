import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img.attrs({
  src: '/avatar.svg',
  alt: 'Avatar'
})`
  width: 15rem;
  height: 15rem;
  background-color: black;
  border-radius: 50%;
`



const Home = () => {
  return (
    <Wrapper>
      <Avatar />
      <p>Hi,</p>
      <p>My name is Tobias and I am </p>
    </Wrapper>
  );
};

export default Home;
