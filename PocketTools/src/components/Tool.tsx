import ShareIcon from '@mui/icons-material/Share';

interface ToolProps {
    title?: string;
    icon?: React.ElementType;
    link?: string;
    mode?: string
  }

function Tool({ title = 'To Fill', icon: IconComponent, link, mode}: ToolProps) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    return (
    
    <a href={link} target="_blank">
        <div className='tool-card' style={mode ? {border : '1px solid black'} : { border: `1px solid ${randomColor}` }}>
                <div className='share-icon'>
                    <a href="#">
                        <ShareIcon />
                    </a>
                </div>
            {IconComponent && <IconComponent sx={{ fontSize: 70, color: 'white' }} className='card-icon' style={mode ? {color : 'black'} : {color : 'white'}}/>}
            <h2 className='card-title' style={mode ? {color : 'black'} : {color : 'white'}}>
                {title}
            </h2>
        </div>
    </a>
    )
}

export default Tool;