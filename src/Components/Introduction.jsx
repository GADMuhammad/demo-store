import Shop from "./Shop";

const categories = [
  "Technology & Electronics",
  "Furniture & Lifestyle",
  "Clothes & Fashion",
  "Groceries & Pets",
  "Make Up & Fragrances",
  "Jewelery",
  "Water & Drinks",
];

const Introduction = () => {
  return (
    <div className="mt-10 flex">
      <ul className="relative flex flex-col gap-6 before:absolute before:h-full before:w-full before:-translate-y-10 before:translate-x-80 before:border-l-2 before:border-solid before:border-l-black before:content-['']">
        {categories.map((category) => (
          <li key={category}>
            <a className="border-b border-solid border-transparent text-2xl leading-five transition-colors hover:border-b-seven">
              {category}
            </a>
          </li>
        ))}
      </ul>

      <div className="mx-auto flex h-[344px] w-[892px] text-one">
        <div className="flex h-full w-1/2 flex-col justify-center gap-10 bg-two p-20">
          <div className="flex items-center gap-8">
            <ion-icon name="logo-apple" />
            <span className="text-3xl leading-five">iPhone 14 Series</span>
          </div>

          <p className="font-inter text-7xl font-semibold leading-ten">
            Up to 10%
            <br /> off Voucher
          </p>

          <Shop />
        </div>

        <img className="h-full w-1/2" src="/iphone.jpg" />
      </div>
    </div>
  );
};

export default Introduction;
