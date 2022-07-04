import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import Footer from '../Footer';
import Navigation from '../Navigation';
const ConnexionEtudiant = () =>{

    return(
        <>
        <Navigation/>
        <body className="container  mt-5" style={{marginBottom: '300px'}}>
      
        <div className="row" id="connexion">
        <div className="   col-xs-12 col-lg-12  d-flex justify-content-center bg-dark text-light mt-5">
            <Form>
                <div className="mb-3 mt-3 ">
                <h1 className="text-center pb-3">Connexion </h1>
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email"/>
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">mot de passe</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password"/>

                </div>

                <div className="d-flex justify-content-center mb-5">
                    <Button className="btn btn-success me-3 col-xs-3 fw-bold " type="submit" style={{width: '500px' , height: '70px'}}>SE CONNECTER </Button>
                </div>

                <p className='text-center'>Vous avez oublié votre mot de passe, ou Vous n'avez pas de compte</p>
            </Form>
        </div>

    </div>
</body> 
<Footer/>
</>
    )
}

export default ConnexionEtudiant;