import Button from "./Button";
import Loader from "./Loader";
import TempProduct from "./TempProduct";

function Explore({ redHeading, mainHeading }) {
  const loadData = JSON.parse(localStorage.getItem("allData"));

  return (
    <div className="mb-24 flex flex-col gap-8">
      <h4 className={redHeading}>Our Products</h4>
      <h2 className={mainHeading}>Explore Our Products</h2>

      <div className="border-b-solid relative my-10 flex animate-up flex-wrap justify-center gap-10 border-b-2 border-b-three pb-16">
        {loadData?.map((product) => (
          <TempProduct props={product} key={product.id} />
        )) ?? <Loader />}

        {/* {loadData && <Button />} */}
      </div>
    </div>
  );
}

export default Explore;
