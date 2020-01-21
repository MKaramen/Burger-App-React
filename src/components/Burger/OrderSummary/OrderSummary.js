import React from "react";
import Button from "../../UI/Button/Button";

// We have to opti OrderSummary because it rerender even though we don't see it
const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients :</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total price : {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={props.cancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
