import styled from 'styled-components';


export default function Quantity(props) {
  const {cart, info} = props; 

  const findProduct = cart.find((product) => 
    product.id === info.id);
  const quantity = findProduct ? findProduct.quantity : 0;

  return (
    <Wrapper>
      <Circle>
       <Count>{quantity}</Count>
      </Circle>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 520px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;
const Circle = styled.div`
  margin-bottom: 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Count = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: black;
  background-color: aquamarine;
  font-weight: 600;
  font-size: 1.4rem;
`;