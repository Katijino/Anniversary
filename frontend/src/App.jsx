import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Timeline from "./pages/Timeline";
import FuturePlans from "./pages/FuturePlans";
import './App.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/future" element={<FuturePlans />} />
      </Routes>
    </div>
  );
}
