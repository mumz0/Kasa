import { Routes, Route } from "react-router-dom";
import './App.css';
import './App.scss';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Housing from "./pages/housing/housing";
import Error from "./pages/404/error";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
