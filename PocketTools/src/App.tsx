import HomePage from './pages/HomePage';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';
import { SyntheticEvent, useState } from 'react';


function App() {
  const [mode, setMode] = useState("")
  const handleModeChange = (e: SyntheticEvent) => {
    e.preventDefault();
    mode ? setMode("") : setMode("light");
    console.log(mode);
  }

  return (
    <body className={mode}>
      <HomePage mode={mode}/>
      <FormGroup>
        <FormControlLabel control={<Switch onChange={handleModeChange}/>} label={mode ? "Light" : "Dark"} />
      </FormGroup>
    </body>
  )
}

export default App

//Make Dark Mode Button a Component