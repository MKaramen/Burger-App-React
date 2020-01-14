import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { element, array } from "prop-types";

const Burger = props => {
  /* Transform the keys of an object into an array

  Object.keys(props.ingredients) // ['salad', 'bacon', 'cheese', 'meat']

   We can then map on it and for each ingredient create an array with the appropiate size */

  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      /* 

      Array(number) => create an new array with a length of number
      
      Example : 
        For salad we've got the value 1 in the props.ingredient so we create an Array of length 1, map on it and create a BurgerIngredient(salad) component for each element of the array 

        Rem : Have to use [...] otherwise array    is empty and we can't map on it 
      */
      return [...Array(props.ingredients[ingredientName])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientName + i} type={ingredientName} />
        );
      });
    })
    .reduce((accumulator, val) => {
      return accumulator.concat(val);
    }, []);

  console.log(transformedIngredients);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length !== 0
        ? transformedIngredients
        : "Please start adding Ingredients"}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
