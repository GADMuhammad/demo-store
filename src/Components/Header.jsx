import { useReducer } from "react";
import Search from "./Search";
import PopUpList from "./PopUpList";
import { AnimatePresence } from "framer-motion";

const INITIAL_STATE = { loveList: false, cartList: false },
  pages = ["Home", "Contact", "About", "Sign Up"];

const reducer = (state, action) => {
  switch (action.type) {
    case "loveList":
      return state.loveList
        ? INITIAL_STATE
        : { loveList: true, cartList: false };

    case "cartList":
      return state.cartList
        ? INITIAL_STATE
        : { loveList: false, cartList: true };

    case "close":
      return INITIAL_STATE;

    default:
      throw new Error("SOMETHING WENT WRONG!");
  }
};

const Header = ({ setSituation }) => {
  const [{ loveList, cartList }, PopUpDispatch] = useReducer(
    reducer,
    INITIAL_STATE,
  );

  const icons = [
    {
      icon: loveList ? "heart" : "heart-outline",
      dispatchType: "loveList",
      list: loveList,
    },
    {
      icon: cartList ? "cart" : "cart-outline",
      dispatchType: "cartList",
      list: cartList,
    },
    // {
    // temporary:
    // icon: loveList ? "person-circle" : "person-circle-outline",
    // dispatchType: "loveList",
    // list: loveList,
    // },
  ];

  return (
    <>
      <div
        onClick={() => PopUpDispatch({ type: "close" })}
        className="tex relative mx-auto flex h-12 items-center justify-center text-2xl text-one before:absolute before:-z-10 before:mx-auto before:h-full before:w-screen before:bg-two before:content-['']"
      >
        <p className="flex gap-4 text-2xl">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a className="underline hover:no-underline">ShopNow</a>
        </p>
      </div>

      <div className="relative flex items-center justify-between py-6 before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-screen before:-translate-x-1/2 before:transform before:border-b-2 before:border-solid before:border-two before:content-['']">
        <h1 className="track font-inter text-4xl font-bold leading-five">
          Exclusive
        </h1>
        <ul className="flex gap-20">
          {pages.map((page) => (
            <li key={page}>
              <a
                className="border-b-solid border-b-2 border-b-transparent text-2xl leading-five hover:border-b-two"
                onClick={() => setSituation(page.toLowerCase())}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-10">
          <Search />

          {icons.map(({ icon, dispatchType, list }) => (
            <button
              key={dispatchType}
              onClick={() => PopUpDispatch({ type: dispatchType })}
            >
              <ion-icon name={icon} />
              <AnimatePresence>
                {list && <PopUpList list={dispatchType} />}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
