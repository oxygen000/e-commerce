import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import ProductDetailsTabs from "./ProductDetailsTabs";
import SimilarProduct from "./SimilarProduct";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

  return (
    <>
      <Breadcrumb id={id}/>
      <ProductDetail id={id} />
      <ProductDetailsTabs />
      <SimilarProduct />
    </>
  );
}
