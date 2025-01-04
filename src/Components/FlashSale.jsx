import Slider from "react-slick";
import TempProduct from "./TempProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { Fragment, memo, useContext } from "react";
import Loading from "./Loading";
import { HeadingContext } from "../App";
import loader from "./loader";

const FlashSale = ({ timerDate }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
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
        breakpoint: 1120,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2.7,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.35,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.05,
        },
      },
    ],
  };

  const slider = () => {
    const loadData = JSON.parse(localStorage?.getItem("allData")) || [];
    if (loadData) {
      return (
        <>
          <Slider {...settings} className="max-w-screen max-h-[35rem]">
            {loadData.map((product) => (
              <TempProduct key={product.title} props={product} />
            ))}
          </Slider>
        </>
      );
    } else {
      return <Loading />;
    }
  };

  const { redHeading, mainHeading } = useContext(HeadingContext);

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

export default memo(FlashSale);
