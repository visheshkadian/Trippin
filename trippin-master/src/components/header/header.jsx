import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';



import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    Collapse,
    DropdownItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';



import ContactsIcon from '@material-ui/icons/Contacts';
import MoreIcon from '@material-ui/icons/More';
import PersonIcon from '@material-ui/icons/Person';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/

import logolighticon from '../../assets/images/logo-light-icon.png';

import logolighttext from '../../assets/images/logo-light-text.png';

import styles from "assets/scss/style.css";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: red 
    },
  }));

const Header = () => {

    const classes = useStyles();
    const classes2 = useStyles2();

   

    return (
        <header className="topbar navbarbg" data-navbarbg="skin1">
            <Navbar className="top-navbar" dark expand="md">
            <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <b>TRIPPIN</b>
                        
                    </NavbarBrand>
                <Collapse className="navbarbg" navbar data-navbarbg="skin1" >
                
                    <Nav className="ml-auto float-right" navbar>
                    
                    
                        <NavItem>
                            <a href="link" className="btn btn-danger mr-2" style={{ marginTop: '15px' }}>Create Blog</a>
                        </NavItem>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="pro-pic">
                                
                                <PersonIcon/>
                            </DropdownToggle>
                            <DropdownMenu right className="user-dd">
                                <DropdownItem>
                                    <i className="ti-wallet mr-1 ml-1" /> Help
                  </DropdownItem>
                                <DropdownItem>
                                    <i className="ti-email mr-1 ml-1" /> About Us
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/login">
                                    <i className="fa fa-power-off mr-1 ml-1" /> Login
                  </DropdownItem>
                                <DropdownItem divider />
                                <Button
                                    color="success"
                                    className="btn-rounded ml-3 mb-2 mt-2"
                                    href="/profile"
                                >
                                    View Profile
                  </Button>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
