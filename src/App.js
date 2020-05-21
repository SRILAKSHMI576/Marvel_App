import React from "react";
import Header from "./components/header/Header";
import InfoComponent from "./components/info/InfoComponent";
import PriceCalculator from "./components/priceCalculator/PriceCalculator";
import Product from "./components/product/product";

function App() {
  return (
    <div>
      <Header />
      <InfoComponent />
      <PriceCalculator />
      <Product />
    </div>
  );
}

export default App;
