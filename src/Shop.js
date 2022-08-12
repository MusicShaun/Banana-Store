import Products from './Products';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function Shop(props) {
  const {onProductAdd, onProductTake, cart} = props; 

  useEffect(() => {
    document.title = `Shop`;
  }, [])

  return (
    <Wrapper>
      <Products 
        cart={cart}
        onProductAdd={onProductAdd}
        onProductTake={onProductTake}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80vw;
  margin-top: 2rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
