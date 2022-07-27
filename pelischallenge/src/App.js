import ModalMovie from "./components/ModalMovie";
import MoviesLists from "./components/MoviesLists";
import { MoviesProvider } from "./context/MoviesProvider";

function App() {
  return (
    <MoviesProvider>
      <div className="container">
        <h5 className="text-danger">PelisUp</h5>
        <div className="text-center">
          <h1 className="text-danger title">PelisUp</h1>
          <h4 className="text-secondary subtitle">Plataforma de pelis y series!</h4>
        </div>
        <MoviesLists/>
        <ModalMovie/>
      </div>
    </MoviesProvider>
  );
}

export default App;
