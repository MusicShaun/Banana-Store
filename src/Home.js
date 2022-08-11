import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    document.title = `Banana Bro's`;
  }, [])

  return (<>   
  <BananaBackground /> 
    <Wrapper>
    
      <Left>
        <H1>Welcome to,</H1>
        <H1>The Banana Shop!</H1>
        <P>We sell every banana imaginable!</P>
        <P>Take the tour</P>
        <Link to='/shop' style={removeShit}>
          <H2Button> Start shopping here</H2Button>
        </Link> 
      </Left>
      <Right>
        <Img src='https://media.istockphoto.com/photos/banana-with-toy-eyes-and-a-smile-picture-id1255875330?k=20&m=1255875330&s=612x612&w=0&h=kX9ydJbDmei61IIv7SCyQFHnNfxTeb0ASiOnAej8E7w=' />
      </Right>

  
    </Wrapper>

  </>

  )
}
const BananaBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.8;
  object-fit: fill;
  background-image: url('https://i.pinimg.com/236x/6c/68/20/6c68206ddec35d8fc8b7df0672f92804--banana-fruit-food-patterns.jpg');
  background-repeat: repeat;
`;
const Wrapper = styled.div`
  width: 66vw; 
  height: 60vh;
  margin: auto;
  transform: translateY(25%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: rgb(249, 222, 86);
`;
const Left = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Right = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  margin: 0 0 0.5rem;
  font-weight: 600;
  font-size: 3rem;
  box-shadow: 0 3px 15px hsla(0, 0%, 100%, 0.22);
`;
const P = styled.p`
  margin: 0.2rem;
  font-size: 1.2rem;
`;
const H2Button = styled.h2`
  margin-top: 4rem;
  padding: 1rem;
  width: 300px;
  background-color: aquamarine;
  border-radius: 12px;
  /* color: white; */
  &:hover {
    background-color: #ADFFE7;
  }
  &:active {
  background-color: #19a596;
  box-shadow: inset 5px 5px 5px #666;
  }
`;
const removeShit = {
  textDecoration: 'none',
  color: 'inherit'
}
const Img = styled.img`
  width: 90%;
  height: 65%;
  filter: brightness(1.05);
  filter: contrast(1.20);
`;