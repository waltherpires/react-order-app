import { useState, useEffect } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
