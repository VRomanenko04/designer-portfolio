import Header from "./components/Header/Header";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <InfoBlock />
        <Toolbar />
      </main>
    </>
  )
}

export default App;
