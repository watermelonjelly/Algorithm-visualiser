import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Card1 from "../assets/img/card1.png"
import Card2 from "../assets/img/card2.png"
import Card3 from "../assets/img/card4.jpeg"



function cardsProvider(props) {
    return (
        <CardGroup>
            <Card className="bg-dark text-black m-5">
                <Card.Img variant="top" src={Card1} />
                <Card.ImgOverlay>
                <Card.Title>Meeting My Mentor</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                </Card.ImgOverlay>
                <Card.Footer>
                <small className="text-muted">My experience with my mentor</small>
                </Card.Footer>
            </Card>
            <Card className="bg-dark text-black m-5">
                <Card.Img variant="top" src={Card2} />
                <Card.ImgOverlay>
                <Card.Title>IT roles and responsibilities</Card.Title>
                <Card.Text>
                
                </Card.Text>
                </Card.ImgOverlay>
                <Card.Footer>
                <small className="text-muted">Clear My career Objectives</small>
                </Card.Footer>
            </Card>
            <Card className="bg-dark text-black m-5">
                <Card.Img variant="top" src={Card3} />
                <Card.ImgOverlay>
                <Card.Title>Programming Lanuage and Framework</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                </Card.ImgOverlay>
                <Card.Footer>
                <small className="text-muted">Build fundamental skills</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default cardsProvider;