import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home.jsx';
import Practice from './components/Practice.jsx';
import Folders from './components/Folders.jsx';
import Footer from './components/Navbar.jsx';

function App() {

  return <>
    <BrowserRouter basename='/p89/'>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/folders' element={<Folders />} />
        <Route path='/practice' element={<Practice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
