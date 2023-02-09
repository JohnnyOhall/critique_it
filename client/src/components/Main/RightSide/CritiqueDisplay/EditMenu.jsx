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
            <MenuItem type="radio" value={'#738580'}>Green</MenuItem>
            <MenuItem type="radio" value={'#8b2986'}>purple</MenuItem>
            <MenuItem type="radio" value={'#292573'}>Blue</MenuItem>
          </MenuRadioGroup>
        </SubMenu>
      </Menu>
    </>
  );
};

export default EditMenu;