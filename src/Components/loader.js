const chooseCategory = (product) => {
  if (product.category === "fragrances") {
    return "beauty";
  } else if (product.category?.includes("clothing")) {
    return "clothes";
  } else if (product.model) {
    return "electronics";
  } else if (product.ingredients) {
    return "drinks";
  } else {
    return product.category;
  }
};

export default async function loader() {
  if (!localStorage.getItem("allData")) {
    const apiUrls = [
      "https://dummyjson.com/products",
      "https://fakestoreapi.com/products",
      "https://fakestoreapi.in/api/products",
      "https://api.sampleapis.com/coffee/hot",
    ];

    const responses = await Promise.all(apiUrls.map(async (url) => fetch(url)));
    const allData = [];

    for (const response of responses) {
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const jsonData = await response.json();
      allData.push(...(jsonData.products || jsonData)); // Handle different API structures
    }

    // the filter method before mapping to ignore a not-completed product in an API
    const formattedProducts = allData
      .filter((product) => product.title !== "Coffee Name")
      .map((product, index) => ({
        id: index + 1,
        category: chooseCategory(product),
        tags: product.tags,
        images: product.images || [product.image],
        title:
          !product.title.includes("Coffee") &&
          !product.title.includes("Espresso") &&
          product.ingredients
            ? `${product.title} ${product.ingredients[0]}`
            : product.title,
        isLoved: false,
        price: parseFloat(product.price ?? 12.5).toFixed(2),
        amountOfProductInCart: 0,
        discountPercentage:
          product.discountPercentage ?? product.discount ?? 7.1,
        rating: product.rating?.rate ?? product.rating ?? 4.5,
        description: `${product.description} ${product.warrantyInformation || ""}`,
        dimensions: product.dimensions,
      }));

    localStorage.setItem("allData", JSON.stringify(formattedProducts));
  }
}
