import  React ,{ useEffect ,useState} from "react";
import {Table,Button} from "react-bootstrap";
import subjectServices from "../services/subject.services";
import "../App.css"
import { Dropdown } from "react-bootstrap";

const FatchSubject = ({getSubjectId}) => {
    const [subjects,setSubjects]= useState([]);
    useEffect(()=>{
        getSubjects();
    },[]);
    const getSubjects =async()=>{
        const data = await subjectServices.getAllSubjects();
        console.log(data.docs);
        setSubjects(data.docs.map((doc => ({...doc.data(),id:doc.id}))));
    }
    const options = [
    'one', 'two', 'three'
    ];
    const defaultOption = options[0];
    return (
        <div>            
            <Button variant="dark edit" onclick={getSubjects}>Refresh List</Button>
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
        </div>
    );
};
export default FatchSubject;