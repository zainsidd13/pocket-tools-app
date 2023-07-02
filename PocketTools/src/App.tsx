import HomePage from './pages/HomePage';
import { useState } from 'react';
import DarkMode from './components/DarkMode';


function App() {
  const [mode, setMode] = useState("")
  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  }

  return (
    <body className={mode}>
      <HomePage mode={mode}/>
      <DarkMode mode={mode} onModeChange={handleModeChange}/>
    </body>
  )
}

export default App
