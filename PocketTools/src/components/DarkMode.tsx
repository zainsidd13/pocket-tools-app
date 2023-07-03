import { SyntheticEvent } from "react";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";

interface DarkModeProps {
    mode?: string;
    onModeChange: (newMode: string) => void;
}

function DarkMode({mode, onModeChange}: DarkModeProps) {
  const handleModeChange = (e: SyntheticEvent) => {
    e.preventDefault();
    onModeChange(mode ==='light' ? "dark" : "light");
  }

  return (
    <FormGroup>
        <FormControlLabel control={<Switch onChange={handleModeChange}/>} label={mode==='light' ? "Light" : "Dark"} sx={mode==='dark' ? {color: 'white'} : {color: 'black'}}/>
    </FormGroup>
  )

}

export default DarkMode;