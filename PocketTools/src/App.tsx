import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import MyToolsPage from './pages/MyToolsPage';
import NavBar from './components/NavBar';


function App() {
  const [mode, setMode] = useState("dark");
  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  }

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'lavender' : '#242424';
  }, [mode])
  return (
      <BrowserRouter>
        <NavBar mode={mode} onModeChange={handleModeChange}/>
        <Routes>
          <Route path="/" element={<HomePage mode={mode}/>} />
          <Route path='/mytools' element={<MyToolsPage mode={mode}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
