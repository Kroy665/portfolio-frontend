import React from "react";
import { Card, Button} from 'react-bootstrap';

function About() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img 
        src={`${process.env.PUBLIC_URL}/images/cardpic.png`} 
        alt="Card image" 
        style={{
          height:480, 
        }} 
      />
      <Card.ImgOverlay style={{marginTop: "55px", marginLeft: "0px"}}>
        <Card.Title style={{display: 'flex', justifyContent: 'center', fontSize: "40px"}}>
          Are You Looking For A Web Developer?
        </Card.Title>
        <Card.Text style={{display: 'flex', justifyContent: 'center', fontSize: "22px"}}>
          Hi, I'am Koushik Roy a Web Developer & Programmer. I makes Web Apps usually with MERN
        </Card.Text>
        <div style={{display: 'flex', justifyContent: "space-around", marginTop: '180px'}}>
          <Button variant="info" size="lg" active style={{minWidth:"180px"}}>
            See Skills...
          </Button>{' '}
          <Button variant="success" size="lg" active style={{minWidth:"180px"}}>
            Hire Me
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
export default About