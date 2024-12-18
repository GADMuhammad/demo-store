import { motion } from "framer-motion";

export default function Enhance({ timerDate }) {
  return (
    <div className="m-20 flex justify-between gap-10 rounded-md bg-two px-10">
      <div className="flex flex-col justify-center gap-12 px-20">
        <span className="text-2xl font-semibold leading-three tracking-wider text-six">
          Categories
        </span>
        <h1 className="font-inter text-7xl font-semibold leading-ten text-one">
          Enhance Your <br /> Audio Experience
        </h1>

        <div className="flex items-center gap-10">
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

        <motion.button
          className="w-fit rounded-md bg-six px-14 py-6 text-2xl font-medium leading-five tracking-widest text-one"
          transition={{ type: "spring", stiffness: 700 }}
          variants={{
            hover: { scale: 1.2, backgroundColor: "#00e65c" },
            tap: { scale: 0.9, backgroundColor: "#00e65c" },
          }}
          whileHover="hover"
          whileTap="tap"
        >
          Buy Now!
        </motion.button>
      </div>
      <div className="items-start justify-start">
        <img
          className="max-h-[600px] max-w-[600px] self-start"
          src="/headphones.png"
        />
      </div>
    </div>
  );
}

// relative bg-two drop-shadow-md before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-opacity-60 before:content-['']
