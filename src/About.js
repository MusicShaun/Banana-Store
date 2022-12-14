import styled from 'styled-components';
import {useEffect } from 'react';

export default function About() {

  useEffect(() => {
    document.title = `About the Bananas`;
  }, [])

  return (<>   

    <Container>
    <BananaBackground />
      <Wrapper>

        <Left>
          <H1>About Us</H1>
          <P>Back in 2006 we began peeling back the secrets of the banana.
            Where did they come from? How are they so delicious. Were aliens involved?</P>
          <P>Grown in more than 150 countries, 
            it is widely believed there are more than 1,000 types of bananas in the world.
            Surprisingly some varieties are blue and others are even red.
          </P>
          <P>Bananas are generally low in calories, have little to no fat, 
            sodium or cholesterol.They are a good source of vitamin C, potassium, 
            fiber and vitamin B6 and contain about 27 grams of carbohydrates and 14 grams of sugar.
          </P>
          <P>Also, in face of a common belief, bananas are relatively low in potassium compared to other foods, 
            such as beans, milk, apricots, carrots, bell peppers and sweet potatoes.
          </P>
          <P>Covered in a protective trip hazard, these are the perfect shelf items in a supermarket. 
            Here at Banana Bro's we are determined to unlock the secrets of the banana and share our 
            fruits with you!
          </P>
        </Left>
        <Right>
          <Img src='https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2016/01/GettyImages-499435850-1024x686.jpg' />
          <Img src='https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2016/01/595426939-1024x683.jpg' />
        </Right>
  
        
      </Wrapper>
</Container>
    </>
  
    )
  }
  const BananaBackground = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 0.8;
  background-image: url('https://i.pinimg.com/236x/6c/68/20/6c68206ddec35d8fc8b7df0672f92804--banana-fruit-food-patterns.jpg');
  background-repeat: repeat;
  z-index: -1;
`;
  const Container = styled.main`
  position: absolute;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Wrapper = styled.div`
  position: relative;
  top: 50px;
  width: 86%; 
  min-height: 80vh;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  background: white;
  border: 32px solid rgb(249, 222, 86);
  box-sizing: border-box;

  & > div {
    flex-direction: column;
    align-items: center;
    /* background-color: white; */
    padding: 0rem;
  }
  &:nth-child(2) {
    align-items: center; 
  }
  @media screen and (max-width: 1000px) {
    height: auto;
  }
  @media screen and (max-width: 600px) {
  top: 110px;
  }
`;
const Left = styled.div`
  position: relative;
  width: 50%;
  height: 85%;
  margin-right: 10%;
  border-radius:  20px 0 0 20px;
  text-align: center;
  margin-top: 2rem;

  @media screen and (max-width: 1024px) {
    margin: 2rem 0 2rem 0 ;
    padding: 0;
    border-radius:  20px;
    width: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  height: 80%;
  border-radius: 0 20px 20px 0;
  max-width: 400px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const H1 = styled.h1`
  margin: 0 0 0.5rem;
  font-weight: 600;
  font-size: 3rem;
  border-bottom: 2px solid rgb(249, 222, 86);
  white-space: nowrap;
`;
const P = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0.5rem 0.5rem 2rem;

  @media screen and (max-width: 1024px) {
    margin: 0.5rem 0 0 0 ;
  }
`;
const Img = styled.img`
  width: 90%;
  height: 50%;
  filter: brightness(1.2);
  &:first-child {
    border-radius: 20px 20px 0 0 ;
  }
  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`;