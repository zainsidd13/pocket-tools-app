import { useState, useEffect, SyntheticEvent } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';

interface FavouriteButtonProps {
    title?: string;
    mode?: string;
    link?: string;
    iconName?: string;
}


function FavouriteButton ({title, mode, link, iconName}: FavouriteButtonProps) {
    const [isFavourited, setFavourited] = useState(false);
    const data = {'title': title, 'link': link, 'iconName': iconName};
    interface MyDictionary {
      title: string;
      link: string;
      iconName: string;
    }

    useEffect(() => {
      const existingData = localStorage.getItem('favourites');

      if (existingData) {
        const newData = JSON.parse(existingData);

        newData.map((dict: MyDictionary) => {
          if (title === dict.title) {
            setFavourited(true);
          }

        });

      } else { // if 'favourites' does not exist in storage, create it
        localStorage.setItem('favourites', JSON.stringify([]));
      }
    }, []);


    const handleFavourite = (e: SyntheticEvent) => {
      e.preventDefault();

      // localStorage.removeItem('favourites'); // for testing purposes - do not uncomment
      const existingData = localStorage.getItem('favourites');
      if (existingData) {
        const newData = JSON.parse(existingData);


        let indexToRemove = 0;
        newData.map((dict: MyDictionary, index: number) => {
          if (title === dict.title) { // if 'is favourited'
            newData.splice(index, 1);
            setFavourited(false);

            indexToRemove = index
          }

          return null; // Explicitly return a value (null in this case)
        });

        if (!isFavourited && indexToRemove === 0) {
          newData.push(data);
          setFavourited(true);
        }

        localStorage.setItem('favourites', JSON.stringify(newData)); //change array back to json store in localstorage
      } 
      console.log(localStorage.getItem('favourites'));
    };

    return (
        <a href="#" onClick={handleFavourite}>
            {isFavourited && <StarRateIcon sx={mode === 'light' ? {fontSize : 30, color: 'black', marginTop: '-4px'} : {fontSize : 30, color: 'white', marginTop: '-4px'}} />}
            {!isFavourited && <StarOutlineIcon sx={mode === 'light' ? {fontSize : 30, color: 'black', marginTop: '-4px'} : {fontSize : 30, color: 'white', marginTop: '-4px'}} />}
        </a>

    )
}

export default FavouriteButton;