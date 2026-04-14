import SimilarProductClient from "./SimilarProductClient";
import { getAllProducts } from "../../_actions/allProductsAction";

export default async function SimilarProduct() {
  const products = await getAllProducts();

  return <SimilarProductClient products={products} />;
}
