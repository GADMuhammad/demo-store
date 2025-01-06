import { useContext, useEffect } from "react";
import Loading from "./Loading";
import TempProducts from "./TempProduct";
import { HeadingContext } from "../App";
import { useParams } from "react-router-dom";

export default function Products({ propFilter }) {
  const allData = JSON.parse(localStorage.getItem("allData")) || [];
  const filter = useParams().filter;

  const products = () => {
    if (propFilter === "best") {
      return allData
        ?.sort((a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity)
        .slice(0, 5);
    } else if (filter === "preferred") {
      return allData?.filter((product) => product.isLoved);
    } else if (filter === "cart") {
      return allData?.filter((product) => product.amountOfProductInCart);
    } else if (filter) {
      const category = allData?.filter(
        (product) => product.category.toLowerCase() === filter.toLowerCase(),
      );

      return category.length
        ? category
        : allData?.filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase()),
          );
    } else {
      return allData;
    }
  };

  const { redHeading, mainHeading } = useContext(HeadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="border-b-solid mb-16 mt-24 flex flex-col gap-2 border-b-2 border-b-three pb-16">
      <h4 className={redHeading}>This Month</h4>
      <h2 className={mainHeading}>
        {filter === "preferred"
          ? "Preferred"
          : filter === "Best"
            ? "Best Selling"
            : filter === "Cart"
              ? "Cart"
              : filter
                ? filter.charAt(0).toUpperCase() + filter.slice(1)
                : "All"}{" "}
        Products
      </h2>

      <div className="my-6 flex animate-up flex-wrap justify-center gap-16 pb-8 transition-transform">
        {products()?.map((product) => (
          <TempProducts props={product} key={product.id} />
        )) ?? <Loading />}
        {!products().length ? (
          <p className="mx-auto animate-fade text-2xl font-medium leading-five">
            You have no products in this list.
          </p>
        ) : (
          ""
        )}
      </div>

      {filter === "cart" || filter === "preferred" ? (
        <p className="mx-auto animate-fade text-2xl font-medium leading-five">
          You have {products().length} {filter} product
          {products().length > 1 ? "s" : ""}.
        </p>
      ) : (
        ""
      )}

      {filter === "cart" ? (
        <p className="mx-auto animate-fade text-2xl font-medium leading-five">
          The total price of items in cart is:{" "}
          {products()
            .reduce(
              (acc, cur) => acc + cur.amountOfProductInCart * cur.price,
              0,
            )
            .toFixed(2)}{" "}
          $
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
