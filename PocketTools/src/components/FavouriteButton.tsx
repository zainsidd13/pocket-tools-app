import { useState } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { SyntheticEvent } from 'react';

interface FavouriteProps {
    title?: string;
    icon?: React.ElementType;
    link?: string;
    mode?: string
  }
  
// interface Favourite {
//     title: string | undefined;
//     link: string | undefined;
//     mode: string | undefined;
// }
function FavouriteButton({title='Something', link, mode}: FavouriteProps) {
    const [favourites, setFavourites] = useState<string[]>([]);

    const handleFacourite = (e: SyntheticEvent) => {
        e.preventDefault();
        const newFavourite = title;
        setFavourites((prevFavourites) => [...prevFavourites, title]);
        console.log([...favourites, newFavourite]);
    };

    return (
        <a href="#" onClick={handleFacourite}>
            <StarOutlineIcon sx={{fontSize : 30, color: 'white', marginTop: '-4px'}} />
        </a>
    )
}

export default FavouriteButton;