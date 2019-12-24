import React from "react";
import Header from "./components/header/Header";
import InfoComponent from "./components/info/InfoComponent";
import PriceCalculator from "./components/priceCalculator/PriceCalculator";

function App() {
  return (
    <div className="App">
      <Header />
      <InfoComponent />
      <PriceCalculator />
    </div>
  );
}

export default App;
