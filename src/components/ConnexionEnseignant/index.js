import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import Footer from '../Footer';
import Navigation from '../Navigation';
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';


const ConnexionEnseignant = () =>{

    const navigate = useNavigate();

    const [error, seterror] = useState('');

    const loginError = (infoData) => {
        if(infoData === 'Email format is invalid'){
            seterror('Adresse mail invalide')
        }else if (infoData === 'Cannot find user'){
            seterror('Utilisateur invalide')
        }else if (infoData === 'Incorrect password'){
            seterror('password invalide')
        }else{
            navigate('/Cours')
        }
        console.log(infoData)
    }

    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(formData)
            loginError(data)
        })
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }



    return(
        <>
        <Navigation/>
        <body className="container  mt-5" style={{marginBottom: '300px'}}>
      
        <div className="row" id="connexion">
        <div className="   col-xs-12 col-lg-12  d-flex justify-content-center bg-dark text-light mt-5">
            <Form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3 mt-3 ">
                <h1 className="text-center pb-3">Connexion </h1>
                <div className='mb-3'>
							{error && <div className='alert alert-danger'>{error}</div>}
						</div>
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" required value={formData.email} name='email' onChange={e => handleChange(e)}/>
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">mot de passe</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password" required  placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)}/>

                </div>

                <div className="d-flex justify-content-center mb-5">
                    <Button className="btn btn-success me-3 col-xs-3 fw-bold " type="submit" style={{width: '500px' , height: '70px'}}> <span>SE CONNECTER</span>   </Button>
                    {/* <Link to="/DashboardEtd" style={{  textDecoration: 'none', color: '#fff'}}></Link> */}
                </div>
                <span className='text-center btn btn-link'>Forgot your password ?</span>
					<span className='text-center'>Already have any account ?
						<Link to= '/InscriptionEtudiant' className='text-center btn btn-link'>Sign Up </Link>
					</span>
            </Form>
        </div>

    </div>
</body> 
<Footer/>
</>
    )
}

export default ConnexionEnseignant;