import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import styled from 'styled-components'; 

const stripePromise = loadStripe("pk_test_51LV67SDloOkZo3DEgLXdZ4KWB8DXOXAiXu734B7cnWVtxyfLF49sMlJuN48j0jjgrpd98c7lSIDYLkVf5HhptPSS00bZzoTg4M");

export default function Checkout(props) {

    const { totalPrice} = props; 


  useEffect(() => {
    document.title = `Checkout`;
  }, [])


  return (
    <Wrapper>
      <Product>
        <Image
        />
        <ProductInfo>
          <ProductTitle>Bananas</ProductTitle>
          <ProductPrice>Total <span> </span> ${totalPrice.toFixed(2)}</ProductPrice>
        </ProductInfo>
        <div>
          <Elements 
              stripe={stripePromise} 
              hidePostalCode={true}
              >
            <CheckoutForm />
          </Elements>
        </div>
      </Product>
    </Wrapper>
  );
};

const Wrapper = styled.div`
position: absolute;
  z-index: 10;
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
const Product = styled.div`
  width: 100%;
  max-width: 450px;
  margin: auto;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow: hidden;
`;
const Image = styled.div`
  display: flex;
  width: 100%;
  height: 40vh; 
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://images.pexels.com/photos/2116020/pexels-photo-2116020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
`;
const ProductTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
`;
const ProductPrice = styled.h4`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 30px;
  color: #777;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  padding: 0 16px;
`;