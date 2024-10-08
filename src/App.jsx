import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const dataElements = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="app">
      <Navbar />
      {dataElements}
    </div>
  );
}

export default App;
