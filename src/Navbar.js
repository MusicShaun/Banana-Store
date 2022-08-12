import { NavLink} from 'react-router-dom';
import styled from 'styled-components'; 
import Menu from './Hamburger';
import { useState } from 'react'; 
import { useLocation } from 'react-router-dom';


export default function Navbar(props) {
  const {cartQuantity} = props;
  const [open, setOpen] = useState(false)
  const location = useLocation();

  function handleMenu() {
    setOpen(prevOpen => !prevOpen)
  }
  function resetMenu() {
    setOpen(prevOpen => false) 
  }

  const UList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: calc(5% - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;
  overflow: hidden;
  height: 100px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    margin: 0;
    left: 0;
    right: 0;
    background-color: lightgoldenrodyellow;
    border-radius: 0px 0 20px 20px;
    transition: 0.6s ease-out;
    height: ${open === true ? '100vh' : '0vh'};
    top: ${open ?  '0px' : '-100px'};
  }
`;

  return (<>
  <NavBar style={location.pathname === '/shop' ? {position: 'fixed'} : {position: 'absolute'}}>  

    <Logo>
    </Logo>

    <NavLink to='/' >    
      <Logo2   src={require('./img/banana-bros-logo-2.png')} />
    </NavLink>
    
    <HamburgerDisplay><Menu handleMenu={handleMenu}></Menu></HamburgerDisplay>


    <UList>
      <ListItem onClick={resetMenu}>
        <NavLink to='/' 
            style={removeVisited}>
              Home
        </NavLink>
      </ListItem>

      <ListItem onClick={resetMenu}>
        <NavLink to='/about' 
          style={removeVisited}>
            About
        </NavLink>
      </ListItem>

      <ListItem onClick={resetMenu }>
        <NavLink to='/shop' 
          style={removeVisited}>
            Shop
        </NavLink>
      </ListItem>

      <ListItem onClick={resetMenu}>
        <CartItem>
          <NavLink to='cart' 
            style={removeVisited}>
              Cart ({cartQuantity})
          </NavLink>
        </CartItem>
      </ListItem>
    </UList>
  </NavBar> 

  </>)
}

const NavBar = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; 
  margin: 0;
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

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Logo2 = styled.img`
  width: 100px;
  height: 100px;
  background-size: contain;
  margin-left: 0%;
  cursor: pointer;
  padding: 0;
  @media screen and (max-width: 700px) {
    margin-left: 5vw;
  }
`;
const HamburgerDisplay = styled.div`
  display: block;
  @media screen and (min-width: 700px) {
    display: none;
  }
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

  @media screen and (max-width: 700px) {
    font-size: 3rem;

    &:active {
      box-shadow: none;
  }
    &:hover {
      padding: 0rem;  
    }
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

  @media screen and (max-width: 700px) {
    font-size: 3rem;
    margin-top: 1.5rem;
    &:active {
      box-shadow: none;
  }
    &:hover {
      padding: 0rem;  
    }
  }
`;
const removeVisited = {
  textDecoration: 'none',
  color: 'inherit',
  padding: '1.5rem 1rem',
}
