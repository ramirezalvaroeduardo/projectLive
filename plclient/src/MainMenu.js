
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'style/NavBar.css';
import getFAS from './getAwesomeFontThemes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let fasArray = getFAS();
let boxArray=[];

function refreshScreen( event ) {
    event.preventDefault();
// TODO : Place to grab list of Candidates 
    window.location.reload();
}

function showCandidateForm( event ) {
    event.preventDefault();
    document.querySelector( ".MatrixBox" ).style.display = "none";
    document.querySelector( ".PlayerForm" ).style.display = "block";
}


function MainMenu( props ) {
    boxArray=props.squareCont;
    return (
        <Navbar bg="success" expand="lg" variant="dark" className='navbar-custom'>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={fasArray[847]}/>&nbsp;&nbsp;Project Live</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onClick={event => refreshScreen( event )}>Home</Nav.Link>
            <Nav.Link onClick={event => showCandidateForm( event )} href="#AddPlayer">Add Candidate</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
};

export default MainMenu;