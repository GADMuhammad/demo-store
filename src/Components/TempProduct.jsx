const MAX_TITLE_LENGTH = 60;

function TempProduct({ props }) {
  // prettier-ignore
  const { title, price, discountPercentage, image, images, isLoved,  id, rating } = props

  const index = id - 1,
    img = image || images[0],
    rateNum = Math.round(+rating);

  const filledStars = Array(rateNum).fill(<ion-icon name="star" />),
    emptyStars = Array(5 - rateNum).fill(<ion-icon name="star-outline" />);

  const buttonHandle = (action) => {
    const loadData = JSON.parse(localStorage.getItem("allData"));
    const updatedData = [...loadData];
    const theClickedProduct = loadData[index];

    switch (action) {
      case "love":
        updatedData[index] = {
          ...theClickedProduct,
          isLoved: !theClickedProduct.isLoved,
        };
        break;

      case "cart":
        updatedData[index] = {
          ...theClickedProduct,
          amountOfProductInCart: ++theClickedProduct.amountOfProductInCart,
        };
        break;
    }

    localStorage.setItem("allData", JSON.stringify(updatedData));
  };

  if (img === "string") return;

  return (
    <div className="flex flex-col gap-1" key={title}>
      <div className="group relative flex h-96 w-96 cursor-pointer justify-center rounded-lg bg-three">
        <img
          className="relative h-1/2 w-1/2 scale-150 self-center rounded-lg transition-transform group-hover:scale-200"
          src={img}
        />

        <button
          onClick={() => buttonHandle("cart")}
          className="absolute flex h-16 w-full translate-y-80 items-center justify-center rounded-ee-lg rounded-es-lg bg-nine text-center text-2xl tracking-widest text-one opacity-0 transition-transform hover:bg-two group-hover:opacity-100"
        >
          Add To Cart
        </button>

        <button
          onClick={() => buttonHandle("love")}
          className="absolute right-5 top-5 flex rounded-full bg-one p-1 transition-transform hover:scale-110 hover:animate-spin"
        >
          <ion-icon name={isLoved ? "heart" : "heart-outline"} />
        </button>
      </div>

      <a className="w-96 text-2xl font-medium leading-five">
        {title.length > MAX_TITLE_LENGTH
          ? title.slice(0, MAX_TITLE_LENGTH) + "..."
          : title}
      </a>

      <div className="flex items-center gap-2">
        <span className="text-3xl font-medium leading-five tracking-wide text-five">
          ${parseFloat(price).toFixed(2)}
        </span>
        <span className="text-2xl text-nine line-through">
          ${Math.ceil(price * discountPercentage).toFixed(2)}
        </span>
      </div>

      <div className="flex gap-2">
        {filledStars}
        {emptyStars}
      </div>
    </div>
  );
}

export default TempProduct;
