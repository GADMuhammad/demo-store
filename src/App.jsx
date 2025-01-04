import Header from "./Components/Header";
import { useState, useEffect, createContext } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Components/Products";
import ErrorElement from "./Components/ErrorElement";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import loader from "./Components/loader";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
          element: <Home timerDate={timerDate} />,
          loader,
        },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/products", element: <Products />, loader },
        {
          path: "/products/:filter",
          element: <Products filter="cart" />,
          loader,
        },
        { path: "/signup", element: <Signup /> },
        { path: "*", element: <ErrorElement /> },
      ],
    },
  ]);

  return (
    <HeadingContext.Provider value={{ redHeading, mainHeading }}>
      <RouterProvider router={router} />
    </HeadingContext.Provider>
  );
}

export default App;
