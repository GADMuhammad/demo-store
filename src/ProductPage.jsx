import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductRating from "./Components/ProductRating";
import { HandleProducts } from "./Components/HandleProducts";
import Products from "./Components/Products";
import { useEffect } from "react";

const paragraphStyle =
    "font-poppins text-2xl font-normal leading-9 tracking-wider",
  imagesBtnsStyle = "max-md-lg:block hidden";

export default function ProductPage() {
  const productIndex = +useParams().productIndex;
  const product =
    JSON.parse(localStorage.getItem("allData"))[productIndex] || [];

  // prettier-ignore
  const { title, price, discountPercentage, images, isLoved, amountOfProductInCart,  id, category, tags, rating, description, dimensions } = product;
  const [displayedImage, setDisplayedImage] = useState(0);

  useEffect(() => {
    !images.some((img) => img === images[displayedImage]) &&
      setDisplayedImage(0);
  }, [images, displayedImage]);

  const buttons = [
    {
      label: `${isLoved ? "Remove from" : "Add to"} favorites`,
      onClick: () => HandleProducts("love", productIndex),
    },
    {
      label: `${amountOfProductInCart ? "Remove from" : "Add to"} Cart`,
      onClick: () =>
        HandleProducts(
          amountOfProductInCart ? "cartRemove" : "cartPlus",
          productIndex,
        ),
    },
  ];

  if (!product) return <div>Product not found!</div>;

  return (
    <>
      <div
        className={`flex animate-opacity gap-4 max-xl:flex-wrap ${images.length > 1 ? "justify-center" : "justify-evenly"} py-20`}
      >
        {images.length > 1 && (
          <div className="max-md-lg:hidden flex w-1/4 flex-col items-center justify-center gap-5">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                onClick={() => setDisplayedImage(image)}
                alt={`The image number ${index + 1} of the product.`}
                className="h-[190px] w-[170px] cursor-pointer rounded-xl bg-three"
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <button
            onClick={() =>
              setDisplayedImage((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
              )
            }
            className={imagesBtnsStyle}
          >
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </button>
        )}

        <img
          src={images[displayedImage]}
          alt="number 1"
          className="max-md:order-0 h-[600px] w-[500px] rounded-xl bg-three"
        />

        {images.length > 1 && (
          <button
            onClick={() =>
              setDisplayedImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
              )
            }
            className={imagesBtnsStyle}
          >
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </button>
        )}

        <div className="flex flex-col gap-5 p-10">
          <h1 className="font-inter text-4xl font-semibold leading-seven tracking-wider">
            {title}
          </h1>
          <ProductRating rating={rating} />

          <div className="flex gap-5">
            <p className="font-poppins text-4xl font-normal tracking-widest">
              ${price}
            </p>

            <p className="font-poppins text-4xl font-normal tracking-widest text-nine line-through">
              ${(price * discountPercentage).toFixed(2)}
            </p>
          </div>

          <p className="font-poppins text-3xl font-normal tracking-widest">
            Product Category:{" "}
            {category?.charAt(0).toUpperCase() + category?.slice(1)}{" "}
            {tags?.map((tag) =>
              tag.toLowerCase() !== category.toLowerCase()
                ? `- ${tag.charAt(0).toUpperCase() + tag.slice(1)}`
                : "",
            )}
          </p>

          <p
            className={`${paragraphStyle} ${!dimensions ? "border-b-solid border-b-2 border-b-two pb-6" : ""}`}
          >
            {description}
          </p>

          {dimensions && (
            <div className="border-b-solid flex gap-2 border-b-2 border-b-two pb-6">
              <h1 className={paragraphStyle}>
                Product Dimensions: Width: {dimensions.width} cm, Height:{" "}
                {dimensions.height} cm, Depth: {dimensions.depth} cm.
              </h1>
            </div>
          )}

          <div className="flex flex-wrap justify-evenly gap-4">
            {buttons.map(({ label, onClick }) => (
              <motion.button
                key={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 700 }}
                className="w-fit self-center rounded-md bg-five px-10 py-5 text-2xl font-medium leading-five tracking-widest text-one"
                onClick={onClick}
              >
                {label}
              </motion.button>
            ))}

            <div className="flex w-fit items-center justify-center gap-10 px-1 py-2">
              <button
                onClick={() => HandleProducts("cartMinus", productIndex)}
                className="border border-solid border-two p-2 transition-transform hover:scale-110"
              >
                <ion-icon name="remove-outline" />
              </button>
              <p className="font-Lobster text-5xl font-bold leading-9 tracking-wider">
                {amountOfProductInCart}
              </p>
              <button
                className="bg-five p-2 text-one transition-transform hover:scale-110"
                onClick={() => HandleProducts("cartPlus", productIndex)}
              >
                <ion-icon name="add-outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Products propFilter="related" category={category} />
    </>
  );
}
