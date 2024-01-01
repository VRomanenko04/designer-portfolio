import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import ProjectsList from "./components/ProjectsList/ProjectsList";
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
        <ProjectsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
