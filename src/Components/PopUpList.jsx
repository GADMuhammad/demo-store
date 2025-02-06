import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const PARAGRAPH_STYLE = "text-2xl font-medium leading-five";

export default function PopUpList({ list, PopUpDispatch }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        PopUpDispatch({ type: "close" });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [PopUpDispatch]);

  const target = () => {
    const allData = JSON.parse(localStorage.getItem("allData"));

    switch (list) {
      case "preferredList":
        return allData?.filter((product) => product.isLoved);
      case "cartList":
        return allData?.filter((product) => product.amountOfProductInCart);
    }
  };

  const buttonHandle = (icon, id) => {
    const allData = JSON.parse(localStorage.getItem("allData"));
    const updatedData = [...allData];

    const index = updatedData.findIndex((product) => product.id === id);

    const theClickedProduct = allData[index];

    if (index !== -1) {
      switch (icon) {
        case "heart-dislike-outline":
          updatedData[index] = { ...theClickedProduct, isLoved: false };
          break;

        case "cart-outline":
        case "add-outline":
          updatedData[index] = {
            ...theClickedProduct,
            amountOfProductInCart: ++theClickedProduct.amountOfProductInCart,
          };
          break;

        case "remove-outline": // icon's name is 'remove' but it's a minus sign
          updatedData[index] = {
            ...theClickedProduct,
            amountOfProductInCart: --theClickedProduct.amountOfProductInCart,
          };
          break;

        case "close-outline":
          updatedData[index] = {
            ...theClickedProduct,
            amountOfProductInCart: 0,
          };
          break;

        default:
          break;
      }

      localStorage.setItem("allData", JSON.stringify(updatedData));
    }
  };

  const buttons = [
    { icon: "cart-outline", sort: "preferredList" },
    { icon: "heart-dislike-outline", sort: "preferredList" },
    { icon: "add-outline", sort: "cartList" },
    { icon: "remove-outline", sort: "cartList" },
    { icon: "close-outline", sort: "cartList" },
  ];

  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: -15 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 150 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={(e) => e.stopPropagation()}
      ref={ref}
      className={`absolute right-0 z-10 flex cursor-default overflow-x-hidden rounded-md ${target()?.length ? "h-[38rem] w-[28rem]" : "h-96 w-[25rem] overflow-y-hidden"} flex-col overflow-scroll bg-three p-4 shadow-popUp`}
    >
      <Link
        to={`/products/${list === "cartList" ? "cart" : "preferred"}`}
        onClick={() => window.scrollTo(0, 0)}
        className="w-fit self-center rounded-md bg-five p-5 text-2xl font-medium leading-five tracking-widest text-one transition-transform hover:scale-105 active:scale-90"
      >
        Open the Page of {list === "cartList" ? "cart" : "preferred"} products
        list
      </Link>

      {target()?.length ? (
        target()?.map(
          (
            { id, title, image, images, price, amountOfProductInCart },
            index,
          ) => (
            <div
              key={id}
              className={`animate-up py-5 ${index + 1 !== target()?.length ? "border-b-solid border-b border-b-ten" : ""}`}
            >
              <p className={PARAGRAPH_STYLE}>{title}</p>
              <p className={PARAGRAPH_STYLE}>
                {list === "cartList" &&
                  `${price} * ${+amountOfProductInCart} item${amountOfProductInCart ? "s" : ""} = ${(price * amountOfProductInCart).toFixed(2)} $`}
              </p>

              <img
                src={image || images[0]}
                alt={title}
                className={`${image ? "my-6" : ""} in-h-64 min-w-48 rounded-lg`}
              />
              <div className="flex justify-around gap-5">
                {buttons
                  .filter((button) => button.sort === list)
                  .map(({ icon }) => (
                    <button
                      key={icon}
                      onClick={() => buttonHandle(icon, id)}
                      className="w-1/2 rounded border border-solid border-two p-4 transition-colors hover:border-ten hover:bg-ten"
                    >
                      <ion-icon name={icon} />
                    </button>
                  ))}
              </div>
            </div>
          ),
        )
      ) : (
        <div className="m-auto flex flex-col items-center gap-5">
          <ion-icon name="heart-circle-outline" />
          <p className="m-auto text-center text-3xl">
            {list === "loveList"
              ? "No favorite products"
              : "No products in your cart"}{" "}
            to display here ...
          </p>
        </div>
      )}

      {list === "cartList" && !!target()?.length && (
        <p
          className={`${PARAGRAPH_STYLE} border-t-solid border-t border-ten pt-5`}
        >
          You have {target()?.length} product{target()?.length > 1 ? "s" : ""}{" "}
          in your cart
        </p>
      )}

      {list === "cartList" && !!target()?.length && (
        <p className={`${PARAGRAPH_STYLE}`}>
          The total price is{" "}
          {target()
            ?.reduce(
              (acc, cur) => acc + cur.price * cur.amountOfProductInCart,
              0,
            )
            .toFixed(2)}{" "}
          $
        </p>
      )}
    </motion.section>
  );
}
