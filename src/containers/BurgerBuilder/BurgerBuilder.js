import React, { Component } from "react";
import styles from "./BurgerBuilder.module.css";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
