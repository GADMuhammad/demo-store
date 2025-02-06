import Shop from "./Shop";
import { Link } from "react-router-dom";

const categories = [
  { category: "Technology", path: "electronics" },
  { category: "Electronics" },
  { category: "Furniture & Lifestyle", path: "furniture" },
  { category: "Clothes & Fashion", path: "clothes" },
  { category: "Groceries & Pets", path: "groceries" },
  { category: "Make Up", path: "beauty" },
  { category: "Jewelery", path: "jewelry" },
  { category: "Water & Drinks", path: "drinks" },
];

const Introduction = () => {
  return (
    <section className="relative mt-10 flex animate-up flex-col max-lg:pt-0 max-md:mt-0 max-semi-sm:pt-40 md:flex-row">
      <ul className="relative flex flex-col gap-6 pr-20 before:absolute before:h-full before:w-full before:-translate-y-10 before:translate-x-80 before:border-l-2 before:border-solid before:border-l-black before:content-[''] max-xl:hidden">
        {categories.map(({ category, path }) => (
          <Link
            to={`/products/${path ?? category.toLowerCase()}`}
            key={category}
          >
            <a className="border-b border-solid border-transparent text-2xl leading-five transition-colors hover:border-b-seven">
              {category}
            </a>
          </Link>
        ))}
      </ul>

      <div className="bottom-0 top-0 mx-auto flex h-[344px] w-4/6 items-center justify-center text-one max-xl:m-0 max-xl:w-full max-xl:before:absolute max-xl:before:mb-40 max-xl:before:h-full max-xl:before:w-screen max-xl:before:bg-two max-xl:before:content-[''] max-semi-sm:my-52 max-semi-sm:flex-col-reverse">
        <div className="z-10 flex h-full w-1/2 flex-col items-center justify-center gap-10 bg-two p-20 max-xl:w-full max-semi-sm:bg-transparent">
          <div className="flex items-center gap-8">
            <ion-icon name="logo-apple" />
            <span className="text-3xl leading-five">iPhone 14 Series</span>
          </div>

          <p className="font-inter text-7xl font-semibold leading-ten max-md:text-6xl max-md:leading-nine">
            Up to 10%
            <br /> off Voucher
          </p>

          <Shop />
        </div>

        <img
          className="z-10 h-full w-1/2 max-semi-sm:w-full"
          src="/iphone.jpg"
        />
      </div>
    </section>
  );
};

export default Introduction;
