import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
