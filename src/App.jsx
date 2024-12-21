import Header from "./Components/Header";
import { useState, useEffect, createContext } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Best from "./Components/Best";
import ErrorElement from "./Components/ErrorElement";

const redHeading =
    "border-l-solid rounded border-l-[16px] border-l-five pl-6 text-3xl font-semibold leading-five text-five",
  mainHeading = "font-inter text-6xl font-semibold leading-nine";

export const HeadingContext = createContext();

function App() {
  // TIMER Start
  const [remainingSeconds, setRemainingSecond] = useState(3600),
    minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0"),
    seconds = String(remainingSeconds % 60).padStart(2, "0");

  useEffect(() => {
    const time = setInterval(
      () => setRemainingSecond((prev) => (prev !== 0 ? prev - 1 : 3600)),
      1000,
    );

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
          element: <Home timerDate={timerDate} />,
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "all", element: <Best /> },
        { path: "*", element: <ErrorElement /> },
      ],
    },
  ]);

  return (
    <HeadingContext.Provider value={{ redHeading, mainHeading }}>
      <RouterProvider router={router} />;
    </HeadingContext.Provider>
  );
}

export default App;
