import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LangingPage';
import NavbarPrimary from './components/NavbarPrimary';
import NavbarSecondary from './components/NavbarSecondary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavbarPrimary />
    <NavbarSecondary />
      <LandingPage />
    </BrowserRouter>
      
    </>
  )
}

export default App
