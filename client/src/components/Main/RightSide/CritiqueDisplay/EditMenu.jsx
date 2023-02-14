import { Menu, MenuItem, MenuButton, SubMenu, MenuHeader, MenuRadioGroup } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const EditMenu = props => {

  const menuButton = "https://freeiconshop.com/wp-content/uploads/edd/menu-outline.png"

  return (
    <>
      <Menu menuButton={
        <MenuButton className="menu-button">
          <img height="40px" width="40px" src={menuButton}/>
        </MenuButton>
      }>
        <MenuHeader>Page Options</MenuHeader>
        <SubMenu label="Page Colour">
          <MenuRadioGroup
            value={ props.pageInfo }
            onRadioChange={e => props.setPageInfo({...props.pageInfo, color: e.value})}
          >
            <MenuItem type="radio" value={'#94C595'} style={{backgroundColor: '#94C595'}}>Celadon</MenuItem>
            <MenuItem type="radio" value={'#C8ADC0'} style={{backgroundColor: '#C8ADC0'}}>Thistile</MenuItem>
            <MenuItem type="radio" value={'#574F2A'} style={{backgroundColor: '#574F2A'}}>Drab Brown</MenuItem>
            <MenuItem type="radio" value={'#F8C7CC'} style={{backgroundColor: '#F8C7CC'}}>Tea Rose</MenuItem>
            <MenuItem type="radio" value={'#F2DDA4'} style={{backgroundColor: '#F2DDA4'}}>Vanilla</MenuItem>
            <MenuItem type="radio" value={'#A3C4BC'} style={{backgroundColor: '#A3C4BC'}}>Ash Grey</MenuItem>
            <MenuItem type="radio" value={'#847996'} style={{backgroundColor: '#847996'}}>MountBatten</MenuItem>
            <MenuItem type="radio" value={'#2F6690'} style={{backgroundColor: '#2F6690'}}>Lapis Lazuli</MenuItem>
            <MenuItem type="radio" value={'#3A7CA5'} style={{backgroundColor: '#3A7CA5'}}>Cerulean</MenuItem>
            <MenuItem type="radio" value={'#A44A3F'} style={{backgroundColor: '#A44A3F'}}>Chestnut</MenuItem>
          </MenuRadioGroup>
        </SubMenu>
      </Menu>
    </>
  );
};

export default EditMenu;