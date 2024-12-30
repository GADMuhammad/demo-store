import Slider from "react-slick";
import TempProduct from "./TempProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { Fragment, memo, useContext } from "react";
import Loading from "./Loading";
import { HeadingContext } from "../App";

const FlashSale = ({ timerDate }) => {
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
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
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
          <Slider {...settings} className="max-w-screen max-h-[35rem]">
            {loadData().map((product) => (
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
    <div className="border-b-solid relative mb-16 mt-24 flex animate-up flex-col gap-8 border-b-2 border-b-three pb-16">
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

export default memo(FlashSale);
