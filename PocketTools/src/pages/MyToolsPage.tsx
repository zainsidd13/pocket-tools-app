import { useEffect, useState } from "react";
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
        <>
            <h1 className="title" style={mode==='light' ? {color: 'black'} : {color: 'white'}}>My Tools</h1>
            <p className="sub-title">Your personalized pocket</p>
            <div className='tools-body'>
                {favourites.map((dict: MyDictionary, index) => (
                    <MyToolsIcons key={index} title={dict.title} link={dict.link} iconName={dict.iconName} mode={mode}/>
                ))}
            </div>
        </>
    )
}


export default MyToolsPage;