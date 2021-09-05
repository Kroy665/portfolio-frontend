import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
function SkillCard(props) {
    return(
        <Col style={{ margin: '10px'}}> 
            <Card style={{display: 'flex', flexDirection: 'row', backgroundColor: '#5452b3'}}>
                <img 
                    src={props.skillCardImg} 
                    style={{maxWidth: '55px',maxHeight: '55px', padding: '5px', borderRadius: '10px'}}
                    alt='Skill Pic'
                />
                <Card.Body style={{display: 'flex', justifyContent: 'center', color: 'white', fontSize: '15px'}}>{props.skillName}</Card.Body>
            </Card>
        </Col>
    )
}
function Skills(props) {
    return (
        <Container ref={props.refProp} style={{marginTop: '100px', marginBottom: '10px'}}>
            <div  style={{display: 'flex', justifyContent: 'center', fontSize: '30px', color: 'white', marginBottom: '30px'}}>
                {'<My Skills/>'}
            </div>
            <Row>
                
                <SkillCard skillName="C/C++" skillCardImg={`${process.env.PUBLIC_URL}/images/CLogo.png`}/>
                
                <SkillCard skillName='MATLAB' skillCardImg={`${process.env.PUBLIC_URL}/images/Matlab_Logo.png`}/>
                
            </Row>
            <Row>
                
                <SkillCard skillName="JavaScript" skillCardImg={`${process.env.PUBLIC_URL}/images/jsLogo.png`}/>
                
                <SkillCard skillName='NodeJS' skillCardImg={`${process.env.PUBLIC_URL}/images/nodeJsLogo.png`}/>
                
            </Row>
            <Row>
                
                <SkillCard skillName="React" skillCardImg={`${process.env.PUBLIC_URL}/images/reactLogo.png`}/>
            
                <SkillCard skillName='Python' skillCardImg={`${process.env.PUBLIC_URL}/images/pythonLogo.png`}/>
                
            </Row>
            <Row>
                
                <SkillCard skillName="P5 JS" skillCardImg={`${process.env.PUBLIC_URL}/images/p5jsLogo.png`}/>
              
                <SkillCard skillName='MongoDB' skillCardImg={`${process.env.PUBLIC_URL}/images/mongodbLogo.jpg`}/>
                
            </Row>
            <Row>
                
                <SkillCard skillName="Rest API" skillCardImg={`${process.env.PUBLIC_URL}/images/restapiLogo.png`}/>
            
                <SkillCard skillName='Socket.io' skillCardImg={`${process.env.PUBLIC_URL}/images/socketioLogo.jpg`}/>
                
            </Row>
        </Container>
    )
}

export default Skills
