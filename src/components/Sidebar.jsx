import React, { useState } from 'react';
import "./Sidebar.css";
import "../"
import { FaHome,FaPlusSquare,FaBook,FaUserEdit,FaBars}from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import Logo from '../img/logo.png';


const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
    const menuItem =[
      {
        path:"/",
        name:"Home",
        icon:<FaHome/>,
      },
      {
        path:"/AddCourse",
        name:"AddCourse",
        icon:<FaBook/>,
      },
      {
        path:"/AddData",
        name:"AddData",
        icon:<FaPlusSquare/>,
      },
      {
        path:"/AddLec",
        name:"AddLec",
        icon:<FaUserEdit/>,
      },

  ]
    return (
      <div className="container">
      <div style={{width: isOpen ? "200px" : "65px"}} className="sidebar">
          <div className="top_section">
              <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
              <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                  <FaBars onClick={toggle}/>
              </div>
          </div>
          {
              menuItem.map((item, index)=>(
                  <NavLink to={item.path} key={index} className="link" activeclassName="active">
                      <div className="icon">{item.icon}</div>
                      <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                  </NavLink>
              ))
          }
      </div>
      <main>{children}</main>
   </div>
  );
};

export default Sidebar;
