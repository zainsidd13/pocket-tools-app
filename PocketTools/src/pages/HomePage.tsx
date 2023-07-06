import Tool from "../components/Tool";
import { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import SpeedIcon from '@mui/icons-material/Speed';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import BrushIcon from '@mui/icons-material/Brush';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NavBar from "../components/NavBar";

interface HomeProps {
    mode?: string;
  }

function HomePage({mode}: HomeProps) {
    const [searchValue, setSearchValue] = useState('');

    const filteredTools = [
        { title: 'Internet Speed Test', icon: SpeedIcon, link: 'https://www.speedtest.net/', iconName: 'SpeedIcon' },
        { title: 'Stock Images', icon: ImageSearchIcon, link: 'https://unsplash.com/', iconName: 'ImageSearchIcon' },
        { title: 'Extract Webpage Images', icon: CropOriginalIcon, link: 'https://extract.pics', iconName: 'CropOriginalIcon' },
        { title: 'Infographic Creator', icon: BrushIcon, link: 'https://www.canva.com/', iconName: 'BrushIcon' },
        { title: 'Writing Assistant', icon: SpellcheckIcon, link: 'https://www.grammarly.com/', iconName: 'SpellCheckIcon' },
        { title: 'AI Tool', icon: SmartToyIcon, link: 'https://chat.openai.com/', iconName: 'SmartToyIcon'},
    ].filter((tool) => tool.title.toLowerCase().includes(searchValue.toLowerCase()));
    
    return(
        <>
            <h1 className="title" style={mode==='light' ? {color: 'black'} : {color: 'white'}}>Welcome to Internet Pocket Tools!</h1>
            <p className="sub-title">The source for all your internet needs.</p>
            <div className="search-bar-container">
                <TextField 
                    className="search-bar" 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    sx={mode ==='light' ? { fieldset: { borderColor: 'black' } } : { fieldset: { borderColor: 'white' } }}
                    inputProps={mode === 'light' ? { style: {color: 'black'}} : { style: {color: 'white'}}} 
                    InputLabelProps={mode === 'light' ? {style: { color: 'black' } } : {style: { color: '#fff' } }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>


            <div className='tools-body'>
                {filteredTools.map((tool, index) => (
                    <Tool key={index} title={tool.title} icon={tool.icon} link={tool.link} iconName={tool.iconName} mode={mode}/>
                ))}
            </div>

        </>
    )
}

export default HomePage;