import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">GDI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Our Mission And Vision</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Our History</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Our Partners</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Our Leadership</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Our Code Of Conduct</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="What We Do" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Maternal And Child Health</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Surgery Programs</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Scalable Health Systems</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Our Impact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Key Impact Data</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Research And Insights</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Get Involved</Nav.Link>
                        <Nav.Link href="#link">Patient Story</Nav.Link>
                        <NavDropdown title="News And Report" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Annual And Financial Report</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <Nav.Link href="#link"><Button variant="secondary" size='sm'>Donate</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;