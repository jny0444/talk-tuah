import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Blockchain from "./pages/boards/Blockchain";
import Shetposting from './pages/boards/Shetposting';
import Political from './pages/boards/Political';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boards/blockchain" element={<Blockchain />} />
          <Route path="/boards/shetposting" element={<Shetposting />} />
          <Route path="/boards/political" element={<Political />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;