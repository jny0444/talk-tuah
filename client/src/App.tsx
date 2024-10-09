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
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/rust" element={<Rust />} />
          <Route path="/linux" element={<Linux />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;