import Tool from './Tool';
import SpeedIcon from '@mui/icons-material/Speed';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import BrushIcon from '@mui/icons-material/Brush';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalculateIcon from '@mui/icons-material/Calculate';
import GroupsIcon from '@mui/icons-material/Groups';

interface MyToolsIconsProps {
    iconName?: string;
    title?: string;
    link?: string;
    mode?: string;
}

function MyToolsIcons({iconName, title, link, mode}: MyToolsIconsProps) {
    switch (iconName) {
        case 'SpeedIcon':
          return <Tool title={title} link={link} icon={SpeedIcon} mode={mode} />;
        case 'CropOriginalIcon':
          return <Tool title={title} link={link} icon={CropOriginalIcon} mode={mode} />;
        case 'ImageSearchIcon':
          return <Tool title={title} link={link} icon={ImageSearchIcon} mode={mode} />;
        case 'BrushIcon':
          return <Tool title={title} link={link} icon={BrushIcon} mode={mode} />;
        case 'SpellcheckIcon':
          return <Tool title={title} link={link} icon={SpellcheckIcon} mode={mode} />;
        case 'SmartToyIcon':
          return <Tool title={title} link={link} icon={SmartToyIcon} mode={mode} />;
        case 'LibraryBooksIcon':
          return <Tool title={title} link={link} icon={LibraryBooksIcon} mode={mode} />;
        case 'AutoAwesomeIcon':
          return <Tool title={title} link={link} icon={AutoAwesomeIcon} mode={mode} />;
        case 'CalculateIcon':
          return <Tool title={title} link={link} icon={CalculateIcon} mode={mode} />;
        case 'GroupsIcon':
          return <Tool title={title} link={link} icon={GroupsIcon} mode={mode} />;
        default:
          return <Tool title={title} link={link} icon={ImageSearchIcon} mode={mode} />;
      }
    }

export default MyToolsIcons;