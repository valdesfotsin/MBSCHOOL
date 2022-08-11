import React from 'react';
import Navigation from '../Navigation';
import python from '../../Images/python1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
// import code1 from '../../Images/code1.jpg';
import code2 from '../../Images/code2.jpg';
import code4 from '../../Images/secretaire.jpg';
import code5 from '../../Images/code5.jpeg';
const DevWeb = () =>{
    return(
        <>
        <Navigation  />

        <h1 className='text-center' style={{marginTop: '150px', MarginBottom: '80px' , fontFamily: 'FredokaOne'}}>Nos Differents Cours </h1>
        

        <Carousel>
            <Carousel.Item interval={3000}>
        <div className='row col-xs-12 col-lg-12  justify-content-center  pb-5 pt-5' style={{backgroundColor: '#d6d6d6'}}>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 mb-3'>
            <Card.Img variant="top" src={code5} />
            <Card.Body>
                <Card.Title>Learn HTML5 & CSS3</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success">50 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python}  />
            <Card.Body>
                <Card.Title>Learn Python</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success">35 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={code2} />
            <Card.Body>
                <Card.Title>Learn Digital Marketing</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success">45 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={code4} />
            <Card.Body>
                <Card.Title>Learn SQL</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success">25 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <div className='row col-xs-12 col-lg-12  justify-content-center   pb-5 pt-5' style={{backgroundColor: '#d6d6d6'}}>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python} />
            <Card.Body>
                <Card.Title>Learn Python</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python} />
            <Card.Body>
                <Card.Title>Learn Python</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python} />
            <Card.Body>
                <Card.Title>Learn Python</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python} />
            <Card.Body>
                <Card.Title>Learn Python</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            
        </Card>

        </div>
        </Carousel.Item>
        </Carousel>
        </>
    )
}

export default DevWeb;