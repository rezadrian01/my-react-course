import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-desription">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
