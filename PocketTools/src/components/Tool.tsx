import { SyntheticEvent } from 'react';
import ShareButton from './ShareButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface ToolProps {
    title?: string;
    icon?: React.ElementType;
    link?: string;
    mode?: string;
  }

function Tool({ title = 'To Fill', icon: IconComponent, link, mode}: ToolProps) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;


    const handleFavourite = (e: SyntheticEvent) => {
      e.preventDefault();
      // localStorage.removeItem('favourites');
      const existingData = localStorage.getItem('favourites');
      if (existingData) {
        const newData = JSON.parse(existingData);

        if (newData.includes(title)) {
          const indexToRemove = newData.indexOf(title);
          console.log('removing');
          newData.splice(indexToRemove, 1);
        } else {
          newData.push(title);
        }
          localStorage.setItem('favourites', JSON.stringify(newData));
      } else {
        localStorage.setItem('favourites', JSON.stringify([title]));
      }

      console.log(localStorage.getItem('favourites'));
    };

    return (
    
    <a href={link} target="_blank">
        <div className='tool-card' style={mode==='light' ? {border : '1px solid black'} : { border: `1px solid ${randomColor}` }}>
                <div className='action-icons'>
                  <ShareButton title={title} link={link} mode={mode}/>
                  <a href="#" onClick={handleFavourite}>
                    <StarOutlineIcon sx={{fontSize : 30, color: 'white', marginTop: '-4px'}} />
                  </a>
                </div>
            {IconComponent && <IconComponent sx={{ fontSize: 70, color: 'white' }} className='card-icon' style={mode==='light' ? {color : 'black'} : {color : 'white'}}/>}
            <h2 className='card-title' style={mode==='light' ? {color : 'black'} : {color : 'white'}}>
                {title}
            </h2>
        </div>
    </a>
    )
}

export default Tool;