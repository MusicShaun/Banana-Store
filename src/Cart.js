import styled from 'styled-components'; 
import GoToCheckout from './GoToCheckout';
import { useEffect } from 'react'; 
import { useMediaQuery } from 'react-responsive'
import {devices} from './devices';


export default function Cart(props) {
const {cart} = props; 
const mobile = useMediaQuery({ query: '(max-width: 700px)' })
const desktop = useMediaQuery({ query: '(min-width: 700px)' })

useEffect(() => {
  document.title = `Shopping Cart`;
}, [])

let totalPrice = 0;
  cart.map(item => {
    return totalPrice += item.quantity * item.price; 
  }) 

  return (<>
    <BananaBackground />
    <Wrapper>
    <H1> Your Cart</H1>
    <Container>
    {cart.length > 0 &&(
      <Table>
        <TableHead>
        {desktop && 
          <tr>
            <TableHeader width="5%"></TableHeader>
              <TableHeader width="25%">
                Product
              </TableHeader>
              <TableHeader width="20%">Unit price</TableHeader>
              <TableHeader width="10%">Quantity</TableHeader>
              <TableHeader width="20%">Total</TableHeader>
          </tr>
        }
        {mobile && 
          <tr>
              <TableHeader width="75%">Product</TableHeader>
              <TableHeader width="25%">Total</TableHeader>
          </tr>
        }

        </TableHead>
        <tbody>

          {cart.map((item, index ) => {
            return (
              <TableRow key={index}
                style={index % 2 !== 0 ? {backgroundColor: '#F5F5F5'} : null}>
                {desktop && 
                <TableImage>
                  <div><img 
                    src={item.image}
                    width='100%'
                    height='50px'
                    alt=''
                  /></div>
                </TableImage>
                }
                {desktop ?
                <TableData>{item.name}</TableData> 
                : 
                <TableData>{`${item.name}: `}{` x${item.quantity} $${item.price}`}</TableData> 
                 } 
                 
                {desktop && 
                <TableData>{item.price}</TableData>
                }
                {desktop &&
                <TableData>{item.quantity}</TableData>
                }
                <TableData>${(parseFloat(item.price)* item.quantity).toFixed(2)}</TableData>
                
              </TableRow>
            )
          })}
        
        </tbody>
        <TableFooter>
          <tr>
            {desktop ?
            <th colSpan="3"></th>
            : 
            <th colSpan='1'></th>
            }
            {desktop && 
              <TableHeader>Total</TableHeader>
              }

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  background-image: url('https://i.pinimg.com/236x/6c/68/20/6c68206ddec35d8fc8b7df0672f92804--banana-fruit-food-patterns.jpg');
  background-repeat: repeat;
  z-index: -1;
`;
const H1 = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 4rem;
  margin: 2rem 1rem 1rem 1rem;
  padding-top: 1rem;
  color: rgb(64,64,20);
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    font-size: 2.5rem;
  } 
  @media screen and (max-width: 700px) {
    font-size: 2rem;
    padding: 1rem;
  } 
`;
const Wrapper = styled.div`
  margin: 132px auto;
  width: 96vw;
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
  width: 96%;
  height: 94%;
  margin: 0 auto;
  margin-bottom: 2rem;
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
  ${devices.mobile}{
    font-size: 1.2rem;
  }
`;
const TableHeader = styled.th`
  font-weight: 600;

  @media screen and (max-width: 700px) {
    text-align: left;
    padding-left: 1rem;
  }
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
  @media screen and (max-width: 700px) {
    text-align: left;
    padding-left: 1rem;
  }
  ${devices.mobile}{
    font-size: 0.9rem;
  }
`;
const TableFooter = styled.thead`
  height: 80px;
  font-size: 1.5rem;
  background-color: aquamarine;
  ${devices.mobile}{
    font-size: 1rem;
  }

`;


