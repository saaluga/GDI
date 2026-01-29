import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>GDI</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                            <LinkContainer to="/">
                                <NavDropdown.Item>Our Mission And Vision</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Our History</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Our Partners</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Our Leadership</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Our Code Of Conduct</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="What We Do" id="basic-nav-dropdown">
                            <LinkContainer to="">
                                <NavDropdown.Item>Maternal And Child Health</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Surgery Programs</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Scalable Health Systems</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                        <NavDropdown title="Our Impact" id="basic-nav-dropdown">
                            <LinkContainer to="/">
                                <NavDropdown.Item>Key Impact Data</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Research And Insights</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/getinvolved">
                            <Nav.Link>Get Involved</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/patientstory">
                            <Nav.Link>Patient Story</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="News And Report" id="basic-nav-dropdown">
                            <LinkContainer to="/">
                                <NavDropdown.Item>News</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/">
                                <NavDropdown.Item>Annual And Financial Report</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/donate">
                            <Nav.Link>
                                <Button variant="secondary" size='sm'>Donate</Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;