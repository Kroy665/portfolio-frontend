import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
function ProjectCard(props){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    // https://kroy-basic-calculator.herokuapp.com/
    // https://github.com/Kroy665/basic-calculator.git
    return(
        <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center', marginTop: '2rem',backgroundColor: '#1f594f' }}>
            <Card.Img variant="top" src={props.CardImg} style={{padding: '5px', borderRadius: '15px'}}/>
            <Card.Body style={{}}>
                <Card.Title style={{fontSize: '30px', color: 'white'}}>{props.CardTitle}</Card.Title>
                <Card.Text style={{fontSize: '15px', color: 'white', fontFamily: 'Helvetica'}}>
                    {props.CardText}
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Button onClick={() => openInNewTab(props.SiteUrl)} variant="success">See Project</Button>
                <Button onClick={() => openInNewTab(props.GitUrl)} variant="info">Goto Github</Button>
                </div>
                
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
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg2.png`}
                        CardTitle='Auth Route Test FrontEnd'
                        CardText="This is a Register and Login test app created by React. ,"
                        SiteUrl="https://auth-route-test.herokuapp.com"
                        GitUrl="https://github.com/Kroy665/auth-route-test"
                    />
                </Col>
                
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectCard 
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg3.png`}
                        CardTitle='Auth Route Test Backend'
                        CardText="This is created with NodeJs, Express, MongoDB, Redis, bcrypt. " 
                        SiteUrl="https://auth-routh-test-backend.herokuapp.com"
                        GitUrl="https://github.com/Kroy665/auth-route-test-backend"
                    />
                </Col>

                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectCard 
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg4.png`}
                        CardTitle='Project Portfolio'
                        CardText="This is the project for my Portfolio."
                        SiteUrl="https://kroy-portfolio-frontend.herokuapp.com"
                        GitUrl="https://github.com/Kroy665/portfolio-frontend"
                    />
                </Col>

                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectCard 
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg1.jpeg`}
                        CardTitle='Calculatar'
                        CardText="This Is A CAlcularar" 
                        SiteUrl="https://kroy-basic-calculator.herokuapp.com"
                        GitUrl="https://github.com/Kroy665/basic-calculator.git"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects
