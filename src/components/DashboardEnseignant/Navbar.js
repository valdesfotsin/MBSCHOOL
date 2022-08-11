import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import user from '../../Images/capture.PNG';

// import './DashboardEns.css';



function Navbar() {

  const [sidebar, setSidebar] = useState(false);  
  
  const showSidebar = () => setSidebar(!sidebar);
    
  const avatar = {
    backgroundImage: `url(${user})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    
  }
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar fixed-top'>  
        <Link to="#" style={{color: '#fff', textDecoration: 'none'}} className="menu-bars">
            <FaIcons.FaBars className='mx-3' onClick={showSidebar}/>
            <Link to="/" className="fw-bold fs-4" style={{color: '#fff', textDecoration: 'none'}}>MBSCHOOL</Link>
        </Link>
       
        <div></div>
        <div id="user" className='d-flex justify-content-end' style={avatar}>
            
        </div>
    
    </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className="menu-bars ">
                        <AiIcons.AiOutlineClose className='d-flex justify-content-start'/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {

                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path} className="d-flex justify-content-start">
                                {item.icon}
                                <span> {item.title} </span>
                            </Link>
                        </li>
                    )
                } )}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar