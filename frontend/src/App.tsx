import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import About from './pages/About';
import Prediction from './pages/Prediction';
import Result from './pages/Result';
// import History from './pages/History';
import ModelInfo from './pages/ModelInfo';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Prediction />} />
          <Route path="/result" element={<Result />} />
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="/model-info" element={<ModelInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
