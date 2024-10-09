import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Blockchain from "./pages/genre/Blockchain";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genre/blockchain" element={<Blockchain />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;