import { useState } from 'react'
import NavbarPrimary from './components/NavbarPrimary';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavbarPrimary />
    </BrowserRouter>
      
    </>
  )
}

export default App
