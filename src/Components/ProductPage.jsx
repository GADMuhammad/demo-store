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
  const productID = +useParams().productID,
    allData = JSON.parse(localStorage.getItem("allData"));
  const numberOfProducts = allData.length;

  const product = allData[productID - 1] || [];

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
  }, [productID]);

  const buttons = [
    {
      label: `${isLoved ? "Remove from" : "Add to"} favorites`,
      onClick: () => handleProducts("love", productID - 1),
    },
    {
      label: `${amountOfProductInCart ? "Remove from" : "Add to"} Cart`,
      onClick: () =>
        handleProducts(
          amountOfProductInCart ? "cartRemove" : "cartPlus",
          productID - 1,
        ),
    },
    {
      label: `Go to the ${productID === numberOfProducts ? "first" : "next"} product`,
      onClick: () =>
        productNavigate(
          `/product/${productID === numberOfProducts ? 1 : productID + 1}`,
        ),
    },
    {
      label: `Go to the ${productID === 1 ? "last" : "previous"} product`,
      onClick: () =>
        productNavigate(
          `/product/${productID === 1 ? numberOfProducts : productID - 1}`,
        ),
    },
  ];

  const motionProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 700 },
  };

  return (
    <>
      <div
        key={productID}
        className={`flex animate-opacity gap-4 max-xl:flex-wrap ${images?.length > 1 ? "justify-center" : "justify-evenly"} py-10`}
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
            <ion-icon name="arrow-back-circle-outline" />
          </button>
        )}

        <img
          key={images[displayedImage]}
          src={images[displayedImage]}
          alt="One of the product images"
          className="max-md:order-0 h-auto w-[500px] animate-fast-opacity self-center rounded-xl"
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
            <ion-icon name="arrow-forward-circle-outline" />
          </button>
        )}

        <div className="flex flex-col gap-5 whitespace-pre-wrap p-10 max-xl:px-0">
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
            {`Product Number: ${productID} ${productID + 1 === allData.length ? "(The last product)." : ""}`}
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
                className={`w-fit self-center rounded-md bg-five px-10 py-5 text-2xl font-medium leading-five tracking-widest text-one ${index >= 2 ? "order-2" : ""}`}
                onClick={onClick}
                {...motionProps}
              >
                {label}
              </motion.button>
            ))}
            <div className="order-1 flex w-fit items-center justify-center gap-10 px-1 py-2">
              <motion.button
                onClick={() => handleProducts("cartMinus", productID - 1)}
                className="rounded-md border border-solid border-two p-2"
                {...motionProps}
              >
                <ion-icon name="remove-outline" />
              </motion.button>
              <p className="font-Lobster text-5xl font-bold leading-9 tracking-wider">
                {amountOfProductInCart}
              </p>
              <motion.button
                className="rounded-md bg-five p-2 text-one"
                onClick={() => handleProducts("cartPlus", productID - 1)}
                {...motionProps}
              >
                <ion-icon name="add-outline" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <Products propFilter="related" displayedProduct={product} />
    </>
  );
}
