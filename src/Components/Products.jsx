import { useContext } from "react";
import Loading from "./Loading";
import TempProducts from "./TempProduct";
import { HeadingContext } from "../App";
import { useParams } from "react-router-dom";

export default function Products({ propFilter, displayedProduct }) {
  const allData = JSON.parse(localStorage.getItem("allData")) || [];
  const filter = useParams().filter || propFilter;

  const products = () => {
    switch (filter) {
      case "best":
        return allData
          ?.sort((a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity)
          .slice(0, 5);
      case "related": {
        // the first condition to display related iPhones if the displayedProduct is a iphone - and then the general condition
        return allData
          ?.filter((product) =>
            displayedProduct?.title?.toLowerCase().includes("iphone")
              ? product?.title?.toLowerCase().includes("iphone")
              : product.category === displayedProduct.category &&
                product.title !== displayedProduct.title,
          )
          .slice(0, 5);
      }
      case "preferred":
        return allData?.filter((product) => product.isLoved);
      case "cart":
        return allData?.filter((product) => product.amountOfProductInCart);
      default:
        if (filter) {
          return allData?.filter(
            (product) =>
              product.category.toLowerCase().includes(filter.toLowerCase()) ||
              product.title.toLowerCase().includes(filter.toLowerCase()) ||
              product?.tags?.some((tag) =>
                tag.toLowerCase().includes(filter.toLowerCase()),
              ) ||
              +product.id === +filter,
          );
        }
        return allData;
    }
  };

  const { redHeading, mainHeading } = useContext(HeadingContext);
  const productsNumber = products()?.length;

  return (
    <section className="border-b-solid mb-16 mt-24 flex flex-col gap-2 border-b-2 border-b-three pb-16">
      <h4 className={redHeading}>This Month</h4>
      <h2 className={mainHeading}>
        {`${filter?.charAt(0).toUpperCase() + filter?.slice(1) || "All"} Products`}
      </h2>

      <div className="my-6 flex animate-up flex-wrap justify-center gap-16 pb-8 transition-transform">
        {products()?.map((product) => (
          <TempProducts product={product} key={product.id} />
        )) ?? <Loading />}
        {!productsNumber ? (
          <p className="mx-auto animate-fade text-2xl font-medium leading-five">
            You have no products in this list.
          </p>
        ) : (
          ""
        )}
      </div>

      {productsNumber && (filter === "cart" || filter === "preferred") ? (
        <p className="mx-auto animate-fade text-2xl font-medium leading-five">
          You have {productsNumber} {filter} product
          {productsNumber > 1 ? "s" : ""}.
        </p>
      ) : (
        ""
      )}

      {productsNumber && filter === "cart" ? (
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
    </section>
  );
}
