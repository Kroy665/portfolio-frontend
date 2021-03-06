import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';

function MyWords(props) {
    return (
        <Container >
            <div 
                style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    fontSize: '30px', 
                    color: 'white', 
                    marginBottom: '30px'
                }}
                ref={props.refProp}
            >
                {'<My Words/>'}
            </div>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                
                <Col style={{border: '3px solid #111', minWidth: '300px'}}>
                    <p style={{fontSize: '20px', color: 'white', textAlign: 'justify'}}>
                    To take any sort of challenging job commensurate with any
                    ability and knowledge to perform it successfully would more than
                    eager to shoulder responsibilities, which would broaden my
                    knowledge and scope for future development. I am able to work on
                    own initiative or as a part of a team and can deal with my duties
                    competently.
                    </p>
                </Col>
                <Col style={{border: '3px solid #111', minWidth: '300px'}}>
                    <p style={{fontSize: '20px', color: 'white', textAlign: 'justify'}}>
                    <b>Hi,</b> I am Koushik Roy. I have done B.Sc And M.Sc in Applied Mathematics from 
                    University of Burdwan. At University I learn C/C++ and MATLAB, and the other languages
                    are salf taught. Now I am a full-time programmer for Upwork and Freelancer.com. <b>Thank you for visiting my website.</b>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default MyWords
