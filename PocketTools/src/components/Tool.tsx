import ShareButton from './ShareButton';
import FavouriteButton from './FavouriteButton';

interface ToolProps {
    title?: string;
    icon?: React.ElementType;
    link?: string;
    mode?: string;
    iconName?: string;
  }

function Tool({ title = 'To Fill', icon: IconComponent, link, mode, iconName}: ToolProps) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    return (
    
    <a href={link} target="_blank">
        <div className='tool-card' style={mode==='light' ? {border : '1px solid black'} : { border: `1px solid ${randomColor}` }}>
                <div className='action-icons'>
                  <ShareButton title={title} link={link} mode={mode}/>
                  <FavouriteButton title={title} link={link} mode={mode} iconName={iconName}/>
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