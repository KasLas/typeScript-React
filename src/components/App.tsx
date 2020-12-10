import React, { useEffect } from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./pizza";
import AppCss from "./App.module.css";
import PizzaSvg from "../svg/pizza.svg"
import Cart from "./cart";
import AppStateProvider from "./app-state";
import SpecialOffer from "./specialOffer";

const App = () => {
  // Find a pizza with special offer
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer)

  // useEffect(() => {
  //   const listener = () => {
  //     alert("Hello")
  //   };

  //   document.addEventListener("mousedown", listener);

  //   return () => {
  //     document.removeEventListener("mousedown", listener);
  //   }
  // })

  return (
    <AppStateProvider>
      <div className={AppCss.container}>
        <div className={AppCss.header}>
          <PizzaSvg width={120} height={120} />
          <div className={AppCss.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {/* checks if the specialOfferPizza object exists */}
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCss.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
