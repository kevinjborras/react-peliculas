import { HOME, PELICULA } from "./routes/path"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Peliculas from "./pages/peliculas";
import './css/index.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes basename="home">
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={HOME} exact element={<Home />}  />
            <Route path={`${PELICULA}/:movieName`} element={<Peliculas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
