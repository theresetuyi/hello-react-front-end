import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
