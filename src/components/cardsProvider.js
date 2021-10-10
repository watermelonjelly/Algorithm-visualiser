import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Card1 from "../assets/img/card1.png";
import Card2 from "../assets/img/card2.png";
import Card3 from "../assets/img/card3.jpg";
import Card4 from "../assets/img/card4.jpg";
import Card5 from "../assets/img/card5.png";
import Card6 from "../assets/img/card6.jpg";


function cardsProvider(props) {
    return (
        <Container>
            <Row xs={1} md={3} className="g-3">
                <Col>
                    <Card className="bg-dark text-white m-4">
                        <Card.Img variant="top" src={Card1} />
                        <Card.Body>
                        <Card.Title>Meeting My Mentor</Card.Title>
                        <Card.Text>
                            It is truly an honour to be mentored by Marc who is a distinguished software engineer, he shared his expertise enthusiastically.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-dark text-white m-4">
                        <Card.Img variant="top" src={Card2} />
                        <Card.Body>
                        <Card.Title>IT roles and responsibilities</Card.Title>
                        <Card.Text>
                            My mentor explains the different roles in IT area and their responsibilities which gives me a deep understanding of the industry.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-dark text-white m-4">
                        <Card.Img variant="top" src={Card3} />
                        <Card.Body>
                        <Card.Title>Programming Lanuage</Card.Title>
                        <Card.Text>
                            We talk about the popular technology used in the really world and my mentor provides useful advices for my furture learning.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-3">
                <Col>
                    <Card className="bg-dark text-white m-4">
                        <Card.Img variant="top" src={Card4} />
                        <Card.Body>
                        <Card.Title>Expand Network</Card.Title>
                        <Card.Text>
                            My network is extended not only to my mentor but also to other mentees and Cisco employees.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-dark text-white m-4">
                        <Card.Img variant="top" src={Card5} />
                        <Card.Body>
                        <Card.Title>Career Objectives</Card.Title>
                        <Card.Text>
                            My mentor helps me find my career goals, explores my strengths and talents to build my confidence.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-dark text-white m-4">
                        <Card.Img variant="top" src={Card6}/>
                        <Card.Body>
                        <Card.Title>Build fundamental skills</Card.Title>
                        <Card.Text>
                            The most valuable treasure I gained is being inspired and encouraged to keep continuous learning.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default cardsProvider;
