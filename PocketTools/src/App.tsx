import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import DarkMode from './components/DarkMode';


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
      <HomePage mode={mode}/>
   </>

  )
}

export default App
