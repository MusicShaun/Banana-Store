import Products from './Products';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function Shop(props) {
  const {onProductAdd, onProductTake, cart} = props; 

  useEffect(() => {
    document.title = `Shop`;
  }, [])

  return (<>
    <GreyBack />
    <Container>
    <Wrapper>
      <Products 
        cart={cart}
        onProductAdd={onProductAdd}
        onProductTake={onProductTake}
      />
    </Wrapper>
    </Container>
    </>)
}
const GreyBack = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 0;
  background-color: hsl(56, 70%, 96%);
`;
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
