import {Container, Row, Col} from "react-bootstrap";
import ContactUs from "../components/footer/ContactUs";
import Navigate from "../components/footer/Navigate";
import OurPartners from "../components/footer/OurPartners";
import Rights from "../components/footer/Rights";

const Footer = () => {
    return(
        <div className="bg-body-tertiary py-3">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}><Rights /></Col>
                    <Col sm={12} md={6} lg={3}><Navigate /></Col>
                    <Col sm={12} md={6} lg={3}><OurPartners /></Col>
                    <Col sm={12} md={6} lg={3}><ContactUs /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;