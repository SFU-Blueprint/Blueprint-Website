import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SponsorPage from "./pages/SponsorPage";
import ProjectsPage from "./pages/ProjectsPage";
import StudentsPage from "./pages/StudentsPage";
import NonprofitsPage from "./pages/NonprofitsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/nonprofits" element={<NonprofitsPage />} />
        <Route path="/sponsors" element={<SponsorPage />} />
      </Routes>
    </div>
  );
}

export default App;
