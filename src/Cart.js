import styled from 'styled-components'; 
import GoToCheckout from './GoToCheckout';
import { useEffect } from 'react'; 

export default function Cart(props) {
const {cart} = props; 

useEffect(() => {
  document.title = `Shopping Cart`;
}, [])

let totalPrice = 0;
  cart.map(item => {
    totalPrice += item.quantity * item.price; 
  }) 

  return (<>
    <BananaBackground /> 
    <Wrapper>
    <H1> Your Cart</H1>
    <Container>
    {cart.length > 0 &&(
      <Table>
        <TableHead>
          <tr>
            <TableHeader width="5%"></TableHeader>
            <TableHeader width="25%">
              Product
            </TableHeader>
            <TableHeader width="20%">Unit price</TableHeader>
            <TableHeader width="10%">Quantity</TableHeader>
            <TableHeader width="20%">Total</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {cart.map((item, index ) => {
            return (
              <TableRow key={index}
                style={index % 2 !== 0 ? {backgroundColor: '#F5F5F5'} : null}>
                <TableImage>
                  <div><img 
                    src={item.image}
                    width='100%'
                    height='50px'
                  /></div>
                </TableImage>
                <TableData>{item.name}</TableData>
                <TableData>{item.price}</TableData>
                <TableData>{item.quantity}</TableData>
                <TableData>${(parseFloat(item.price)* item.quantity).toFixed(2)}</TableData>
              </TableRow>
            )
          })}
        </tbody>
        <TableFooter>
          <tr>
            <th colSpan="3"></th>
            <TableHeader>Total</TableHeader>
            <TableHeader>${totalPrice.toFixed(2)}</TableHeader>
          </tr>
        </TableFooter>
      </Table>
    )}

    <GoToCheckout cart={cart}

    />
    </Container> 
    </Wrapper>

  </>)
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
const H1 = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 4rem;
  margin: 1rem;
  color: rgb(64,64,20);
  margin: 0 auto;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  min-height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgb(249, 222, 86);
  border-radius: 20px;
`;
const Container = styled.div`
  position: relative;
  width: 94%;
  height: 94%;
  margin: 1rem 2rem 2rem;
  border-radius: 12px;
  background-color: white;
`;
const Table = styled.table`
  width: 100%;
  height: 100%;
  margin-bottom: 0rem;
  border-collapse: separate ; 
`;
const TableHead = styled.thead`
  height: 50px;
  font-size: 1.5rem;
  background-color: aquamarine;
`;
const TableHeader = styled.th`
  font-weight: 600;
`;
const TableRow = styled.tr`
  height: 50px;
`;
const TableImage = styled.td`

`;
const TableData = styled.td`
  text-align: center;
  font-size: 1.2rem;
  white-space: nowrap;
`;
const TableFooter = styled.thead`
  height: 80px;
  font-size: 1.5rem;
  background-color: aquamarine;
`;

