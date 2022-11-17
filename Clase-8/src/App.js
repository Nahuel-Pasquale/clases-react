import { useState } from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";
import { initialPokemon } from "./data/initialPokemon";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";

function App() {
  const [data, setData] = useState(initialPokemon);

  return (
    <>
      <MyAppStyled>
        <Search />
        {data && <Pokemon {...data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
