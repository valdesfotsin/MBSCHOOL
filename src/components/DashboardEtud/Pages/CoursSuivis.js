import React from 'react';
import Navbar from '../Navbar';
import './Pages.css';
// import secretaireImg from '../../../Images/13068.jpg';
// import secretaireImg2 from '../../../Images/secretaire2.jpg';
// import Button from 'react-bootstrap/esm/Button';
import Footer from '../../Footer';
import *  as GrommetIcons from 'react-icons/gr';

const CoursSuivis = () => {

//   const  secretaire = {
//     backgroundImage: `url(${secretaireImg})`,
//     backgroundSize: 'cover',
//     height: '100vh',
//     backgroundPosition: 'center',
//     Width: '100vh'
//     }


  return (
    <>
    <Navbar/>
    <div className='cours' style={{marginTop: '150px'}}>
       
       <div className='text-start ms-5'> <h2>Cours Suivis</h2> <hr/> </div>
        

            

    </div>
    
    
    <table className="table table-bordered container" style={{marginBottom: '250px'}}>
  <thead className='bg-success text-light'>
    <tr className='fs-5'>
      <th scope="col">Cours</th>
      <th scope="col" className='text-center'>Inscription</th>
      <th scope="col"  className='text-center'>Progression</th>
      <th scope="col"  className='text-center'>Certificat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Créez des sites web responsives avec Bootstrap 5</th>
      <td>04/05/2022</td>
      <td>
      <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      </td>
      <td className='text-center fs-4'> <GrommetIcons.GrCertificate/> </td>
    </tr>
    <tr>
      <th scope="row">Créez une application React complète</th>
      <td>26/05/2022</td>
      <td>

      <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>

      </td>
      <td className='text-center fs-4'><GrommetIcons.GrCertificate/></td>
    </tr>
    <tr>
      <th scope="row">Adoptez les API REST pour vos projets web</th>
      <td>02/05/2022</td>
      <td>

      <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
        </div>

      </td>
      <td className='text-center fs-4'><GrommetIcons.GrCertificate/></td>
    </tr>

    <tr>
      <th scope="row">Créez des sites web responsives avec Bootstrap 5</th>
      <td>30/05/2022</td>
      <td>

      <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>

      </td>
      <td className='text-center fs-4'><GrommetIcons.GrCertificate/></td>
    </tr>

    <tr>
      <th scope="row">Apprenez à programmer avec JavaScript</th>
      <td>06/05/2022</td>
      <td>

      <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
        </div>

      </td>
      <td className='text-center fs-4'><GrommetIcons.GrCertificate/></td>
    </tr>

    <tr>
      <th scope="row">Découvrez le métier de community manager</th>
      <td>26/05/2022</td>
      <td>

      <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
        </div>

      </td>
      <td className='text-center fs-4'><GrommetIcons.GrCertificate/></td>
    </tr>
  </tbody>
</table>

    <Footer/>
    </>
  )
}

export default CoursSuivis;