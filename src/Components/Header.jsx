import { useReducer } from "react";
import Search from "./Search";
import PopUpList from "./PopUpList";
import { AnimatePresence } from "framer-motion";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Header.module.scss";

const INITIAL_STATE = { loveList: false, cartList: false },
  pages = [
    { title: "Home", path: "/" },
    { title: "Contact" },
    { title: "About" },
    { title: "Sign Up", path: "signup" },
  ];

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

const Header = () => {
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
      <div className="sticky top-0 z-10 shadow-feature">
        <div className="relative mx-auto flex h-12 items-center justify-center py-4 text-2xl text-one before:absolute before:-z-10 before:mx-auto before:h-full before:w-screen before:bg-two before:content-[''] max-md:hidden">
          <p className="flex gap-4 text-2xl">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to="/products" className="underline hover:no-underline">
              Shop Now
            </Link>
          </p>
        </div>

        <div
          className={`${styles.header} relative flex items-center justify-between py-6 before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-screen before:-translate-x-1/2 before:transform before:border-b-2 before:border-solid before:border-two before:bg-one before:content-['']`}
        >
          <h1 className="track font-inter text-4xl font-bold leading-five">
            Exclusive
          </h1>

          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <div></div>
            <div></div>
            <div></div>
          </label>

          <ul className="flex gap-20">
            {pages.map(({ title, path }) => (
              <li key={title}>
                <NavLink
                  className={({ isActive }) =>
                    `border-b-solid border-b-2 border-b-transparent text-2xl leading-five ${isActive ? "border-b-two" : "hover:border-gray-400"}`
                  }
                  to={path || title.toLowerCase()}
                >
                  {title}
                </NavLink>
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
                  {list && (
                    <PopUpList
                      list={dispatchType}
                      PopUpDispatch={PopUpDispatch}
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
