import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./components/data.js";
import "./App.css";

function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <div>
      <Header />
      <main className="container">{entryElements}</main>
    </div>
  );
}
export default App;
