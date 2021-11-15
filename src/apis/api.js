import axios from "axois";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
  const products = await axios.get(`${BASE_URL}/products`);
  return products.data;
};

export { getProducts };