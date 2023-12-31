import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Data from "./Components/AirData";
import Hero from "./Components/Hero";

function App() {
  const cards = Data.map(item => (
    <Card
      key={item.id} // Add a unique key to each card for React to efficiently track them
      item={item}

    />
  )); 

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
