import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// other imports...
import Navbar from './pages/Navbar';
import SponsorPage from './pages/SponsorPage';
import ProjectsPage from './pages/ProjectsPage';
import StudentsPage from './pages/StudentsPage';
import NonprofitsPage from './pages/NonprofitsPage';
function App() {
  return (
    <div className="App">
    <Navbar/>
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
