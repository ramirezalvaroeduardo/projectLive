
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../style/NavBar.css';
import getFAS from './getAwesomeFontThemes';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {showArea} from '../js/general';
import {GetAllParts} from "./getAllParticipants";

let fasArray = getFAS();

function MainMenu( props ) {
    return (
        <Navbar bg="success" expand="lg" variant="dark" className='navbar-custom'>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={fasArray[847]}/>&nbsp;&nbsp;Project Live</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onClick={event => GetAllParts()} >Get_Participants</Nav.Link>
            <Nav.Link onClick={event => showArea('newPart')} >Add_Participants</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
};

export default MainMenu;
