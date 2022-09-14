import React from 'react'
import Navbar from '../Navbar';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import Footer from '../../Footer';

const Ressources = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center ' style={{color: 'black', marginTop:"100px"}}>Ressources</h1>
    <div className='cours d-flex justify-content-center col-xs-12 col-lg-12 row  mx-auto ' style={{marginTop: '80px' , marginBottom: '200px'}}>
        
          <div className='col-xs-12 col-lg-3 outils  mb-3 '>
            <GiIcons.GiTeacher className='icons mb-3 mt-3' style={{fontSize: '50px'}}/>
            <h4 className='text-center mb-5'>Videos </h4>
            <p className='text-center px-2'>Recevez un accompagnement sur mesure de la part de nos Experts qui travaillent sur MbSchool. Alors qu'attendez-vous pour nous rejoindre et recevoir des critiques et suggestions de nos experts. </p>
          </div>
          <div className='col-xs-12 col-lg-3 outils  mb-3'>
            <BiIcons.BiMessageAltEdit className='icons mb-3 mt-3 ' style={{fontSize: '50px'}}/>
            <h4 className='text-center mb-5'>Statistique </h4>
            <p className='text-center px-2 '>Recevez un accompagnement sur mesure de la part de nos Experts qui travaillent sur MbSchool. Alors qu'attendez-vous pour nous rejoindre et recevoir des critiques et suggestions de nos experts. </p>
          </div>
          <div className='col-xs-12 col-lg-3 outils mb-3'>
            <MdIcons.MdOutlineHelp className='icons mb-3 mt-3' style={{fontSize: '50px'}}/>
            <h4 className='text-center mb-5'>Coupons et Lot </h4>
            <p className='text-center px-2'>Recevez un accompagnement sur mesure de la part de nos Experts qui travaillent sur MbSchool. Alors qu'attendez-vous pour nous rejoindre et recevoir des critiques et suggestions de nos experts. </p>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default Ressources;