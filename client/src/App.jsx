import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarPrimary from './components/NavbarPrimary';
import NavbarSecondary from './components/NavbarSecondary';
import Layout from "./components/Layout";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Analysis from './pages/Analysis';
import Export from './pages/Export';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Layout>
 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/export' element={<Export />} />
        </Routes>
      </Layout>
      
    </Router>
    
    
      

      
    </>
  )
}

export default App
