import HomePage from './pages/HomePage';
import { useState } from 'react';
import DarkMode from './components/DarkMode';


function App() {
  const [mode, setMode] = useState("dark")
  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  }

  return (

    <body className={mode}>
      <div className='dark-mode-button'>
        <DarkMode mode={mode} onModeChange={handleModeChange}/>
      </div>
      <HomePage mode={mode}/>
    </body>

  )
}

export default App
