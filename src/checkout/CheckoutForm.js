import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import styled from 'styled-components'; 

import CardSection from "./CardSection";

class CheckoutForm extends React.Component {

  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }

    alert(`Mock payment made via Stripe`)
    window.location.href='https://playful-pudding-43fa23.netlify.app/';
  };



  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <CardSection />
          <PayButton disabled={!this.props.stripe}>
            Buy Now
          </PayButton>
        </form>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements}/>
      )}
    </ElementsConsumer>
  );
}

const PayButton = styled.button`
  display: block;
  margin-top: 4vh;
  width: 100%;
  border: none;
  background: linear-gradient(
    135deg,
    rgb(49, 0, 62) 0%,
    rgb(195, 40, 110) 100%
  );
  color: #fff;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`;