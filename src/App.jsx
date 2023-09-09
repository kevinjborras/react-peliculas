import { HOME } from "./routes/path"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./componentes/router/PublicRoute";
import Home from "./pages/home";
import './css/index.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes basename="home">
          <Route path="/" exact element={<PublicRoute />}>
            <Route path={HOME} exact element={<Home />}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
