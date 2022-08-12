import styled from 'styled-components';
import {useState} from 'react'; 
import { Link } from 'react-router-dom';

export default function GoToCheckout(props) {
  
  const {cart} = props; 
  const [email, setEmail] = useState('');
  const [proceed, setProceed] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
  }

  //CHECK EMAIL IS CORRECT FIRST 
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function handleChange(e){
    if (!isValidEmail(e.target.value)) {
      setProceed(true);
    } else {
      setProceed(false);
    }
    console.log(`Email is ${proceed}`)
  };


  return (
  <Wrapper>
  {cart.length === 0 &&
    <h1 style={{margin: 'auto', padding: '10% 0px 0px 0px '}}>0 items in your cart</h1>
  }

  { cart.length > 0 && 
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Label>Enter Email 
        <Input 
          onChange={(event) => setEmail(event.target.value)} 
          type='email' 
          placeholder='johndoe@123.com. . . ' 
          required
          value={email}
          />
      </Label>


        <Link to='checkout' style={styleCheckout}>
        <Button  disabled={proceed}>Pay        </Button>
        </Link>   


    </Form>
  }
  </Wrapper> 
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(249, 222, 86);
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Label = styled.label`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding-bottom: 1rem;
  }
`;
const Input = styled.input`
  height: 50px;
  width: 40%;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  border-radius: 0.3rem;
  font-weight: 600;
  font-size: 1.3rem;
  margin-left: 2rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Button = styled.button`
  height:50px;
  width: 100%;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  border-radius: 0.3rem;
  font-weight: 600;
  font-size: 1.3rem;
  background-color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: lightgoldenrodyellow;
  }
  &:active {
  box-shadow: inset 5px 5px 5px #666;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const styleCheckout = {
  height: '50px',
  width: '25%',
  fontWeight: '600',
  fontSize: '1.3rem',
  textDecoration: 'none',
}
