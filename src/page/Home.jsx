import { useState } from "react";
import FormInput from '../components/FormInput.jsx';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import '../App.css';
import Button from '../components/Button.js';
import { Link } from "react-router-dom";
import AddLec from "../page/AddLec.jsx";
import AddCourse from "../page/AddCourse.jsx";
import AddData from '../page/AddData';
import Subject from "../page/Subject.jsx";
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
const Home = () => {
  // const onPress = () => {
  //   alert('clicked')
  // }
   const menuItem =[
    {
      path:"/AddCourse",
      name:"Course",
    },
    {
      path:"/Subject",
      name:"Data",
    },
    {
      path:"/AddLec",
      name:"Leclure",
    },
  ]
    return (
        <div className="container-home">
          <h1 className="titel">  HOME</h1>
          {menuItem.map((item, index)=>(
            <Link to={item.path} key={index} className="link-home" activeclassName="active-home">
              <button className="btn-home">{item.name}</button>
          {/* <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
            </Link>
          ))
          }
          {/* <button className="btn-home" >
            <h1>Course</h1>
          </button> */}
          {/* <Button
        text='Course'
        type='outlined'
        bordered
        onPress={onPress}
      /> */}
{/*       
      <Button style={{background:'pink ',color:'#fff'}} className="course">Course</Button>
      <Button style={{background:'red ',color:'#fff'}}>Leclure</Button>
      <Button style={{background:'blue ',color:'#fff'}}>Subject</Button> */}
      {/* <BrowserRouter>
      <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/AddData" element={<AddData/>}/>
                    <Route path="/AddLec" element={<AddLec/>}/>
                    <Route path="/AddCourse" element={<AddCourse/>}/>
                  </Routes>
       </BrowserRouter> */}
        </div>
    );
};
export default Home;