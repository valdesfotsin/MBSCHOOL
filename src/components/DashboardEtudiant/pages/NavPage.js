import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Angular from '../pages/Angular'
// import Css from '../pages/Css'
// import Figma from '../pages/Figma'
// import Git from '../pages/Git'
import Accueil from '../pages/Accueil'
import Setting from '../pages/Setting'
import App from '../../../App'
// import Node from '../pages/Node'
// import Php from '../pages/Php'
// import PageReact from '../pages/PageReact'

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
      <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<App/> }/>
              <Route  path='Dashboard' element={<Accueil/> }/>
              <Route  path='Setting' element={<Setting/> }/>
            


            </Routes>
        </BrowserRouter>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
