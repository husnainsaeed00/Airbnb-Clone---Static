import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
          <Card
            img='swim.png'
            rating="5.0"
            revcount={6}
            country="Usa"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
          <Card
            img='swim.png'
            rating="5.0"
            revcount={6}
            country="Usa"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
           <Card
            img='swim.png'
            rating="5.0"
            revcount={6}
            country="Usa"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
      </div>
    </div>
  );
}
export default App;
