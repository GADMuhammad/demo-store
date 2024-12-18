import Loader from "./Loader";
import TempProducts from "./TempProduct";

const Best = ({ redHeading, mainHeading }) => {
  return (
    <div className="border-b-solid mb-16 mt-24 flex flex-col gap-8 border-b-2 border-b-three pb-16">
      <h4 className={redHeading}>This Month</h4>
      <h2 className={mainHeading}>Best Selling Products</h2>

      <div className="flex animate-up justify-center gap-16 pb-8 transition-transform">
        {JSON.parse(localStorage.getItem("allData"))
          ?.sort((a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity)
          .slice(0, 5)
          .map((product) => (
            <TempProducts props={product} key={product.id} />
          )) ?? <Loader />}
      </div>
    </div>
  );
};

export default Best;
