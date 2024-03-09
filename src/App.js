import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import More from './More';
import Navbar from './Navbar';

function App() {
  return (
    <>
  
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/more" element={<><More /></>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
