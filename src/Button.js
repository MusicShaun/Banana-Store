import styled from 'styled-components'; 


export default function Button(props) {
  const {onProductAdd, onProductTake, info, cart} = props; 
  
  const disableMinusButton = cart.find((item) => 
    (item.id === info.id && item.quantity > 0 ));

  const disableAddButton = cart.find((item) => 
    (item.id === info.id && item.quantity === 10 ));

  return (
    <Wrapper>
      <Buttons 
        onClick={() => onProductTake(info)}
        disabled={!disableMinusButton}
          style={{ backgroundColor: '#FF6D6A',   borderRadius: '6px 6px 6px 16px'}}
      >-</Buttons>

      <Buttons 
        onClick={() => onProductAdd(info)}
        disabled={disableAddButton}
          style={{ backgroundColor: '#B0FC38',   borderRadius: '6px 6px 16px 6px'}}
      >+</Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 500px;
  width: 250px;
  font-size: 2rem;
  font-weight: 600;
`;
const Buttons = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  box-shadow: -2px 2px 5px lightgrey;
  cursor: pointer;
  z-index: 3;
  &:active {
    box-shadow: inset 2px 2px 2px grey;
  }
`;