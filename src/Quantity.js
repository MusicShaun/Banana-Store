import styled from 'styled-components';


export default function Quantity(props) {
  const {cart, info} = props; 

  const findProduct = cart.find((product) => 
    product.id === info.id);
  const quantity = findProduct ? findProduct.quantity : 0;

  return (

      <Circle>
       <Count>{quantity}</Count>
      </Circle>

  )
}



const Circle = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
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