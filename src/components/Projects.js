import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
function ProjectCard(props) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    // https://kroy-basic-calculator.herokuapp.com/
    // https://github.com/Kroy665/basic-calculator.git
    return (
        <Card
            style={{
                width: "18rem",
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                backgroundColor: "#1f594f",
            }}
        >
            <Card.Img
                variant="top"
                src={props.CardImg}
                style={{ padding: "5px", borderRadius: "15px" }}
            />
            <Card.Body style={{}}>
                <Card.Title style={{ fontSize: "30px", color: "white" }}>
                    {props.CardTitle}
                </Card.Title>
                <Card.Text
                    style={{
                        fontSize: "15px",
                        color: "white",
                        fontFamily: "Helvetica",
                    }}
                >
                    {props.CardText}
                </Card.Text>
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <Button
                        onClick={() => openInNewTab(props.SiteUrl)}
                        variant="success"
                    >
                        See Project
                    </Button>
                    <Button
                        onClick={() => openInNewTab(props.GitUrl)}
                        variant="info"
                    >
                        Goto Github
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
function Projects(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjectsData = async () => {
            try {
                await axios
                    .get(`${process.env.REACT_APP_APIS}api/get-projects`)
                    .then(
                        (res) => {
                            setProjects(res.data);
                            console.log(res.data);
                        },
                        (error) => {
                            alert(error.message);
                        }
                    );
            } catch (error) {
                alert(error.message);
            }
        };
        getProjectsData();
    }, []);
    return (
        <Container style={{ marginTop: "100px", marginBottom: "10px" }}>
            <div
                ref={props.refProp}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "30px",
                    color: "white",
                }}
            >
                {"<My Projects/>"}
            </div>
            <Row>
                {projects.map((project, index) => {
                    return (
                        <Col
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ProjectCard
                                CardImg={project.img}
                                CardTitle={project.cardTitle}
                                CardText={project.cardText}
                                SiteUrl={project.siteUrl}
                                GitUrl={project.gitUrl}
                            />
                        </Col>
                    );
                })}

            </Row>
        </Container>
    );
}

export default Projects;
