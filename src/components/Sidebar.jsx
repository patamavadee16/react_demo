import React, { useState } from 'react';
// import "./Sidebar.css";
import "../App.css";
import { FaHome,FaPlusSquare,FaBook,FaUserEdit,FaBars}from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
  // const[isOpen ,setIsOpen] = useState(false);
  // const toggle = () => setIsOpen (!isOpen);
  const menuItem =[
    {
      path:"/",
      name:"Home",
      icon:<FaHome/>,
    },
    {
      path:"/AddCourse",
      name:"Course",
      icon:<FaBook/>,
    },
    {
      path:"/AddData",
      name:"Data",
      icon:<FaPlusSquare/>,
    },
    {
      path:"/AddLec",
      name:"Leclure",
      icon:<FaUserEdit/>,
    },

  ]
    return (
      <div className="container">
        <div className="container-grid">
          <div 
          // style={{width: isOpen ? "200px" : "65px"}} 
          className="sidebar">
            <div className="sidebar-grid">
              <div className="top_section">
                <h1 
              // style={{display: isOpen ? "block" : "none"}} 
                className="logo">Logo</h1>
              {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                  <FaBars onClick={toggle}/>
              </div> */}
              </div>
            {/* <div className="list">
              
            </div> */}
              {menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                  <div className="item">
                    <div className="icon">{item.icon}</div>
                    {/* <div className="text">{item.name} </div> */}
                  </div>
                  {/* <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
                </NavLink>
              ))
              }
            </div>
          </div>
          <div className="main">
            <div className="container-main">{children}</div>
          </div>
        </div>
      </div>
    );
};
export default Sidebar;
