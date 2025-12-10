import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router';
import HomePage from './components/pages/HomePage.jsx';
import PracticePage from './components/pages/PracticePage.jsx';
import SetsPage from './components/pages/SetsPage.jsx';
import BottomNavBar from './components/Navbar.jsx';
import OpenedSetPage from './components/pages/OpenedSetPage.jsx';

function App() {

  function PracticePageWrapper() { // this forces remounting when the id param changes only fix i could find lol
    const { id } = useParams();
    return <PracticePage key={id} />;
  }

  return <>
    <BrowserRouter basename='/p89/'>
      <Routes>
        <Route path='*' element={<h2>404 Page Not Found</h2>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/sets' element={<SetsPage />} />
        <Route path='/sets/:id' element={<OpenedSetPage  />} />
        <Route path='/practice' element={<PracticePageWrapper />} />
        <Route path='/practice/:id' element={<PracticePageWrapper />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  </>
}

export default App
