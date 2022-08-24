import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import styled from 'styled-components'; 



const CARD_ELEMENT_OPTIONS = {
  style: {

    base: {
      color: "#303238",
      fontSize: "24px",

      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

function CardSection() {
  return (
    <label>
      Card details
      <Details></Details>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}

export default CardSection;

const Details = styled.div`
  padding-bottom: 1rem;
`;

