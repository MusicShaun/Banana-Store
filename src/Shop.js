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
  max-width: 80vw;
  margin: auto; 
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
