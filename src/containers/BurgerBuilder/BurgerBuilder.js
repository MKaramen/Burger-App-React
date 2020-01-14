import React, { Component } from "react";
import styles from "./BurgerBuilder.module.css";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGRREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3,
    purchasable: false
  };

  updatePurchaseStateHandler = ingredients => {
    let number = 0;

    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((accumulator, value) => accumulator + value);

    console.log(sum);

    if (sum > 0) {
      this.setState({
        purchasable: true
      });
    } else {
      this.setState({
        purchasable: false
      });
    }
  };

  addIngredientHandler = label => {
    const tempValue = this.state.ingredients[label];
    const newValue = tempValue + 1;

    // Copy the old ingredients object and increase the value
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[label] = newValue;

    // Change price
    const priceAddition = INGRREDIENT_PRICES[label];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchaseStateHandler(updatedIngredients);
  };

  removeIngredientHandler = label => {
    let tempValue = this.state.ingredients[label];

    tempValue > 0 ? tempValue-- : (tempValue = 0);

    // Copy the old ingredients object and increase the value
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[label] = tempValue;

    // Change price
    const priceAddition = INGRREDIENT_PRICES[label];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchaseStateHandler(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
