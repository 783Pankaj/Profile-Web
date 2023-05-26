import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './PageComponents/Home';
import About from './PageComponents/About';
import Contact from './PageComponents/Contact';
import Gallary from './PageComponents/Gallary';
import Error from './PageComponents/Error';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallary' element={<Gallary />} />
            <Route path='*' element={<Error />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
