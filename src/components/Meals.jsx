import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fecthMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fecthMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
       <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
