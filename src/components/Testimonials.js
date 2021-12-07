import React from "react";
import { Container, Card } from "react-bootstrap";

function Testimonials(props) {
    return (
        <Container style={{ marginTop: '100px', marginBottom: '10px'}}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "30px",
                    color: "white",
                    marginBottom: "30px",
                }}
                ref={props.refProp}
            >
                {"<Testimonials/>"}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={{ width: "20rem", padding: "1rem"}}>
                    <Card.Img
                        alt=" Anatoly R. Feedback From Freelancer.com"
                        variant="top"
                        src="https://res.cloudinary.com/kroy963/image/upload/v1638883596/PortFolio/WhatsApp_Image_2021-12-07_at_6.51.22_PM_yu2kab.jpg"
                    />
                    <Card.Title>
                        Anatoly R. Feedback From Freelancer.com
                    </Card.Title>
                </Card>
            </div>
        </Container>
    );
}

export default Testimonials;
