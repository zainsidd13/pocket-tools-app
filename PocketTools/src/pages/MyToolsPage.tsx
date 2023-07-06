import { useEffect, useState } from "react";
import Tool from "../components/Tool";
import MyToolsIcons from "../components/MyToolsIcons";

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
                <MyToolsIcons key={index} title={dict.title} link={dict.link} iconName={dict.iconName} mode={mode}/>
            ))}
        </div>
    )
}


export default MyToolsPage;