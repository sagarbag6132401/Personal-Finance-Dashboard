import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import LeftsideNavbar from "./components/leftside-navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeftsideNavbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
