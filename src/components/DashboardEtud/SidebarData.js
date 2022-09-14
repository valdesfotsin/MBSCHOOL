import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
// import './DashboardEns.css';

export const SidebarData = [
    {
       title: 'Cours Suivis',
       path: '/CoursSuivis',
       icon: <BiIcons.BiMoviePlay/>,
       cName: 'nav-text' 
    },
    {
        title: 'Certification',
        path: '/Certification',
        icon: <BiIcons.BiMessageDetail />,
        cName: 'nav-text' 
     },
     {
        title: 'Cours Dispo',
        path: '/CoursDisponible',
        icon: <ImIcons.ImStatsBars  />,
        cName: 'nav-text' 
     }
]
