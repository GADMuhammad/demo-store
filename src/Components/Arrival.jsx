const FeaturesDetails = [
  {
    title: "PlayStation 5",
    paragraph: "Black and White version of the PS5 coming out on sale.",
    privateStyle: "h-[50rem] w-[55rem] col-span-2 row-span-2 bg-playStation",
  },
  {
    title: "Women’s Collections",
    paragraph: "Featured woman collections that give you another vibe.",
    privateStyle: "col-span-2 bg-women",
  },
  {
    title: "Speakers",
    paragraph: "Amazon wireless speakers",
    privateStyle: "bg-speaker",
  },
  {
    title: "Perfume",
    paragraph: "GUCCI INTENSE OUD EDP",
    privateStyle: "bg-perfume",
  },
];

export default function Arrival({ redHeading, mainHeading }) {
  return (
    <div className="flex flex-col gap-10">
      <h4 className={redHeading}>Featured</h4>
      <h2 className={mainHeading}>New Arrival</h2>

      <div className="mx-auto mb-6 grid grid-cols-4 gap-x-8 gap-y-6">
        {FeaturesDetails.map(({ title, paragraph, privateStyle }) => (
          <div
            key={title}
            className={`flex cursor-pointer flex-col justify-end gap-1 rounded bg-two bg-cover bg-center bg-no-repeat p-10 transition-shadow hover:shadow-feature ${privateStyle}`}
          >
            <h3 className="justify-self-start font-inter text-3xl font-semibold leading-five tracking-wider text-one">
              {title}
            </h3>
            <p
              className={`font-poppins text-xl leading-four tracking-wider text-one ${title === "PlayStation 5" || title === "Women’s Collections" ? "w-1/2" : ""}`}
            >
              {paragraph}
            </p>
            <a className="w-fit border-b-2 border-solid border-transparent font-poppins text-xl font-medium leading-five tracking-wider text-one transition-colors hover:border-one">
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
