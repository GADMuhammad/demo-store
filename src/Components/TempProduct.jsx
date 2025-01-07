import { Link, useNavigate } from "react-router-dom";
import ProductRating from "./ProductRating";
import { handleProducts } from "./handleProducts";

const MAX_TITLE_LENGTH = 60;

function TempProduct({ product }) {
  // prettier-ignore
  const { title, price, discountPercentage,  images, isLoved,  id, rating } = product;
  const index = id - 1;
  const loadData = JSON.parse(localStorage.getItem("allData"));

  const navigate = useNavigate();

  const NavigateToProduct = () => {
    navigate(`/product/${index}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex animate-opacity flex-col gap-1" key={title}>
      <div className="group relative flex h-96 w-96 cursor-pointer justify-center rounded-lg bg-three">
        <img
          onClick={NavigateToProduct}
          className="relative h-1/2 w-1/2 scale-150 self-center rounded-lg transition-transform group-hover:scale-200"
          src={images[0]}
        />

        <button
          onClick={() => handleProducts("cartPlus", index)}
          className="absolute flex h-16 w-full translate-y-80 items-center justify-center rounded-ee-lg rounded-es-lg bg-nine text-center text-2xl tracking-widest text-one opacity-0 transition-transform hover:bg-two group-hover:opacity-100"
        >
          Add To Cart
        </button>

        <button
          onClick={() => handleProducts("love", index)}
          className="absolute right-5 top-5 flex rounded-full bg-one p-1 transition-transform hover:scale-110 hover:animate-spin"
        >
          <ion-icon name={isLoved ? "heart" : "heart-outline"} />
        </button>

        {loadData[index].amountOfProductInCart ? (
          <button
            onClick={() => handleProducts("cartMinus", index)}
            className="absolute right-5 top-20 flex rounded-full bg-one p-1 transition-transform hover:scale-110 hover:animate-spin"
          >
            <ion-icon name="remove-circle-outline" />
          </button>
        ) : (
          ""
        )}
      </div>

      <Link
        to={`/product/${index}`}
        className="w-96 text-2xl font-medium leading-five"
      >
        {title.length > MAX_TITLE_LENGTH
          ? title.slice(0, MAX_TITLE_LENGTH) + "..."
          : title}
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-3xl font-medium leading-five tracking-wide text-five">
          ${parseFloat(price).toFixed(2)}
        </span>
        <span className="text-2xl text-nine line-through">
          ${Math.ceil(price * discountPercentage).toFixed(2)}
        </span>
      </div>

      {loadData[index].amountOfProductInCart ? (
        <p className="animate-fade text-2xl font-medium leading-five">
          Items in cart: {loadData[index].amountOfProductInCart} item
          {loadData[index].amountOfProductInCart > 1 ? "s" : ""}
        </p>
      ) : (
        ""
      )}

      <ProductRating rating={rating} />
    </div>
  );
}

export default TempProduct;
