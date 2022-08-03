import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';
import Navigation from '../Navigation';
import { useState } from 'react';


    



const EssaieInscription = () =>{

    const [formData, setFormData] = useState({
        nom: '',
        email: '', // required
        Location: '',
        sexe: '',
        tel: '',
        password: '', // required
        photo: '' // optional
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }


    return(
        <>
        <Navigation/>
        <body className="container " style={{marginTop: '100px', marginBottom: '100px'}}>
            
        <div className="row" id="formulaire">
            <div className="col-lg-12  d-flex justify-content-center bg-dark text-light " id="form2" >
                
                <Form onSubmit={e => handleSubmit(e)}>
                    <div className="mb-3 mt-3">
                    <h1 className="text-center"> Sign In on Mbschool  </h1> <br/>
                        <label for="nom" className="form-label" >Nom et Prenom </label>
                        <input type="text" className="form-control" id="nom" aria-describedby="Entrer votre nom" required value={formData.nom} onChange={e => handleChange(e)} name='nom' />

                    </div>

                    

                    <div className="mb-3">
                        <label for="email" className="form-label">  Adresse Email</label>
                        <input type="email" id="email" className="form-control" aria-describedby="user" required value={formData.email} onChange={e => handleChange(e)} name='email'/>
                    </div>

                    <div className="mb-3">
                        <label for="localisation" className="form-label">Localisation</label>
                        <input type="text" id="email" className="form-control" aria-describedby="user" required value={formData.Location} onChange={e => handleChange(e)} name='Location'/>
                    </div>

                    <div className="mb-3">

                    <label for="Sexe" className="form-label">Sexe</label>
                        <Form.Select aria-label="Default select example" required value={formData.sexe} onChange={e => handleChange(e)} name='sexe'>

                            <option value=""></option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
        
                        </Form.Select>



                    </div>

                    <div className="mb-3">
                        <label for="tel" className="form-label"> Tel </label>
                        <input type="number" id="tel" className="form-control" aria-describedby="user"  value={formData.tel} onChange={e => handleChange(e)} name='tel'/>
                    </div>

                   

                   

                    <div className="mb-3">
                        <label for="password" className="form-label">mot de passe</label>
                        <input type="password" id="password" className="form-control" aria-describedby="password" required value={formData.password} onChange={e => handleChange(e)} name='password'/>
                    </div>

                    <div className="mb-3">
                        <label for="localisation" className="form-label">Photo</label>
                        <input type="file" id="localisation" className="form-control" aria-describedby="user" accept='image/*' required value={formData.photo} onChange={e => handleChange(e)} name='photo'/>
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

export default EssaieInscription;