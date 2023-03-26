import { Routes, Route } from "react-router-dom";
import './App.css';
import './App.scss';
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import Housing from "./pages/housing/housing.js";
import Error from "./pages/404/error.js";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
