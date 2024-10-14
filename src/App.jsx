import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Teams from "./root/team";
import Home from "./root/home";
import Contact from "./root/logged-in/info/contact";
import NewsLetter from "./root/logged-in/info/newsleter";
import Event from "./root/logged-in/ticket/event";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/team" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
