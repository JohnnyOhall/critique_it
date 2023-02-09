import { useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu,
    MenuHeader,
    MenuDivider,
    MenuRadioGroup
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const EditMenu = props => {

    const [textColor, setTextColor] = useState('red');
    const [isBold, setBold] = useState(true);
    const [isItalic, setItalic] = useState(true);
    const [isUnderline, setUnderline] = useState(false);

    const menuButton = "https://freeiconshop.com/wp-content/uploads/edd/menu-outline.png"

    return (
      <>
        <Menu menuButton={<MenuButton className="menu-button"><img height="40px" width="40px" src={menuButton}/></MenuButton>}>
          <MenuHeader>Page Options</MenuHeader>

          <SubMenu label="Text color">
            <MenuRadioGroup
              value={textColor}
              onRadioChange={e => setTextColor(e.value)}>
              <MenuItem type="radio" value={'red'}>Red</MenuItem>
              <MenuItem type="radio" value={'green'}>Green</MenuItem>
              <MenuItem type="radio" value={'blue'}>Blue</MenuItem>
            </MenuRadioGroup>
          </SubMenu>

          <SubMenu label="Text style">
            <MenuItem type="checkbox" checked={isBold}
              onClick={e => setBold(e.checked)}>
              Bold
            </MenuItem>
            <MenuItem type="checkbox" checked={isItalic}
              onClick={e => setItalic(e.checked)}>
              Italic
            </MenuItem>
            <MenuItem type="checkbox" checked={isUnderline}
              onClick={e => setUnderline(e.checked)}>
              Underline
            </MenuItem>
          </SubMenu>
        </Menu>

        <div className="sample-text" style={{
          color: textColor,
          fontWeight: isBold ? 'bold' : 'initial',
          fontStyle: isItalic ? 'italic' : 'initial',
          textDecoration: isUnderline ? 'underline' : 'initial'
        }}>Sample text</div>
      </>
    );
}

export default EditMenu;