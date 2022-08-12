import Products from './Products';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function Shop(props) {
  const {onProductAdd, onProductTake, cart} = props; 

  useEffect(() => {
    document.title = `Shop`;
  }, [])

  return (
    <GreyBack>
    <Wrapper>
      <Products 
        cart={cart}
        onProductAdd={onProductAdd}
        onProductTake={onProductTake}
      />
    </Wrapper>
    </GreyBack>
  )
}
const GreyBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  background-color: hsl(56, 70%, 96%);
  overflow: hidden;
`;
const Wrapper = styled.div`
  position: relative;
  width: 80vw;
  top: 132px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
