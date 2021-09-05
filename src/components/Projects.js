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
                        CardImg={`${process.env.PUBLIC_URL}/images/CardImg1.jpeg`}
                        CardTitle='Calculatar'
                        CardText="This Is A CAlcularar"
                        SiteUrl="https://kroy-basic-calculator.herokuapp.com"
                        GitUrl="https://github.com/Kroy665/basic-calculator.git"
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
