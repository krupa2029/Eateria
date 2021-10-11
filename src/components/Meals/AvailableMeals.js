import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Double Cheese Margherita Pizza",
    description:
      "The ever-popular Margherita - loaded with extra cheese... oodies of it!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Mysore Masala Dosa",
    description: "All time favourite mysore masala dosa!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  
  return (
    <section className={classes.meals}>
      <Card>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
