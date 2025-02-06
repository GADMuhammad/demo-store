import { useContext } from "react";
import { HeadingContext } from "../App";
import { Link } from "react-router-dom";

const CategoriesDetails = [
  {
    img: "tv-outline",
    product: "Electronics",
  },
  {
    img: "home-outline",
    product: "Furniture",
  },
  {
    img: "shirt-outline",
    product: "Clothes",
  },
  {
    img: "fast-food-outline",
    product: "Groceries",
  },
  {
    img: "sparkles-outline",
    product: "Beauty",
  },
  {
    img: "diamond-outline",
    product: "Jewelery",
  },
  {
    img: "beer-outline",
    product: "Drinks",
  },
];

function BrowseByCategory() {
  const { redHeading, mainHeading } = useContext(HeadingContext);

  return (
    <section className="flex animate-up flex-col gap-4">
      <h4 className={redHeading}>Categories</h4>
      <h2 className={mainHeading}>Browse By Category</h2>

      <div className="mt-7 flex flex-wrap justify-around gap-6 border-b border-solid border-nine pb-20">
        {CategoriesDetails.map(({ img, product }) => (
          <Link
            key={product}
            to={`/products/${product.toLowerCase()}`}
            className="mb-10 flex h-[145px] w-[170px] cursor-pointer flex-col items-center justify-center gap-10 rounded border border-solid border-seven transition-all hover:scale-110 hover:border-transparent hover:bg-five hover:text-white active:scale-100"
          >
            <ion-icon name={img} class="product_logo" />
            <span className="text-2xl leading-five tracking-wide">
              {product}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BrowseByCategory;
