import ShareIcon from '@mui/icons-material/Share';

interface ShareButtonProps {
    title? : string;
    link? : string;
    mode? : string;
}


function ShareButton({title, link, mode}: ShareButtonProps) {
    const handleShareClick = async () => {
        try {
          if (navigator.share) {
            await navigator.share({
              title: 'Share Demo',
              text: title,
              url: link
            });
          } else {
            console.log('Web Share API not supported.');
          }
        } catch (error) {
          console.error('Error sharing:', error);
        }
      };

    return (
        <a href="#" onClick={handleShareClick}>
            <ShareIcon sx={mode==='light' ? {color: 'black' } : {color: 'white'}}/>
        </a>
    )
}

export default ShareButton;