import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ProductRating from "./ProductRating";
import { handleProducts } from "./handleProducts";
import Products from "./Products";

const paragraphStyle =
    "font-poppins text-2xl font-normal leading-9 tracking-wider",
  imagesBtnsStyle = "max-md-lg:block hidden";

export default function ProductPage() {
  const productIndex = +useParams().productIndex,
    allData = JSON.parse(localStorage.getItem("allData"));
  const numberOfProducts = allData.length;

  const product = allData[productIndex] || [];

  // prettier-ignore
  const { title, price, discountPercentage, images, isLoved, amountOfProductInCart, category, tags, rating, description, dimensions } = product;
  const [displayedImage, setDisplayedImage] = useState(0);
  const productNavigate = useNavigate();

  useEffect(() => {
    !images.some((img) => img === images[displayedImage]) &&
      setDisplayedImage(0);
  }, [images, displayedImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productIndex]);

  const buttons = [
    {
      label: `${isLoved ? "Remove from" : "Add to"} favorites`,
      onClick: () => handleProducts("love", productIndex),
    },
    {
      label: `${amountOfProductInCart ? "Remove from" : "Add to"} Cart`,
      onClick: () =>
        handleProducts(
          amountOfProductInCart ? "cartRemove" : "cartPlus",
          productIndex,
        ),
    },
    {
      label: `Go to the ${productIndex + 1 === numberOfProducts ? "first" : "next"} product`,
      onClick: () =>
        productNavigate(
          `/product/${productIndex + 1 === numberOfProducts ? 0 : productIndex + 1}`,
        ),
    },
    {
      label: `Go to the ${!productIndex ? "last" : "previous"} product`,
      onClick: () =>
        productNavigate(
          `/product/${productIndex ? productIndex - 1 : numberOfProducts - 1}`,
        ),
    },
  ];

  return (
    <>
      <div
        key={productIndex}
        className={`flex animate-opacity gap-4 max-xl:flex-wrap ${images?.length > 1 ? "justify-center" : "justify-evenly"} py-20`}
      >
        {images?.length > 1 && (
          <div className="flex w-1/4 flex-col items-center justify-center gap-5 max-md-lg:hidden">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                onClick={() => setDisplayedImage(images.indexOf(image))}
                alt={`The image number ${index + 1} of the product.`}
                className="h-[190px] w-[170px] cursor-pointer rounded-xl bg-three"
              />
            ))}
          </div>
        )}

        {images?.length > 1 && (
          <button
            onClick={() =>
              setDisplayedImage((prev) =>
                prev === 0 ? images?.length - 1 : prev - 1,
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
          className="max-md:order-0 h-auto w-[500px] self-center rounded-xl bg-three"
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

          <p className={paragraphStyle}>
            {`Product Number: ${productIndex + 1} ${productIndex + 1 === allData.length ? "(The last product)." : ""}`}
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
            {buttons.map(({ label, onClick }, index) => (
              <motion.button
                key={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 700 }}
                className={`w-fit self-center rounded-md bg-five px-10 py-5 text-2xl font-medium leading-five tracking-widest text-one ${index >= 2 ? "order-2" : ""}`}
                onClick={onClick}
              >
                {label}
              </motion.button>
            ))}
            {/* Display the next Product !! */}
            <div className="order-1 flex w-fit items-center justify-center gap-10 px-1 py-2">
              <button
                onClick={() => handleProducts("cartMinus", productIndex)}
                className="border border-solid border-two p-2 transition-transform hover:scale-110"
              >
                <ion-icon name="remove-outline" />
              </button>
              <p className="font-Lobster text-5xl font-bold leading-9 tracking-wider">
                {amountOfProductInCart}
              </p>
              <button
                className="bg-five p-2 text-one transition-transform hover:scale-110"
                onClick={() => handleProducts("cartPlus", productIndex)}
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
