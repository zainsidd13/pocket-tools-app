import { SyntheticEvent } from "react";
import { useLocation } from "react-router-dom";
import { Switch, FormGroup, FormControlLabel, Button } from "@mui/material";

interface NavBarProps {
    mode?: string;
    onModeChange: (newMode: string) => void;
}

function NavBar({mode, onModeChange}: NavBarProps) {
  const location = useLocation();
  const handleModeChange = (e: SyntheticEvent) => {
    e.preventDefault();
    onModeChange(mode ==='light' ? "dark" : "light");
  }

  return (
    <div className="header">
      <div className='my-tools-link'>
          {location.pathname==='/mytools' && <Button variant="text" href='/'>Home</Button>}
          {location.pathname==='/' && <Button variant="text" href='/mytools'>My Tools</Button>}
      </div>
      <div className="dark-mode-button">
        <FormGroup>
            <FormControlLabel control={<Switch onChange={handleModeChange}/>} label={mode==='light' ? "Light" : "Dark"} sx={mode==='dark' ? {color: 'white'} : {color: 'black'}}/>
        </FormGroup>
      </div>
    </div>
  )

}

export default NavBar;