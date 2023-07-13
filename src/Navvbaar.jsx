import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navvbaar.css'

function Navvbaar(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className='Navvbar'>
                <Container className='conta'> 
                    <Navbar.Brand href="#home">ShivaKumar Portfolio</Navbar.Brand>
                    <Nav className="me-auto" style={{ position: 'relative', left: '650px' }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#clr">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#my_edu">Education</Nav.Link>
                        <Nav.Link href="#card">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}
export default Navvbaar