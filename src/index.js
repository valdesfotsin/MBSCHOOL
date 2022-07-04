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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
      <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<App/> }/>
              <Route  path='InscriptionEtudiant' element={<InscriptionEtudiant/> }/>
              <Route  path='InscriptionEnseignant' element={<InscriptionEnseignant/> }/>
              <Route path='ConnexionEtudiant' element={<ConnexionEtudiant/> } />
              <Route path='DevWeb' element={<DevWeb/> } />
              <Route path='Design' element={<Design/> } />
              <Route path='DataAnalysis' element={<DataAnalysis/> } />
              <Route path='IA' element={<IA/> } />
              <Route path='Blockchain' element={<Blockchain/> } />

            </Routes>
        </BrowserRouter>
        
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
