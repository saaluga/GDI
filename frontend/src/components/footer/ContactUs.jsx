import {Container} from "react-bootstrap";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactUs = () =>{
    return(
        <div>
            <Container>
                <h5>Contact Us</h5>
                <hr />
                <p>< FaPhoneSquareAlt /> +256 772 000 000</p>
                <p><FaWhatsappSquare />  +256 772 000 000</p>
                <p><FaFacebook /> Facebook</p>
                <p><MdAttachEmail /> Email</p>
                <p><FaSquareXTwitter /> Twiter</p>
            </Container>
        </div>
    );
}

export default ContactUs;