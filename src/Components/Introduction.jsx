import Shop from "./Shop";

const categories = [
  "Technology",
  "Electronics",
  "Furniture & Lifestyle",
  "Clothes & Fashion",
  "Groceries & Pets",
  "Make Up",
  "Jewelery",
  "Water & Drinks",
];

const Introduction = () => {
  return (
    <div className="max-semi-sm:pt-40 relative mt-10 flex animate-up flex-col max-lg:pt-0 md:flex-row">
      <ul className="relative flex flex-col gap-6 pr-20 before:absolute before:h-full before:w-full before:-translate-y-10 before:translate-x-80 before:border-l-2 before:border-solid before:border-l-black before:content-[''] max-xl:hidden">
        {categories.map((category) => (
          <li key={category}>
            <a className="border-b border-solid border-transparent text-2xl leading-five transition-colors hover:border-b-seven">
              {category}
            </a>
          </li>
        ))}
      </ul>

      <div className="max-semi-sm:flex-col-reverse max-semi-sm:my-52 bottom-0 top-0 mx-auto flex h-[344px] w-4/6 items-center justify-center text-one max-xl:m-0 max-xl:w-full max-xl:before:absolute max-xl:before:mb-40 max-xl:before:h-full max-xl:before:w-screen max-xl:before:bg-two max-xl:before:content-['']">
        <div className="max-semi-sm:bg-transparent z-10 flex h-full w-1/2 flex-col items-center justify-center gap-10 bg-two p-20 max-xl:w-full">
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
          className="max-semi-sm:w-full z-10 h-full w-1/2"
          src="/iphone.jpg"
        />
      </div>
    </div>
  );
};

export default Introduction;
