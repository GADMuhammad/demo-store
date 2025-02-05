import { Fragment, useState } from "react";
import content from "./content";
import { motion } from "framer-motion";

function App() {
  const [indexOfOpenQuestion, setIndexOfOpenQuestion] = useState(null);

  return (
    <main className="m-auto flex w-[60vw] flex-col gap-3 rounded-2xl bg-white px-8 pb-8 pt-10 max-lg:w-[75vw] max-sm:w-[85vw]">
      <h1 className="mb-6 inline-flex items-center gap-4 text-4xl font-bold">
        <img src="icon-star.svg" alt="Star Icon" />
        FAQs
      </h1>

      {content.map(({ question, answer }, index) => (
        <Fragment key={question}>
          <button
            onClick={() =>
              setIndexOfOpenQuestion((prev) => (prev === index ? null : index))
            }
            className={`mr-4 flex justify-between gap-2 text-dark-purple transition-colors duration-1000 hover:text-sunny-purple max-lg:mr-2 ${
              indexOfOpenQuestion !== index && index !== content.length - 1
                ? "border-b-2 border-solid border-b-gray-200 pb-4"
                : ""
            }`}
          >
            <h2 className="text-left text-lg font-semibold max-first:text-base">
              {question}
            </h2>
            <img
              src={
                indexOfOpenQuestion === index
                  ? "/icon-minus.svg"
                  : "/icon-plus.svg"
              }
              alt="Icon to collapse question."
            />
          </button>

          {indexOfOpenQuestion === index && (
            <motion.p
              transition={{ type: "spring", stiffness: 325 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { type: "tween" } }}
              className={`${
                index !== content.length - 1
                  ? "mb-2 border-b-2 border-solid border-b-grayish-purple"
                  : ""
              } px-1 pb-2 text-left text-base text-gray-500`}
            >
              {answer}
            </motion.p>
          )}
        </Fragment>
      ))}
    </main>
  );
}

export default App;
