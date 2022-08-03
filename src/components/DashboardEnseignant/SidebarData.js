import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
// import './DashboardEns.css';

export const SidebarData = [
    {
       title: 'Cours',
       path: '/Cours',
       icon: <BiIcons.BiMoviePlay/>,
       cName: 'nav-text' 
    },
    {
        title: 'Communication',
        path: '/Communication',
        icon: <BiIcons.BiMessageDetail />,
        cName: 'nav-text' 
     },
     {
        title: 'Performances',
        path: '/Performance',
        icon: <ImIcons.ImStatsBars  />,
        cName: 'nav-text' 
     },
     {
        title: 'Outils',
        path: '/Outils',
        icon: <FaIcons.FaTools />,
        cName: 'nav-text' 
     },
     {
        title: 'Ressources',
        path: '/Ressources',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text' 
     },
]
