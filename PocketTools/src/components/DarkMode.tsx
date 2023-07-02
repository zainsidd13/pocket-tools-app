import { SyntheticEvent } from "react";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";

interface DarkModeProps {
    mode?: string;
    onModeChange: (newMode: string) => void;
}

function DarkMode({mode, onModeChange}: DarkModeProps) {
  const handleModeChange = (e: SyntheticEvent) => {
    e.preventDefault();
    onModeChange(mode ? "" : "light");
  }

  return (
    <FormGroup>
        <FormControlLabel control={<Switch onChange={handleModeChange}/>} label={mode ? "Light" : "Dark"} />
    </FormGroup>
  )

}

export default DarkMode;