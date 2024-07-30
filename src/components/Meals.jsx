import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const resData = await response.json();
        if (!response.ok) {
          //throw new Error("Failed to fetch meals.");
        }
        setLoadedMeals(resData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </ul>
  );
}
