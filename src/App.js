import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/details/details";
import HomePage from "./pages/home/home";
import Validate from "./pages/validate/validate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/validate" element={<Validate />}></Route>
        <Route path="/details/:name" element={<DetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
