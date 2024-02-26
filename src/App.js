import { Routes, Route } from "react-router-dom";
import {Suspense} from "react";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SponsorPage from "./pages/SponsorPage";
import ProjectsPage from "./pages/ProjectsPage";
import StudentsPage from "./pages/StudentsPage";
import NonprofitsPage from "./pages/NonprofitsPage";
import Footer from "./components/footer/Footer";
import ScrollToHashElement from "./components/shared/ScrollToHash";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <ScrollToHashElement />
      <NavBar />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/nonprofits" element={<NonprofitsPage />} />
        <Route path="/sponsors" element={<SponsorPage />} />
      </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default function WrappedApp(){
  return (
    <Suspense fallback="...loading">
      <App/>
    </Suspense>
  )
}