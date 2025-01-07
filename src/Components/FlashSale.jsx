import Slider from "react-slick";
import TempProduct from "./TempProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { Fragment, useContext } from "react";
import Loading from "./Loading";
import { HeadingContext } from "../App";
import sliderSettings from "./sliderSettings";

const FlashSale = ({ timerDate }) => {
  const { redHeading, mainHeading } = useContext(HeadingContext);

  const slider = () => {
    const loadData = JSON.parse(localStorage?.getItem("allData")) || [];
    if (loadData) {
      return (
        <>
          <Slider {...sliderSettings} className="max-w-screen max-h-[35rem]">
            {loadData.map((product) => (
              <TempProduct key={product.id} product={product} />
            ))}
          </Slider>
        </>
      );
    } else {
      return <Loading />;
    }
  };

  return (
    <div className="border-b-solid relative mb-16 mt-24 flex animate-up flex-col gap-8 border-b-2 border-b-three pb-16 max-semi-sm:mt-40">
      <h4 className={redHeading}>Today’s</h4>
      <div className="flex flex-wrap items-center justify-between gap-12 max-lg:justify-center">
        <h2 className={mainHeading}>Flash Sales</h2>

        <div className="flex items-center justify-between space-x-4 rounded-lg bg-white p-6">
          {timerDate.map(({ label, value }, index) => (
            <Fragment key={label}>
              <div>
                <span className="block text-xl font-semibold tracking-widest">
                  {label}
                </span>
                <span className="text-4xl font-semibold tracking-widest">
                  {value}
                </span>
              </div>

              {index !== timerDate.length - 1 && (
                <span className="text-4xl text-red-400">:</span>
              )}
            </Fragment>
          ))}
        </div>
        <Button />
      </div>
      {slider()}
    </div>
  );
};

export default FlashSale;
