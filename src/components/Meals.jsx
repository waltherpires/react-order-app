import MealItem from "./MealItem";
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Meals() {
  const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/mealssss', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fecthing meals...</p>
  }

  if(error){
    return <Error title="Failed to fetch meals" message={error} />
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
