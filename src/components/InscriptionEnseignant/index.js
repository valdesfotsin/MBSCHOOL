import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form  from 'react-bootstrap/Form';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import validor from 'validator';

const InscriptionEnseignant = () =>{

    const navigate = useNavigate(); 

    // useState check

    const [msgEmailForm, setmsgEmailForm] = useState('');
    const [msgPwdForm, setmsgPwdForm] = useState('');
    const [msgPwdConfirm, setmsgPwdConfirm] = useState('');
    const [submitOk, setsubmitOk] = useState(false);
    const [emailOk, setemailOk] = useState(false);
    const [passwordOk, setpasswordOk] = useState(false);
    const [pwdConfirmOk, setpwdConfirmOk] = useState(false);

    const [formData, setFormData] = useState({
        nom: '',
        email: '', // required
        Qualification: '',
        tel: '',
        cv: '',
        photo: '',
        password: '', // required
        
    });


    //checkMail

    const checkEmail = e =>{
        const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        const email = e.target.value
        if(expressionReguliere.test(email)) {
            setmsgEmailForm(null)
            setemailOk(true)
        } else {
            setmsgEmailForm("Votre email doit etre au format xxxx@xxxx.xxx")
            setemailOk(false)
        }

        handleChange(e)
    }

    // checkPassword

    const checkPassword = e => {
        const password = e.target.value;
        if (validor.isStrongPassword(password, {
            minLength: 8, minLowerCase: 1, minUpperCase: 1,
              minnumbers: 1, minSymbols: 1
        })) {
            setmsgPwdForm(null)
            setpasswordOk(true)
        } else {
            setmsgPwdForm('Votre mot de passe doit avoir au moins 8 caracteres une majuscule, une minuscule et un symbole')
            setpasswordOk(false)
        }
        handleChange(e)
    }

    // checkPasswordConfirm

    const checkConfirmPwd = e => {
        const confirmPwd = e.target.value
        if((formData.password !== null ) && (formData.password !== confirmPwd)) {
            setmsgPwdConfirm('Le mot de passe ne correspond pas')
            setpwdConfirmOk(false)
        } else {
            setmsgPwdConfirm(null)
            setpwdConfirmOk(true)
        }
    }

     // check

     const signUpErrorMsg = infosLogin =>{
        console.log(infosLogin);
        if (infosLogin === 'Email already exists') {
            setemailOk(false)
            setmsgEmailForm('Cet email est deja utilisée, veuillez la changer !')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(passwordOk && emailOk && pwdConfirmOk){
            fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => signUpErrorMsg(data))
        setsubmitOk(true)

        }

        console.log(submitOk);
    }

    function handleChange(e) {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
       
    }

    return (
        <>
        <Navigation/>
        <body className="container " style={{marginTop: '100px', marginBottom: '100px'}}>
            
        <div className="row" id="formulaire">
            <div className="col-lg-12  d-flex justify-content-center bg-dark text-light " id="form2" >
                
                <Form onSubmit={e => handleSubmit(e)}>
                    <div className="mb-3 mt-3">
                    <h1 className="text-center"> Sign In on Mbschool  </h1> <br/>
                        <label for="nom" className="form-label" >Nom et Prenom </label>
                        <input type="text" className="form-control" id="nom" aria-describedby="Entrer votre nom" required value={formData.nom} onChange={handleChange} name='nom' />

                    </div>

                    

                    <div className="mb-3">
                        <label for="email" className="form-label">  Adresse Email</label>
                        <input type="email" id="email" className="form-control" aria-describedby="user" required  onChange={checkEmail} name='email' placeholder="name@example.com" />
                    </div>

                    {msgEmailForm && <div className='alert alert-warning' role="alert"> {msgEmailForm} </div>}

                    <div className="mb-3">
                        <label for="qualification" className="form-label">Qualification</label>
                        <input type="text" id="qualification" className="form-control" aria-describedby="user" required value={formData.Qualification} onChange={handleChange} name='Qualification'/>
                    </div>

                   

                    <div className="mb-3">
                        <label for="tel" className="form-label"> Tel </label>
                        <input type="number" id="tel" className="form-control" aria-describedby="user" value={formData.tel} onChange={handleChange} name='tel'/>
                    </div>

                   
                    <div className="mb-3">
                        <label for="cv" className="form-label">CV</label>
                        <input type="file" id="cv" className="form-control"  aria-describedby="user"  accept="application/pdf, application/vnd.ms-excel" value={formData.cv} onChange={handleChange} name='cv'/>
                    </div>

                    <div className="mb-3">
                        <label for="localisation" className="form-label">Photo</label>
                        <input type="file"  className="form-control" aria-describedby="user" accept="image/*" required value={formData.photo} onChange={e => handleChange(e)} name='photo'/>
                    </div>
                   

                    <div className="mb-3">
                        <label for="password" className="form-label">mot de passe</label>
                        <input type="password" id="password" className="form-control" aria-describedby="password" required  onChange={checkPassword} name='password'/>
                    </div>

                    { msgPwdForm && <div className="alert alert-warning" role="alert"> {msgPwdForm}</div> }

                    <div className="mb-3">
                    <label for="password" className="form-label">Confirm Password</label>
                    <input type="text"  className="form-control" aria-describedby="password" required  onChange={checkConfirmPwd} name='confirmpassword'/>
                </div>
                { msgPwdConfirm && <div className="alert alert-warning" role="alert"> {msgPwdConfirm}</div> }

                   <div className="d-flex justify-content-center mb-3">
                    <Button type="submit" className="btn btn-success me-3 fw-bold" style={{width: '300px' , height: '50px'}}> INSCRIVEZ-VOUS </Button>
                    
                   </div> 

                   <span>Already have any account ?
						<Link to='/ConnexionEnseignant' className='text-center btn btn-link'>Login</Link>
			    </span>

                </Form>
                {submitOk && navigate('/ConnexionEnseignant')}

            </div>

        </div>


    </body>
    <Footer/>
    </>
    )
    
}

export default InscriptionEnseignant;