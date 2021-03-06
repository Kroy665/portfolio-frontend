import './App.css';
import React,{useRef,useEffect} from 'react'
import { Navbar, Nav, Container, Card, Button} from 'react-bootstrap';

// import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import MyWords from './components/MyWords'
import Testimonials from './components/Testimonials'
import ReactGA from 'react-ga'

// import {withRouter,Router} from 'react-router-dom'
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYT)
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log(window.location.pathname + window.location.search)
  })

  const projectsPosition = useRef(null)
  const skillsPosition = useRef(null)
  const contactPosition = useRef(null)
  const MyWordsPosition = useRef(null)
  const hiremePosition = useRef(null)
  const testimonialsPosition = useRef(null)

  const projectsClick=()=>{
    projectsPosition.current.scrollIntoView({behavior: "smooth", inline: "nearest"})
  }
  const skillsClick=()=>{
    skillsPosition.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }
  const contactClick=()=>{
    contactPosition.current.scrollIntoView({behavior: "smooth", inline: "nearest"})
  }
  const testimonialsClick=() => {
    testimonialsPosition.current.scrollIntoView({behavior: "smooth", inline: "nearest"}) 
  }
  const MyWordsClick=() => {
    MyWordsPosition.current.scrollIntoView({behavior: "smooth", inline: "nearest"}) 
  }
  const hiremeClick=() => {
    hiremePosition.current.scrollIntoView({behavior: "smooth", inline: "nearest"})
  }
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      {/* <Router> */}
      {/* MainNavbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand >
        <img
          alt=""
          src={`${process.env.PUBLIC_URL}/kroylogo.png`}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
          <b style={{fontFamily:'auto', fontStyle:'italic'}}>Koushik Roy</b>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link onClick={projectsClick}>Projects</Nav.Link>
                <Nav.Link onClick={skillsClick}>Skills</Nav.Link>
                <Nav.Link onClick={testimonialsClick}>Testimonials</Nav.Link>
                <Nav.Link onClick={contactClick}>Contact</Nav.Link>  
                <Nav.Link onClick={MyWordsClick}>MyWords</Nav.Link>      
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>  {/* MainNavbar */}



      {/* About */}
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
            <Button onClick={skillsClick} variant="info" size="lg" active style={{minWidth:"180px"}}>
              See Skills...
            </Button>{' '}
            <Button onClick={hiremeClick} variant="success" size="lg" active style={{minWidth:"180px"}}>
              Hire Me
            </Button>
          </div>
        </Card.ImgOverlay>
      </Card>
      {/* About */}
      <Projects refProp={projectsPosition}/>
      <Skills refProp={skillsPosition}/>
      <Testimonials refProp={testimonialsPosition}/>
      <Contact refProp={{contactPosition,hiremePosition}}/>
      <MyWords refProp={MyWordsPosition}/>
      {/* </Router> */}
    </div>
  );
}

export default App;
