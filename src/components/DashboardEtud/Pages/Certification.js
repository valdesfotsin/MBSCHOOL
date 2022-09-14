import React from 'react'
import Footer from '../../Footer';
import Navbar from '../Navbar';
import pub1 from '../../../Images/diplome2.jpg';


const  pub22 = {
      backgroundImage: `url(${pub1})`,
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'center',
      Width: '100vh'
      }

const Certification = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center mb-5' style={{color: 'black', marginTop:"100px"}}>Obtenez Votre Certificat de Reussite !</h1>
    <div className='cours col-xs-12 col-lg-12 d-flex justify-content-center'>
       
        <div className='col-xs-12 col-lg-6 ' style={pub22} id='com1'>
            {/* <img src={pub1} alt="pub1" width='100%' style={{height: '100vh', width: '100vh'}}/> */}
        </div> 

        

    </div>
    <div className="col-xs-12 col-lg-12 d-flex justify-content-center">
    <div className="col-xs-12 col-lg-6 mt-5">
          <p className='fs-3'>Ceci est une plaforme qui vous permet de recuperer vos certificats de cours sur lequel vos participants peuvent poser des questions, consulter vos réponses et répondre aux questions des autres participants.</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Certification;