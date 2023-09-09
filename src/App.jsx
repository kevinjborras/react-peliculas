import { HOME } from "./routes/path"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./componentes/router/PublicRoute";
import Home from "./pages/home";
import './css/index.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes basename="home">
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={HOME} exact element={<Home />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
