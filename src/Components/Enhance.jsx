import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Enhance({ timerDate }) {
  return (
    <div className="max-mobile:mx-0 mx-10 my-20 flex items-center gap-10 rounded-md bg-two px-20 max-xl:flex-col max-xl:gap-0 max-xl:py-20">
      <div className="px-30 flex flex-col justify-center gap-12 max-xl:order-1 max-xl:items-center">
        <span className="text-2xl font-semibold leading-three tracking-wider text-six">
          Categories
        </span>
        <h1 className="font-inter text-7xl font-semibold leading-ten text-one max-sm:text-5xl max-sm:leading-relaxed">
          Enhance Your Audio Experience
        </h1>

        <div className="flex items-center gap-10 max-sm:flex-col-reverse">
          {timerDate.map(({ label, value }) => (
            <div
              key={label}
              className="flex h-28 w-28 flex-col items-center gap-1 rounded-full bg-one px-1 py-5 text-two"
            >
              <span className="text-3xl font-semibold leading-three">
                {value}
              </span>
              <span className="text-xl leading-two">{label}</span>
            </div>
          ))}
        </div>

        <motion.div
          className="w-fit rounded-md bg-six px-14 py-6 text-2xl font-medium leading-five tracking-widest text-one"
          transition={{ type: "spring", stiffness: 700 }}
          variants={{
            hover: { scale: 1.2, backgroundColor: "#00e65c" },
            tap: { scale: 0.9, backgroundColor: "#00e65c" },
          }}
          whileHover="hover"
          whileTap="tap"
        >
          <Link to="/products">Buy Now!</Link>
        </motion.div>
      </div>
      <div className="max-mobile:hidden items-start justify-start max-semi-sm:hidden">
        <img
          className="max-w-[600px] self-start max-xl:max-w-[400px]"
          src="/headphones.png"
        />
      </div>
    </div>
  );
}
