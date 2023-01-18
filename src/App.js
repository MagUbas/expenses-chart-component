import "./App.css";
import data from "./data.json";
import Balance from "./components/balance/balance";
import Spendings from "./components/spendings/spendings";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Balance />
      <Spendings data={data} />
    </div>
  );
}

export default App;
