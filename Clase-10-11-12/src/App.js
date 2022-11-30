import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyles } from "./styles/GlobalStyles";
import React from "react";
import Routes from "./routes/Routes";


function App() {
  return (
    <>
      <Routes />
      <ReactQueryDevtools />
      <GlobalStyles />
    </>
  );
}

export default App;
