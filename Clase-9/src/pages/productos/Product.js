import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import { features } from "../../data/productsData";
import { ProductSectionStyled } from "./ProductStyles";

function Productos() {
  return (
    <>
      <ProductSectionStyled>
        { features?.map(feature => (
          <ProductCard key={ feature.id } {...feature} />
        )) }
      </ProductSectionStyled>
    </>
  );
}

export default Productos;
