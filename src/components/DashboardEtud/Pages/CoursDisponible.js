import React from 'react'
import Navbar from '../Navbar';
import * as MbIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as Ionicons from 'react-icons/io5';
import Footer from '../../Footer';
import diplome from '../../../Images/diplome.jpg';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Pages.css';
import { dataDigitalBestSeller } from './data';

const CoursDisponible = () => {
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
    <Navbar />
    <div className='coursDispo' style={{marginTop: '200px'}}>
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
    
    
    
    </>
  )
}

export default CoursDisponible;