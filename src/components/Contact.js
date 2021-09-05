import axios from 'axios';
import React,{useState, useRef,useEffect} from 'react'
import { Form,
    Button, 
    Container, 
    Card, 
    ListGroupItem, 
    ListGroup, 
    Row, 
    Col } from 'react-bootstrap';
import { CheckLg } from 'react-bootstrap-icons';
import Spinner from 'react-bootstrap/Spinner'
import ReCAPTCHA from 'react-google-recaptcha'


function Contact(props) {
    const [errors,setErrors]=useState('no errors');
    useEffect(() => {
        console.log("Errors: ",errors)
    }, [errors])
    const [validName, setValidName] = useState('Required')
    const [validEmail, setValidEmail] = useState('Required')
    const [validMessage, setValidMessage] = useState('Required')
    const [validData, setValidData] = useState('')
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
        token: '',
    })
    const reRef = useRef();

    const onNameChange=(e)=>{
        // setName(e.target.value)
        const newData = {...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
        if(e.target.value!==""){
            setValidName('')
        }else if(e.target.value===""){
            setValidName('Required')
        }
    }
    const onEmailChange=(e)=>{
        // setEmail(e.target.value)
        const newData = {...data };
        newData[e.target.name] = e.target.value;
        setData(newData); 
        if(e.target.value!==""){
            setValidEmail('')
        }else if(e.target.value===""){
            setValidEmail('Required')
        }
    }
    const onMessageChange=(e)=>{
        // setMessage(e.target.value)
        const newData = {...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
        if(e.target.value!==""){
            setValidMessage('')
        }else if(e.target.value===""){
            setValidMessage('Required')
        }
    }
    const onCaptchaClick = async (e) => {
        const captchaToken = await reRef.current.getValue();
        const newData = {...data };
        newData['token'] = captchaToken;
        setData(newData);
        
        console.log(captchaToken)
    }

    const [send, setSend] = useState(false)
    const [sending, setSending] = useState(false)
    const onSubmit=async (e)=>{
        e.preventDefault();
        setSending(true);
        if(validName==='' && validEmail==='' && validMessage===''){
            console.log(data)
            try {
                await axios.post(`${process.env.REACT_APP_APIS}/api/hireme`,data)
                .then((res)=>{
                    // console.log(res)
                    try {
                        if(res.data.success) {
                            setSending(false)
                            setSend(true)
                            setData({
                                name: '',
                                email: '',
                                message: '',
                                token: '',
                            })
                            setValidData('')
                            reRef.current.reset();
                        }
                    } catch (error) {
                        // console.log(error)
                        setErrors(error)
                    }
                    
                    
                })
            } catch (error) {

                // console.log(error.message)
                setErrors(error)
                if(error.message==='Request failed with status code 422'){
                    setValidData('Enter Valid Data...')
                }
            }
            
        }

    }
    
    function MessageSend(props) {
        if(sending){
            return(
                <Spinner animation="border" variant="light" style={{margin: "2px"}} />
            )
        }else if(send){
            return(
                <CheckLg style={{margin: '10px', color: 'white'}}/>
            )
        }else{
            return(
                <p></p>
            )
            
        }
        
    }

    function ValidNameRequire(props) {
        if(validName===''){
            return(
                <p></p>
            )
        }else{
            return(
                <p style={{color: 'red'}}>*Required</p>
            )
        }
    }
    function ValidEmailRequire(props) {
        if(validEmail ===''){
            return(
                <p></p>
            )
        }else{
            return(
                <p style={{color: 'red'}}>*Required</p>
            )
        }
    }
    function ValidMessageRequire(props) {
        if(validMessage===''){
            return(
                <p></p>
            )
        }else{
            return(
                <p style={{color: 'red'}}>*Required</p>
            )
        }
    }
    function ValidDataRequire(props) {
        if(validData===''){
            return(
                <p></p>
            )
        }else{
            return(
                <p style={{color: 'red'}}>*Enter Valid Data</p>
            )
        }
    }
    

    return (
        <Container style={{marginTop: '100px', marginBottom: '10px'}}>
            <div ref={props.refProp.contactPosition} style={{
                display: 'flex', 
                justifyContent: 'center', 
                fontSize: '30px', 
                color: 'white',
                marginBottom: '50px'}}
            >
                {'<My Details and Contact/>'}
            </div>
            <Row style={{display: 'flex',justifyContent: 'space-around'}}>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/myPic.jpg`} />
                        <Card.Body>
                            <Card.Title>Koushik Roy</Card.Title>
                            <Card.Text>
                            Dhupguri, Jalpaiguri,
                            West Bengal-735210,
                            India
                            </Card.Text>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><b>Email:</b> kroy963@gmail.com</ListGroupItem>
                            <ListGroupItem><b>Phone:</b> +91 77975 66023</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://www.facebook.com/kroythe.loverboy">Facebook</Card.Link>
                            <Card.Link href="https://www.instagram.com/koushik5316">Instagram</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{display: 'flex', justifyContent: 'center', width: '35%'}}>
                    <Form ref={props.refProp.hiremePosition} onSubmit={onSubmit}> 
                    
                        <Form.Text style={{fontSize: '35px', color: 'white',display: 'flex', justifyContent: 'center'}}>
                            Hire Me... <br/>
                        </Form.Text>
                        <Form.Text style={{fontSize: '15px', color: 'white',display: 'flex', justifyContent: 'center'}}>
                            Please Text me a message by Email, Phone or Fill up the form...
                        </Form.Text>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color: 'white', fontSize: '22px'}}>Name:</Form.Label>
                            <Form.Control onChange={onNameChange} value={data.name} name="name" type="text" placeholder="Enter Name..."/>
                            <ValidNameRequire/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label style={{color: 'white', fontSize: '22px'}}>Email Id:</Form.Label>
                            <Form.Control onChange={onEmailChange} value={data.email} name="email" type="email" placeholder="name@example.com" />
                            <ValidEmailRequire/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{color: 'white', fontSize: '22px'}}>Message:</Form.Label>
                            <Form.Control onChange={onMessageChange} value={data.message} name="message" as="textarea" rows={6} />
                            <ValidMessageRequire/>
                            <ValidDataRequire/>
                        </Form.Group>
                        <ReCAPTCHA 
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            size="normal"
                            ref={reRef}
                            onChange={onCaptchaClick}
                            />
                        <div style={{display: 'flex'}}>
                            <Button as="input" type="submit" value="Submit" />
                            <MessageSend/>
                        </div>
                        
                    </Form>
                    
                </Col>
            </Row>
            
        </Container>
    )
}

export default Contact
