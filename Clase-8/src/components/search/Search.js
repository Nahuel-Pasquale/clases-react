import React from "react";
import { ImSearch } from "react-icons/im";
import { SearchFormStyled, InputStyled, ButtonStyled } from "./SearchStyles";

const Search = () => {
  return (
    <SearchFormStyled
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputStyled placeholder="Search" />

      <ButtonStyled type="submit">
        <ImSearch size="20" color="#c1c0c9" />
      </ButtonStyled>
    </SearchFormStyled>
  );
};

export default Search;
