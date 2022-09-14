import React from 'react';
import Navigation from '../Navigation';
import python from '../../Images/html10.png';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
// import code1 from '../../Images/code1.jpg';
import code2 from '../../Images/html4.jfif';
import code4 from '../../Images/html11.jfif';
import code5 from '../../Images/html9.jfif';
import html12 from '../../Images/html12.jfif';
import html13 from '../../Images/html13.jfif';
import pub2 from '../../Images/pub_m.jpg';
// import html14 from '../../Images/html14.png';
import html15 from '../../Images/html15.jfif';
import html20 from '../../Images/html20.jfif';
import html21 from '../../Images/html21.jfif';
import html22 from '../../Images/html23.jfif';
import Footer from '../Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from './data';
import './Pages.css';

const publicité = {
    backgroundImage: `url(${pub2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    
}

const Blockchain = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>

        
        <div>
        
        <Navigation/>
        
        <h1 className='text-center ' style={{marginTop: '150px', MarginBottom: '180px', fontFamily: 'Rubik Marker Hatch', color: '#2fa67b' }}>Blockchain </h1>


        {/* <Carousel className='mt-5' style={{marginBottom: '100px'}}>
            <Carousel.Item Interval={8000}>
        <div className='row ms-0 col-xs-12 col-lg-12  justify-content-center  pb-5 pt-5' style={{backgroundColor: '#d6d6d6'}}>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 mb-3'>
            <Card.Img variant="top" src={code5} />
            <Card.Body>
                <Card.Title>Learn HTML5 & CSS3</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>50 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python}  />
            <Card.Body>
                <Card.Title>Learn Javascript</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>35 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={code2} />
            <Card.Body>
                <Card.Title>Learn React.js</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>45 000 Fcfa</Button>
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
                <Button variant="success" className='fw-bold'>25 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        </div>
        </Carousel.Item>
        <Carousel.Item Interval={8000}>
        <div className='row ms-0 col-xs-12 col-lg-12  justify-content-center   pb-5 pt-5' style={{backgroundColor: '#d6d6d6'}}>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python} />
            <Card.Body>
                <Card.Title>Learn Framework js</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>20 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html12} />
            <Card.Body>
                <Card.Title>Learn React Native</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>35 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html13} />
            <Card.Body>
                <Card.Title>Learn Vue.js courses</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>24 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html15} />
            <Card.Body>
                <Card.Title>Learn Vue.js Basics</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>30 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        </div>
        </Carousel.Item>
        </Carousel> */}
        <div className='coursDispo' style={{marginBottom: '100px'}}>
      <Slider {...settings}>
      {dataDigitalBestSeller.map(item=>(
           <div className='cardDispo'>
           <div className='card-top'>
            <img src={item.linkImg} alt={item.title}/>
            <h1>{item.title}</h1>
           </div>
           <div className='card-bottom'>
            <h3> {item.price} </h3>
            <span className="category"> {item.category} </span>
           </div>
         </div>
      ))}
      </Slider>
      
     
    </div>


        
       </div>
       <div className='row justify-content-center pe-3 mb-5'>
                <div className='col-xs-12 col-lg-6' style={publicité} > </div>
                <div className='col-xs-12 col-lg-6 bg-dark text-center ' style={{paddingTop: '120px'}}> <p style={{fontFamily: 'Rubik Dirt', fontSize:'75px', color: '#fff'}}>Decouvrez le Monde Incroyable de la VR !</p> </div>
            </div>


            {/* <Carousel className='mt-5' style={{marginBottom: '100px'}}>
            <Carousel.Item Interval={8000}>
        <div className='row ms-0 col-xs-12 col-lg-12  justify-content-center  pb-5 pt-5' style={{backgroundColor: '#d6d6d6'}}>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 mb-3'>
            <Card.Img variant="top" src={html20} />
            <Card.Body>
                <Card.Title>Learn HTML5 & CSS3</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>50 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html21}  />
            <Card.Body>
                <Card.Title>Learn Javascript</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>35 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html22} />
            <Card.Body>
                <Card.Title>Learn React.js</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>45 000 Fcfa</Button>
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
                <Button variant="success" className='fw-bold'>25 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        </div>
        </Carousel.Item>
        <Carousel.Item Interval={8000}>
        <div className='row ms-0 col-xs-12 col-lg-12  justify-content-center   pb-5 pt-5' style={{backgroundColor: '#d6d6d6'}}>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={python} />
            <Card.Body>
                <Card.Title>Learn Framework js</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>20 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html12} />
            <Card.Body>
                <Card.Title>Learn React Native</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>35 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html13} />
            <Card.Body>
                <Card.Title>Learn Vue.js courses</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>24 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        <Card style={{width: '18rem', paddingLeft: '0', paddingRight: '0'}} className='col-xs-12 col-lg-2 me-3 3 mb-3'>
            <Card.Img variant="top" src={html15} />
            <Card.Body>
                <Card.Title>Learn Vue.js Basics</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='fw-bold'>30 000 Fcfa</Button>
            </Card.Body>
            
        </Card>

        </div>
        </Carousel.Item>
        </Carousel> */}

<div className='coursDispo' style={{marginBottom: '100px'}}>
      <Slider {...settings}>
      {dataDigitalBestSeller.map(item=>(
           <div className='cardDispo'>
           <div className='card-top'>
            <img src={item.linkImg} alt={item.title}/>
            <h1>{item.title}</h1>
           </div>
           <div className='card-bottom'>
            <h3> {item.price} </h3>
            <span className="category"> {item.category} </span>
           </div>
         </div>
      ))}
      </Slider>
      
     
    </div>
           
         <Footer/>
        </>
  )
}

export default Blockchain;