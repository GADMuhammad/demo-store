import { useContext, useEffect } from "react";
import Loader from "./Loader";
import TempProducts from "./TempProduct";
import { HeadingContext } from "../App";

const Best = ({ all = true }) => {
  const allData = JSON.parse(localStorage.getItem("allData"));
  const products = all
    ? allData
    : allData
        ?.sort((a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity)
        .slice(0, 5);

  const { redHeading, mainHeading } = useContext(HeadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="border-b-solid mb-16 mt-24 flex flex-col gap-8 border-b-2 border-b-three pb-16">
      <h4 className={redHeading}>This Month</h4>
      <h2 className={mainHeading}>Best Selling Products</h2>

      <div className="flex animate-up flex-wrap justify-center gap-16 pb-8 transition-transform">
        {products?.map((product) => (
          <TempProducts props={product} key={product.id} />
        )) ?? <Loader />}
      </div>
    </div>
  );
};

export default Best;
