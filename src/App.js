import {useEffect, useState} from 'react'; 
import Navbar from './Navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';
import Checkout from './checkout/Checkout';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart)
  }, [cart])

  function handleProductAdd(info) {
    const checkIfExists = cart.find((item) => 
      item.id === info.id 
    )
    if (checkIfExists) {
      const updateCart = cart.map((item) => {
        if (item.id === info.id) {
          return {
            ...item, quantity: item.quantity + 1
          }
        }
        return item; 
      });
      setCart(updateCart);
    } else {
      setCart([
        ...cart, {
          ...info,
          quantity: 1,
        }
      ])
    }
  };

  function handleProductTake(info) {
    const checkIfExists = cart.find((item) => 
      (item.id === info.id && item.quantity > 1)
    )
    if (checkIfExists) {
      const updateCart = cart.map((item) => {
        if (item.id === info.id) {
          return {
            ...item, quantity: item.quantity - 1
          }
        }
        return item; 
      });
      setCart(updateCart);
    } else {
    const removeProduct = cart.filter((item) => 
      item.id !== info.id);
      console.log(removeProduct)
      setCart(removeProduct)
    }
  }

  let cartQuantity = 0;
    cart.map(item => {
      return cartQuantity += item.quantity; 
    })
  let totalPrice = 0;
    cart.map(item => {
      return totalPrice += item.quantity * item.price; 
    }) 

  return (<>

    <Navbar 
      cartQuantity={cartQuantity}
    />

      <Routes>
        <Route path='/' element={ <Home /> } /> 
        <Route path='about' element={ <About /> } /> 

        <Route path='shop' element={ <Shop 
          cart={cart}
          onProductAdd={handleProductAdd}
          onProductTake={handleProductTake}
        /> } 
        />

        <Route path='cart' element={ <Cart cart={cart} /> } />
        <Route path='cart/checkout' element={ <Checkout cart={cart} totalPrice={totalPrice}/> } ></Route> 

      </Routes>


    </>);
}
export default App;


