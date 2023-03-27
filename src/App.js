import { Sidebar } from "./components";

function App() {
  return (
    <div className="wrapper">
        <header className="header">
          <h1 className="header__title">Hello Evano <icon>👋🏼</icon>,</h1>
        </header>
        <Sidebar />
        <div className="table">
          table
        </div>
    </div>
  );
}

export default App;
