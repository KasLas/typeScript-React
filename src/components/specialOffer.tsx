import React from 'react';
import { IPizza } from "../types"
import { AddToCartProps, withAddToCart } from './AddToCart';
import SpecialOfferCss from "./specialOffer.module.css"

interface Props extends AddToCartProps {
    pizza: IPizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
    const handleAddToCartClick = () => {
        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
    }
    return (
        <div className={SpecialOfferCss.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type="button" onClick={handleAddToCartClick}>Add to cart</button>
        </div>
    );
};

export default withAddToCart(SpecialOffer); 