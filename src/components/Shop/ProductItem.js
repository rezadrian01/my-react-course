import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;
  function handleAddToCartClick() {
    //fetch(firebase url)
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
      })
    );
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCartClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
