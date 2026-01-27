import Container from "react-bootstrap/esm/Container"

const Rights =()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div>
            <Container>
                <p>GDI &copy; {currentYear}. All Rights Reserved.</p>
            </Container>
        </div>
    );
}

export default Rights;