import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import DarkMode from './components/DarkMode';
import MyToolsPage from './pages/MyToolsPage';


function App() {
  const [mode, setMode] = useState("dark")
  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  }

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'lavender' : '#242424';
  }, [mode])
  return (

    <>
      <div className='dark-mode-button'>
        <DarkMode mode={mode} onModeChange={handleModeChange}/>
      </div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage mode={mode}/>} />
        <Route path='/mytools' element={<MyToolsPage mode={mode}/>} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

   </>

  )
}

export default App
