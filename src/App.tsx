
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Method from "./pages/Method";
import Practice from "./pages/Practice";
import Programs from "./pages/Programs";
import Testimonials from "./pages/Testimonials";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import Legacy from "./pages/Legacy";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/method" element={<Method />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
