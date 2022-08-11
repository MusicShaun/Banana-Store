import { NavLink} from 'react-router-dom';
import styled from 'styled-components'; 



export default function Navbar(props) {
const {cartQuantity} = props;




  return (<>
  <NavBar>  

      <Logo>
      </Logo>

      <NavLink to='/' >    
      <Logo2   src={require('./img/banana-bros-logo-2.png')} />
      </NavLink>
    


    <UList>
      <ListItem>
        <NavLink to='/' 
            style={removeVisited}>
              Home
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to='/about' 
          style={removeVisited}>
            About
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to='/shop' 
          style={removeVisited}>
            Shop
        </NavLink>
      </ListItem>

      <ListItem>
        <CartItem>
          <NavLink to='cart' 
            style={removeVisited}>
              Cart ({cartQuantity})
          </NavLink>
        </CartItem>
      </ListItem>
    </UList>
  </NavBar> 

    <AdjustBodySizeFromNav/>
  </>)
}
const AdjustBodySizeFromNav = styled.div`
  position: relative;
  height: 10vh;
  width: 100%;
`;
const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px; 
  display: flex; 
  align-items: center;
  z-index: 2;
  background-color: rgb(249, 222, 86);
  box-shadow: 0px 2px 3px #D3D3D3;
`;
const Logo = styled.div`
  margin-left: 3vw;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32f63bd2-85cb-483d-b0ce-924b21752868/dckiqqz-ac92c74f-7da6-48a0-b064-13252618974e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyZjYzYmQyLTg1Y2ItNDgzZC1iMGNlLTkyNGIyMTc1Mjg2OFwvZGNraXFxei1hYzkyYzc0Zi03ZGE2LTQ4YTAtYjA2NC0xMzI1MjYxODk3NGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hAkCo0_4gB3fC3nGuD2UR2Fo9F93RhYedd-Tr7Og8W4');;
  width: 140px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  flex-shrink: 0;
`;
const Logo2 = styled.img`
  width: 100px;
  height: 100px;
  background-size: contain;
  margin-left: 0%;
  cursor: pointer;
  padding: 0;
`;
const UList = styled.ul`
  margin-left: auto;
  margin-right: calc(5% - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;
`;
const ListItem = styled.li`
  margin: 0 0.5rem;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.3rem;
  &:hover:not(:last-child) {
    background-color: lightgoldenrodyellow;
    border-radius: 20px;
    cursor: pointer;
  }
  &:active:not(:last-child) {
  box-shadow: inset 3px 3px 3px #666;
  }
`;
const CartItem = styled.span`
  height:2.5rem;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  font-weight: 600;
  font-size: 1.3rem;
  background-color: lightgoldenrodyellow;
  white-space: nowrap;
  &:hover {
    padding:  1rem 0rem;
    border-radius: 20px;
    cursor: pointer;
  }
  &:active {
  box-shadow: inset 3px 3px 3px #666;
  }
`;
const removeVisited = {
  textDecoration: 'none',
  color: 'inherit',
  padding: '1.5rem 1rem',
}
