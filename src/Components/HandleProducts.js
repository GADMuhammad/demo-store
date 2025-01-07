export const HandleProducts = (action, index) => {
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

    case "cartPlus":
      updatedData[index] = {
        ...theClickedProduct,
        amountOfProductInCart: ++theClickedProduct.amountOfProductInCart,
      };
      break;

    case "cartMinus":
      if (updatedData[index].amountOfProductInCart > 0) {
        updatedData[index] = {
          ...theClickedProduct,
          amountOfProductInCart: --theClickedProduct.amountOfProductInCart,
        };
      }
      break;

    case "cartRemove":
      updatedData[index] = {
        ...theClickedProduct,
        amountOfProductInCart: 0,
      };
      break;
  }

  localStorage.setItem("allData", JSON.stringify(updatedData));
};
