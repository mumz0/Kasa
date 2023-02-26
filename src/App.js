import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import Housing from "./pages/housing/housing.js";
import Error from "./pages/404/error.js";

function App() {
  return (
    <div className="App">
      <main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/housing/:id" element={<Housing />} />
					<Route path="error" element={<Error />} />
				</Routes>
			</main>
    </div>
  );
}

export default App;
