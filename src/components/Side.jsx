import React, { useState } from 'react';
import "./side.css";
import { FaHome,FaPlusSquare,FaBook,FaUserEdit,FaBars}from "react-icons/fa";
const Side = () => {
    const [toggle,setToggle ]= useState(false);
    return (
        <div className={`sidebar-contrainer`}>
            <div className="absolute top-[7rem] flex 
            justify-center items-center -left-5 w-10 h-10
            bg-glass rounded-full cursor-pointer"
            onClick={()=>{
                setToggle(!toggle);
            }}>
            <FaUserEdit className={`${toggle ? "rotate-180":""
        }text-3xl transition-all duratu`}/>
            </div>
            
        </div>
    );
};

export default Side;