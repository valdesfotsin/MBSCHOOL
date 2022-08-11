import React from 'react';
import Navbar from '../Navbar';
import './Pages.css';
import secretaireImg from '../../../Images/13068.jpg';
import secretaireImg2 from '../../../Images/secretaire2.jpg';
import Button from 'react-bootstrap/esm/Button';
import Footer from '../../Footer';

const Cours = () => {

//   const  secretaire = {
//     backgroundImage: `url(${secretaireImg})`,
//     backgroundSize: 'cover',
//     height: '100vh',
//     backgroundPosition: 'center',
//     Width: '100vh'
//     }


  return (
    <>
    <Navbar />
    <div className='cours' style={{marginTop: '80px'}}>
        <div className='row px-2' id='div1'>
            
            <div className='col-xs-12 col-lg-4'>
                <p className='ps-5 fs-4'> Commencer la creation de cours </p>

            </div>

            <div className='col-xs-12 col-lg-4 py-3 btn btn-success  offset-lg-3 fw-bold '>
               {/* <button className=' btn btn-success py-3 px-5'> Créer Votre Cours </button> */}
               Créer Votre Cours 
            </div>
        </div>

        <div className='annonce mt-5'>
            <p className='text-center fs-5'>En nous fondant sur votre expérience, nous pensons que les ressources suivantes<br/> peuvent vous être utiles.</p>

        </div>

        <div className='row  py-2 justify-content-center' id="div1">
            <h3 className='text-center'>Creer un cours Captivant</h3>
            <div className='photo col-xs-12 col-lg-4' style={{paddingLeft: '0', paddingRight: '0'}}>
                <img  src={secretaireImg} width='80%' maxHeight='100%' alt='secretaire' style={{Height: '100vh', Width:'100vh'}}  />
            </div>

            <div className='photo col-xs-12 col-lg-4 offset-lg-3   text-start mt-5 mb-4 fs-4'>
            Que vous ayez des années d'expérience ou que ce soit votre première incursion dans l'enseignement, vous pouvez réaliser un cours captivant. Nous avons rassemblé des ressources et les bonnes pratiques pour vous aider à progresser, quel que soit votre point de départ.

            
            </div>
                   <div className='col-xs-12 col-lg-4 offset-lg-2 '>
                         <Button className='text-center mb-4 fs-5' variant='success' >Demarrer maintenant</Button>
                    </div> 
        </div>

        <div className='row mb-5 py-2 justify-content-center mb-5' id="div1">
            <h3 className='text-center pt-3'>Demarrer un enregistrement</h3>
            <div className='photo col-xs-12 col-lg-4' style={{paddingLeft: '0', paddingRight: '0'}}>
                <img  src={secretaireImg2} width='80%' maxHeight='100%' alt='secretaire' style={{Height: '50vh', Width:'100vh', position: 'center'}}  />
            </div>

            <div className='photo col-xs-12 col-lg-4 offset-lg-3   text-start mt-5 fs-4'>
            Des sessions vidéo de qualité peuvent vous aider à faire sortir votre cours du lot. Profitez de nos ressources pour apprendre les fondamentaux.

            
            </div>
                   <div className='col-xs-12 col-lg-12 d-flex justify-content-center  '>
                         <Button className='text-center mb-4 fs-5' variant='success'>Demarrer maintenant</Button>
                    </div> 
        </div>

        <div className='col-xs-12 col-lg-12   d-flex justify-content-center mb-5   ' style={{marginTop: '150px'}}>
               <button className=' btn btn-success py-3 px-5 py-3 fs-5 '> Créer Votre Cours </button>
               
            </div>

        












                {/* <div className='col-xs-12 col-lg-6' id='div2'>
                    <div className='col-xs-12 col-lg-3'>
                        <img  src={secretaireImg} alt='detailCours' width='100%' maxHeight='100%' style={{Height: '100vh', Width:'100vh'}}  />
                    </div>
                    <div className='col-xs-12 col-lg-3 '>
                    Des sessions vidéo de qualité peuvent vous aider à faire sortir votre cours du lot. Profitez de nos ressources pour apprendre les fondamentaux.
                    </div>
            
        </div> */}


        

            

    </div>
    <Footer/>
    </>
  )
}

export default Cours;