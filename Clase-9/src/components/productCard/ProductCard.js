import React from "react";
import { Window, WindowHeader, WindowContent, Cutout } from "react95";
import Button from "../button/Button";
import { ContainerButton } from "./ProductCardStyles";

export const ProductCard = (props) => {
  return (
    <>
      <Window style={{ maxWidth: "350px" }}>
        <WindowHeader style={{ textTransform: "capitalize" }}>
          <span role="img" aria-label="Kiwi">
            📍
          </span>
          Helados
        </WindowHeader>

        <WindowContent style={{ padding: "0.25rem" }}>
          <Cutout>
            <img
              style={{ width: "100%", height: "1uto", display: "block" }}
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1653953042/coding/helado_nlovrp.webp"
              alt="heladoss"
            />
          </Cutout>
          <ContainerButton>
            <Button primary onClick={(e) => e.preventDefault()}>
              {" "}
              Ver más{" "}
            </Button>
          </ContainerButton>
        </WindowContent>
      </Window>
    </>
  );
};

ProductCard.story = {
  name: "Product",
};
