import React from 'react';
import Navbar from '../Navbar';
import './Pages.css';
import secretaireImg from '../../../Images/13068.jpg'

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
                <p className='ps-5'> Commencer la creation de cours </p>

            </div>

            <div className='col-xs-12 col-lg-4 py-3 btn btn-success  offset-lg-3  '>
               {/* <button className=' btn btn-success py-3 px-5'> Créer Votre Cours </button> */}
               Créer Votre Cours 
            </div>
        </div>

        <div className='annonce mt-5'>
            <p className='text-center'>En nous fondant sur votre expérience, nous pensons que les ressources suivantes<br/> peuvent vous être utiles.</p>

        </div>

        <div className='row mb-3 py-2' id="div1">
            <h3 className='text-center'>Creer un cours Captivant</h3>
            <div className='photo col-xs-12 col-lg-4' style={{paddingLeft: '0', paddingRight: '0'}}>
                <img  src={secretaireImg} width='100%' maxHeight='100%' alt='secretaire' style={{Height: '100vh', Width:'100vh'}}  />
            </div>

            <div className='photo col-xs-12 col-lg-4 offset-lg-3   text-start mt-5 fs-4'>
            Que vous ayez des années d'expérience ou que ce soit votre première incursion dans l'enseignement, vous pouvez réaliser un cours captivant. Nous avons rassemblé des ressources et les bonnes pratiques pour vous aider à progresser, quel que soit votre point de départ.

            
            </div>
            <p className='text-center'>Demarrer maintenant</p>
        </div>

        <div className='row justify-content-center'  >


                <div className=' row col-xs-12 col-lg-5' id='div2'>
                   
                <div className='col-lg-3 ' style={{paddingLeft: '0', paddingRight: '0'}}>
                        <img  src={secretaireImg} alt='detailCours'style={{maxHeight: '100%', maxWidth:'100%'}}  />
                    </div>
                    
                    <div className=' col-lg-3 offset-lg-3 text-start'>
                    
                    <p> Des sessions vidéo de qualité peuvent vous aider à faire sortir votre cours du lot. Profitez de nos ressources pour apprendre les fondamentaux. </p>
                    </div>
                   
                    

                </div>
                <div className='col-xs-12 col-lg-5 row' id='div3' >
                    <div className='col-xs-12 col-lg-3 ' style={{paddingLeft: '0', paddingRight: '0'}}>
                        <img  src={secretaireImg} alt='detailCours' width='100%' maxHeight='100%' style={{Height: '100vh', Width:'100vh'}}  />
                    </div>
                    <div className='col-xs-12   col-lg-3   offset-lg-3  justify-content-end text-start'>
                    Des sessions vidéo de qualité peuvent vous aider à faire sortir votre cours du lot. Profitez de nos ressources pour apprendre les fondamentaux.
                    </div>

                </div>
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
    
    </>
  )
}

export default Cours;