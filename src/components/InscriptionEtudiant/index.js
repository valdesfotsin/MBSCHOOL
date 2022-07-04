import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';
import Navigation from '../Navigation';


const InscriptionEtudiant = () =>{

    return(
        <>
        <Navigation/>
        <body className="container " style={{marginTop: '100px', marginBottom: '100px'}}>
            
        <div className="row" id="formulaire">
            <div className="col-lg-12  d-flex justify-content-center bg-dark text-light " id="form2" >
                
                <Form>
                    <div className="mb-3 mt-3">
                    <h1 className="text-center"> Sign In on Mbschool  </h1> <br/>
                        <label for="nom" className="form-label" >Nom et Prenom </label>
                        <input type="text" className="form-control" id="nom" aria-describedby="Entrer votre nom"/>

                    </div>

                    

                    <div className="mb-3">
                        <label for="email" className="form-label">  Adresse Email</label>
                        <input type="email" id="email" className="form-control" aria-describedby="user"/>
                    </div>

                    <div className="mb-3">
                        <label for="localisation" className="form-label">Localisation</label>
                        <input type="text" id="email" className="form-control" aria-describedby="user"/>
                    </div>

                    <div className="mb-3">
                        <label for="localisation" className="form-label">Sexe</label>
                        <input type="text" id="localisation" className="form-control" aria-describedby="user"/>
                    </div>

                    <div className="mb-3">
                        <label for="tel" className="form-label"> Tel </label>
                        <input type="number" id="tel" className="form-control" aria-describedby="user"/>
                    </div>

                   

                   

                    <div className="mb-3">
                        <label for="password" className="form-label">mot de passe</label>
                        <input type="password" id="password" className="form-control" aria-describedby="password"/>
                    </div>

                    <div className="mb-3">
                        <label for="localisation" className="form-label">Photo</label>
                        <input type="text" id="email" className="form-control" aria-describedby="user"/>
                    </div>

                   <div className="d-flex justify-content-center mb-3">
                    <Button type="submit" className="btn btn-success me-3 fw-bold" style={{width: '300px' , height: '50px'}}> INSCRIVEZ-VOUS </Button>
                    
                   </div> 

                </Form>

            </div>

        </div>


    </body>
    <Footer/>
    </>
    )
}

export default InscriptionEtudiant;