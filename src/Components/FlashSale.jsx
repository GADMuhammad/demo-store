import Slider from "react-slick";
import TempProduct from "./TempProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { Fragment } from "react";
import Loader from "./Loader";

const ArrowButton = ({ direction, onClick }) => {
  const isNext = direction === "next";
  return (
    <button
      className={`absolute z-10 flex rounded-full bg-three p-4 transition-transform hover:scale-110 focus:outline-none ${
        isNext ? "-top-28 right-4" : "right-28 top-[-4.5rem] -translate-y-1/2"
      }`}
      onClick={onClick}
    >
      <ion-icon
        name={isNext ? "arrow-forward-outline" : "arrow-back-outline"}
      />
    </button>
  );
};

const FlashSale = ({ redHeading, mainHeading, timerDate }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    // nextArrow: <ArrowButton direction="next" />,
    // prevArrow: <ArrowButton direction="prev" />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = () => {
    const loadData = () => JSON.parse(localStorage?.getItem("allData"));
    if (loadData()) {
      return (
        <>
          <Slider
            {...settings}
            className="max-w-screen max-h-[35rem] animate-up"
          >
            {loadData().map((product) => (
              <TempProduct key={product.id} props={product} />
            ))}
          </Slider>
        </>
      );
    } else {
      return <Loader />;
    }
  };

  return (
    <div className="border-b-solid relative mb-16 mt-24 flex flex-col gap-8 border-b-2 border-b-three pb-16">
      {/* // <div className="relative mb-14 mt-20 flex flex-col gap-8 pb-16"> */}
      <h4 className={redHeading}>Today’s</h4>
      <div className="flex items-center justify-between gap-36">
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
