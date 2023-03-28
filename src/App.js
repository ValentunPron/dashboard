import { Sidebar, Table } from "./components";

function App() {
  return (
    <div className="wrapper">
        <header className="header">
          <h1 className="header__title">Hello Evano <icon>👋🏼</icon>,</h1>
        </header>
        <Sidebar />
        <Table />
    </div>
  );
}

export default App;
