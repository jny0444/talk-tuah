import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Blockchain from "./pages/genre/Blockchain";
import Rust from "./pages/genre/Rust";
import Linux from "./pages/genre/Linux";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genre/blockchain" element={<Blockchain />} />
          <Route path="genre/rust" element={<Rust />} />
          <Route path="genre/linux" element={<Linux />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;