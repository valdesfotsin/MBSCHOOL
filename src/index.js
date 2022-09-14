import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InscriptionEtudiant from './components/InscriptionEtudiant';
import InscriptionEnseignant from './components/InscriptionEnseignant';
import ConnexionEtudiant from './components/ConnexionEtudiant';
import DevWeb from './components/DevelopementWeb';
import Design from './components/Design';
import DataAnalysis from './components/DataAnalysis';
import IA from './components/IA';
import Blockchain from './components/Blockchain';
import DashboardEtd from './components/DashboardEtud';
import Cours from './components/DashboardEnseignant/Pages/Cours';
import Communication from './components/DashboardEnseignant/Pages/Communication';
import Performance from './components/DashboardEnseignant/Pages/Performance';
import Outils from './components/DashboardEnseignant/Pages/Outils';
import Ressources from './components/DashboardEnseignant/Pages/Ressources';
import DashboardEns from './components/DashboardEnseignant';
import ConnexionEnseignant from './components/ConnexionEnseignant';
import DashbordEtd from './components/DashboardEtud';
import CoursSuivis from './components/DashboardEtud/Pages/CoursSuivis';
import CoursDisponible from './components/DashboardEtud/Pages/CoursDisponible';
import Certification from './components/DashboardEtud/Pages/Certification';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
      <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<App/> }/>
              <Route path='DashboardEtd' element={<DashbordEtd/> } />
              <Route path='CoursSuivis' element={<CoursSuivis/> } />
              <Route path='Certification' element={<Certification/> } />
              <Route path='CoursDisponible' element={<CoursDisponible/> } />
              <Route  path='ConnexionEnseignant' element={<ConnexionEnseignant/> }/>
              <Route  path='InscriptionEtudiant' element={<InscriptionEtudiant/> }/>
              <Route  path='InscriptionEnseignant' element={<InscriptionEnseignant/> }/>
              <Route path='ConnexionEtudiant' element={<ConnexionEtudiant/> } />
              <Route path='DevWeb' element={<DevWeb/> } />
              <Route path='Design' element={<Design/> } />
              <Route path='DataAnalysis' element={<DataAnalysis/> } />
              <Route path='IA' element={<IA/> } />
              <Route path='Blockchain' element={<Blockchain/> } />
              <Route path='DashboardEtd' element={<DashboardEtd/> } />
              <Route path='Cours'  element={<Cours/> } />
              <Route path='Communication' element={<Communication/> } />
              <Route path='Performance' element={<Performance/> } />
              <Route path='Outils' element={<Outils/> } />
              <Route path='Ressources' element={<Ressources/> } />
              <Route path='DashboardEns' element={<DashboardEns/> } />
              
            </Routes>
        </BrowserRouter>
        
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
