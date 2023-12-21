import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";

function App() {

  return (
    <div className="App">
      <h1>BluePrint</h1>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </div>

  );
}

export default App;


