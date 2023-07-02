import Tool from "../components/Tool";
import { useState } from 'react'; 
import SpeedIcon from '@mui/icons-material/Speed';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import BrushIcon from '@mui/icons-material/Brush';
import TextField from '@mui/material/TextField';

function HomePage() {
    const [searchValue, setSearchValue] = useState('');

    const filteredTools = [
        { title: 'Internet Speed Test', icon: SpeedIcon, link: 'https://www.speedtest.net/' },
        { title: 'Stock Images', icon: ImageSearchIcon, link: 'https://unsplash.com/' },
        { title: 'Extract Webpage Images', icon: CropOriginalIcon, link: 'https://extract.pics' },
        { title: 'Infographic Creator', icon: BrushIcon, link: 'https://www.canva.com/' },
    ].filter((tool) => tool.title.toLowerCase().includes(searchValue.toLowerCase()));
    
    
    return(
        <>
            <h1 className="title">Welcome to Internet Pocket Tools!</h1>
            <p className="sub-title">The source for all your internet needs.</p>
            <div className="search-bar-container">
                <TextField 
                    className="search-bar" 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    sx={{fieldSet : {borderColor: 'white'}}} 
                    inputProps={{ style: {color: 'white'}}} 
                    InputLabelProps={{style: { color: '#fff' } }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>


            <div className='tools-body'>
                {filteredTools.map((tool, index) => (
                    <Tool key={index} title={tool.title} icon={tool.icon} link={tool.link} />
                ))}
            </div>

        </>
    )
}

export default HomePage;