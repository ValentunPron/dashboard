import React from "react";
import { Sidebar, Table } from "./components";

function App() {
  const [burger, setBurger] = React.useState(false);

  return (
    <div className="wrapper">
        <header className="header">
          <h1 className="header__title">Hello Evano 👋🏼,</h1>
          <button className={`burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}><span></span></button>
        </header>
        <Sidebar burgerStatus={burger} />
        <Table />
    </div>
  );
}

export default App;
