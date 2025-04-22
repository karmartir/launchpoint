import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Investments from "./pages/Investments";
import Contact from "./pages/Contact";
import CustomNavbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Intro from './pages/Intro.jsx';
import SuccessStoryPage from './pages/SuccessStoryPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OurTeam from './pages/OurTeam.jsx'; // ← THIS LINE

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundColor: "#0A1523",
          width: "100vw",
          minHeight: "100vh"
        }}
      >
        <CustomNavbar/>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/success-stories/:personId" element={<SuccessStoryPage />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;