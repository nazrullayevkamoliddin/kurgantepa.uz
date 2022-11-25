import Footer from "./component/Footer";
import { Home, Links, News, Category } from "./pages";
import Etc from "./component/Etc/etc";
import "./App.css";

function App(props) {
  return (
    <div className="root">
      <div>
        <header className="header">
          <Home />
        </header>
      </div>
      <News />
      <Category />
      <Links />

      <footer>
        <Footer />
      </footer>
      <Etc />
    </div>
  );
}

export default App;
