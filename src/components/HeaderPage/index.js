import React from 'react';
import  '../../App.css';
import images from '../../Images/image2m.jpg';
import image1 from '../../Images/developpement-web.png';
import image2 from '../../Images/designer-graphique.png';
import image3 from '../../Images/big-data.png';
import image4 from '../../Images/plan-de-developpement.png';
import image5 from '../../Images/blockchain.png';
import image6 from '../../Images/science-des-donnees.png';
import enseignant from '../../Images/enseignantm.jpg';
import Button from 'react-bootstrap/Button';
import python from '../../Images/image1m.jpg';
import python1 from '../../Images/python1m2.jpg';
import python2 from '../../Images/python2m.jpg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const fondEcran = {
    backgroundImage: `url(${images})`,
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center',
    Width: '100vh'
}



const HeaderPage = () => {

  return (
    <div className=' mt-5 row' id="acceuil" >
        <div className='col-sm-12' style={fondEcran}>
            <div className='pub col-xs-12'>
                <p>Debutez votre Apprentissage sur Mbschool. Et plongez-vous dans l'univers du Numerique</p>
            </div>
        </div>
        <div className='categories mt-5 mb-4'>
          <h2 style={{fontWeight: 'bold'}}>Une large selection de cours</h2>
          <p>Choisissez parmi 185 000 cours en ligne, avec des nouveaux cours ajoutés tous les mois et transformez vos capacités en compétences <br/> vous permettant ainsi d'etre solution pour le marcher de l'emploi </p> <br/><br/>

          <h2 style={{fontWeight: 'bold'}}>Top Categories</h2><br/>
            <div className='cours row col-xs-12 mt-4'>
                    <div className='col-md-4 col-lg-4 mb-5'>
                      <img src={image1} alt='developpement web' style={{height: '150px'}}/><br/><br/>
                      <h2><span> <Link to="/DevWeb" style={{color: 'black', textDecoration: 'none'}}> Web Developpement</Link> </span></h2>
                    </div>
                    <div className='col-md-4 col-lg-4 mb-5'>
                    <img src={image2} alt='developpement web' style={{height: '150px'}}/><br/><br/>
                      <h2><span><Link to="/Design" style={{color: 'black', textDecoration: 'none'}}>Design</Link> </span></h2>
                    </div>
                <div className='col-md-4 col-lg-4 mb-5'>
                <img src={image3} alt='developpement web' style={{height: '150px'}}/><br/><br/>
                  <h2><span> <Link to="/DataAnalysis" style={{ color: 'black', textDecoration: 'none'}}>Data Analysis</Link> </span></h2>
                </div>
                <div className='col-md-4 col-lg-4 mb-5'>
                <img src={image4} alt='developpement web' style={{height: '150px'}}/><br/><br/>
                  <h2><span>  <Link to="/IA" style={{ color: 'black', textDecoration: 'none'}}>Artificial Intelligence</Link> </span></h2>
                </div>
                <div className='col-md-4 col-lg-4 mb-5'>
                <img src={image5} alt='developpement web' style={{height: '150px'}}/><br/><br/>
                  <h2><span> <Link to="/Blockchain" style={{ color: 'black', textDecoration: 'none'}}>Blockchain</Link> </span></h2>
                </div>
                <div className='col-md-4 col-lg-4 mb-5'>
                <img src={image6} alt='developpement web' style={{height: '150px'}}/><br/><br/>
                  <h2><span> <Link to="/DataAnalysis" style={{ color: 'black',  textDecoration: 'none'}}> Data Science </Link></span></h2>
                </div>
              
            </div>

            



        </div>

        <div className='sujetVedettes pb-5'>
              <h1 className='mb-5 pt-5 '>Featured Topics By Category</h1>
              <div className='row'>
                <div className='col-lg-3 col-xs-12 mb-5  fs-4'> Developpement</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Python</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Machine Learning</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Buisness</div>
                <div className='col-lg-3 col-xs-12 mb-5  fs-4'> Financial Analysis</div>
                <div className='col-lg-3 col-xs-12  mb-5   fs-4'> SQL</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> PMP</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> IT and Software</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> AWS Certification</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Ethical Hacking</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Cyber Security</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Design</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Photoshop</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Graphic Design</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Drawing</div>
                <div className='col-lg-3 col-xs-12 mb-5   fs-4'> Programming</div>
                

              </div>
            </div>
        <div className='enseignant row ' style={{paddingTop: '100px', paddingBottom: '50px'}}>
            <div className='col-xs-12 col-lg-4 offset-lg-2'> <img src={enseignant} alt="enseignantPub" style={{height: '400px'}}/> </div> 
            <div className='col-xs-12 col-lg-4 pt-5'> <h1>Become an instructor</h1> <p className='fs-4'>Instructors from around the world teach millions of students on Mbschool. We provide the tools and skills to teach what you love.  </p>

            <Button variant="success fw-bold fs-5">Start Teaching today</Button>
           </div>   
        </div>   
0 
        <div className='coursPython'>
          <div className='col-xs-12 pt-5'>
            <h2 className=' mb-4'>Expand your career opportunities with Python </h2>
            <p className=''>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. <br/> Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning.<br/> You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
            <Button variant="success fw-bold fs-5   justify-content-xs-start mb-5 \">Explore Python</Button>
            
            <div className='row mb-5 justify-content-center mx-5'>
            <div className='col-xs-12 col-lg-2 mx-5 mb-5' style={{paddingLeft: '0', paddingRight: '0'}} id='python'> 
                <img src={python} style={{maxHeight: '100%', maxWidth:'100%'}}  alt="pythoncours"   />
                <div className='card-body pt-3'>
                <p className='card-text '> <h4 className='fw-bold '>Learn Python </h4>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae sit amet consectetur </p>
                </div>
              </div>
              <div className='col-xs-12 col-lg-2  mb-5' style={{paddingLeft: '0', paddingRight: '0'}} id='python'> 
                <img src={python1} style={{maxHeight: '100%', maxWidth:'100%'}}  alt="pythoncours"   />
                <div className='card-body pt-3'>
                <p className='card-text '> <h4 className='fw-bold '>Learn Python </h4>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae sit amet consectetur </p>
                </div>
              </div>

              <div className='col-xs-12 col-lg-2 mx-5 mb-5' style={{paddingLeft: '0', paddingRight: '0'}}  id='python'> 
                <img src={python2} alt="pythoncours"  style={{maxHeight: '100%', maxWidth:'100%'}} />
                <div className='card-body pt-3'>
                  <p className='card-text '> <h4 className='fw-bold '>Learn Python </h4>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae sit amet consectetur </p>
                </div>
              </div>

              <div className=' '></div>
             

            </div>

          
          </div>
                    
        </div> 

        <Footer/>
    </div>
  )
}

export default HeaderPage;