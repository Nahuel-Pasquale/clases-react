import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import { ProductSectionStyled } from "./ProductStyles";

function Productos() {
  return (
    <>
      <ProductSectionStyled>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductSectionStyled>
    </>
  );
}

export default Productos;
