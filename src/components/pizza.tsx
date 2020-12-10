import React, { useContext } from "react";
import PizzaCss from "./pizza.module.css";
import { IPizza } from "../types"
import { AddToCartProps, withAddToCart } from "./AddToCart";


interface IPizzaProps extends AddToCartProps {
  pizza: IPizza;
}

const Pizza: React.FC<IPizzaProps> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
  }

  return (
    <li className={PizzaCss.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>Add to cart</button>
    </li>
  )
}

export default withAddToCart(Pizza);
