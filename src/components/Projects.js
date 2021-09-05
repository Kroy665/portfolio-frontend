import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
function ProjectCard(props){
    return(
        <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center', marginTop: '2rem',backgroundColor: '#1f594f' }}>
            <Card.Img variant="top" src={props.CardImg} style={{padding: '5px', borderRadius: '15px'}}/>
            <Card.Body style={{}}>
                <Card.Title style={{fontSize: '30px', color: 'white'}}>{props.CardTitle}</Card.Title>
                <Card.Text style={{fontSize: '15px', color: 'white', fontFamily: 'Helvetica'}}>
                    {props.CardText}
                </Card.Text>
                <Button variant="primary">See Project</Button>
            </Card.Body>
        </Card>
    )
}
function Projects(props) {
    return (
        <Container style={{marginTop: '100px', marginBottom: '10px'}}>
            <div ref={props.refProp} style={{display: 'flex', justifyContent: 'center', fontSize: '30px', color: 'white'}}>
                {'<My Projects/>'}
            </div>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectCard 
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg1.jpeg`}
                        CardTitle='Calculatar'
                        CardText="This Is A CAlcularar" 
                    />
                </Col>
                
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectCard 
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg1.jpeg`}
                        CardTitle='Calculatar'
                        CardText="This Is A CAlcularar" 
                    />
                </Col>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectCard 
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg1.jpeg`}
                        CardTitle='Calculatar'
                        CardText="This Is A CAlcularar" 
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects
