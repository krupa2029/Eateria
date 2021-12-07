import React from "react";
import Meals from "../components/Meals/Meals";
import CartProvider from "../store/CartProvider";
import mealsImage from "../assets/meals.jpg";
import classes from "./HomePage.module.css";

function HomePage() {
  
  return (
    <CartProvider>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default HomePage;