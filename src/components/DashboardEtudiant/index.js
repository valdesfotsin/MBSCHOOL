import React from 'react'
import NavPage from './pages/NavPage'
import './DashboardEtudiant.css'

import Accueil from './pages/Accueil'
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
// import { Avatar,Menu,Breadcrumb } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { FaHome,FaStackExchange,FaRegSun,FaStream } from 'react-icons/fa';
// const { Header, Footer, Sider, Content } = Layout;


const index = () => {
  return (
    <div>
     
  
      
    <nav class="navbar navbar-expand-lg navbar-light blue fixed-top">
    <button id="sidebarCollapse" class="btn navbar-btn">
    <FaStream/>
    </button>
    <Link to="/" class="navbar-brand">
      <h4 id="logo">MBSCHOOL</h4>
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" id="link" href="#">
          <i class="fas fa-sign-out-alt"></i>
          LogOut<span class="sr-only">(current) </span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="link" href="#">
          <i class="fas fa-id-card"></i>User</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="wrapper fixed-left">
    <nav id="sidebar">
    

      <ul class="list-unstyled components">
        {/* <li>
          <a href=""><i><FaHome/></i> Home</a>
        </li> */}
        <li>
          <Link to="/Dashboard" href=""><i><FaStackExchange/></i>Dashboard</Link>
        </li>
        <li>
          <Link to="/Setting" ><i><FaRegSun/></i>Setting</Link>
        </li>
  
      </ul>
    </nav>

    <div id="content">
      {/* <NavPage/> */}
      <Accueil/>
    </div>

  </div>
       
    </div>
  )
}

export default index
