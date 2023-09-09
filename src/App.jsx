import { HOME } from "./routes/path"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./componentes/router/PublicRoute";
import Home from "./pages/home";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path={HOME} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
