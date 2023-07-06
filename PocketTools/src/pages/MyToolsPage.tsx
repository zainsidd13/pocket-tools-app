import { useEffect, useState } from "react";
import Tool from "../components/Tool";
import SpeedIcon from '@mui/icons-material/Speed';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import BrushIcon from '@mui/icons-material/Brush';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface MyToolsPage {
    mode?: string;
}

function MyToolsPage({mode}: MyToolsPage) {
    const [favourites, setFavourites] = useState([]);


    interface MyDictionary {
        title: string;
        link: string;
        iconName: string;
      }

    useEffect(() => {
        const existingData = localStorage.getItem('favourites');
        if (existingData) {
            setFavourites(JSON.parse(existingData));
            // console.log(favourites);
        }
    }, []);

    return (
        <div className='tools-body'>
            {favourites.map((dict: MyDictionary, index) => (
                <Tool key={index} title={dict.title} link={dict.link} iconName={dict.iconName} mode={mode}/>
            ))}
        </div>
    )
}


export default MyToolsPage;