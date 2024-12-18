import Best from "./Components/Best";
import BrowseByCategory from "./Components/BrowseByCategory";
import Enhance from "./Components/Enhance";
import Explore from "./Components/Explore";
import Features from "./Components/Features";
import FlashSale from "./Components/FlashSale";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Introduction from "./Components/Introduction";
import Arrival from "./Components/Arrival/";

const redHeading =
    "border-l-solid rounded border-l-[16px] border-l-five pl-6 text-3xl font-semibold leading-five text-five",
  mainHeading = "font-inter text-6xl font-semibold leading-nine";

function App() {
  const [situation, setSituation] = useState("home");

  // TIMER Start
  const [remainingSeconds, setRemainingSecond] = useState(3600);

  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0"),
    seconds = String(remainingSeconds % 60).padStart(2, "0");

  useEffect(() => {
    const time = setInterval(() => {
      setRemainingSecond((prev) => (prev !== 0 ? prev - 1 : 3600));
    }, 1000);

    return () => clearInterval(time);
  }, []);

  const timerDate = [
    {
      label: "Days",
      value: "03",
    },
    {
      label: "Hours",
      value: "23",
    },
    {
      label: "Minutes",
      value: minutes,
    },
    {
      label: "Seconds",
      value: seconds,
    },
  ];
  // TIMER End

  useEffect(() => {
    const initializeAllData = async () => {
      try {
        if (!localStorage.getItem("allData")) {
          // 2th API
          const response1 = await fetch("https://dummyjson.com/products");
          const dummyProducts = await response1.json();
          const formattedDummyProducts = dummyProducts.products.map(
            (product) => ({
              ...product,
              isLoved: false,
              amountOfProductInCart: 0,
              category:
                product.category === "beauty" ||
                product.category === "fragrances"
                  ? "makeUp"
                  : product.category,
            }),
          );

          // 2th API
          const response2 = await fetch("https://fakestoreapi.com/products");
          const fakeStoreProducts = await response2.json();
          const formattedFakeStoreProducts = fakeStoreProducts.map(
            (product) => ({
              ...product,
              isLoved: false,
              amountOfProductInCart: 0,
              discountPercentage: 7.1,
              category: product.category.includes("clothing")
                ? "clothes"
                : product.category,
            }),
          );

          // 3th API
          const response3 = await fetch("https://fakestoreapi.in/api/products");
          const fakeStoreProducts3 = await response3.json();
          const formattedFakeStoreAPI = fakeStoreProducts3.products.map(
            (product) => ({
              ...product,
              isLoved: false,
              amountOfProductInCart: 0,
              category: "electronics",
              rating: 4.5,
              discount: !product.discount ? 29 : product.discount,
            }),
          );

          // 4th API
          const drinksResponse = await fetch(
            "https://api.sampleapis.com/coffee/hot",
          );
          const drinksJSON = await drinksResponse.json();
          const formattedDrinksAPI = drinksJSON.map((product) => ({
            ...product,
            title: `${product.title} ${!product.title.includes("Coffee") && !product.title.includes("Espresso") ? product.ingredients[0] : ""}`,
            isLoved: false,
            price: 12.5,
            discountPercentage: 7.1,
            amountOfProductInCart: 0,
            category: "drinks",
            rating: 4.5,
          }));

          const updatedData = [
            ...formattedDummyProducts,
            ...formattedFakeStoreProducts,
            ...formattedFakeStoreAPI,
            ...formattedDrinksAPI,
          ];

          const updatedDataWithID = updatedData.map((product, index) => ({
            ...product,
            id: index + 1,
          }));

          localStorage.setItem("allData", JSON.stringify(updatedDataWithID));
        }
      } catch (error) {
        console.error("Error initializing allData:", error);
      }
    };

    initializeAllData();
  }, []);

  let show = (
    <>
      <Introduction />
      <FlashSale
        redHeading={redHeading}
        mainHeading={mainHeading}
        timerDate={timerDate}
      />
      <BrowseByCategory redHeading={redHeading} mainHeading={mainHeading} />
      <Best redHeading={redHeading} mainHeading={mainHeading} />
      <Enhance timerDate={timerDate} />
      <Explore redHeading={redHeading} mainHeading={mainHeading} />
      <Arrival redHeading={redHeading} mainHeading={mainHeading} />
      <Features />
    </>
  );

  if (situation === "about") {
    show = <About />;
  } else if (situation === "contact") {
    show = <Contact />;
  }

  return (
    <>
      <Header setSituation={setSituation} />
      {show}
      {/* <Footer /> */}
    </>
  );
}

export default App;
