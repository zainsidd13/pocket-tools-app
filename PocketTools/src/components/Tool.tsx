import ShareIcon from '@mui/icons-material/Share';

interface ToolProps {
    title?: string;
    icon?: React.ElementType;
    link?: string
  }

function Tool({ title = 'To Fill', icon: IconComponent, link}: ToolProps) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    return (
    
    <a href={link} target="_blank">
        <div className='tool-card' style={{ border: `1px solid ${randomColor}` }}>
            <div className='share-icon'>
                <ShareIcon />
            </div>
            {IconComponent && <IconComponent sx={{ fontSize: 70, color: 'white' }} className='card-icon' />}
            <h2 className='card-title'>
                {title}
            </h2>
        </div>
    </a>
    )
}

export default Tool;