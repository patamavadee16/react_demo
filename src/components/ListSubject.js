import  React ,{ useEffect ,useState} from "react";
import {Table,Button} from "react-bootstrap";
import subjectServices from "../services/subject.services";
import "../App.css"
import Dropdown from "react-dropdown";

const ListSubject = ({getSubjectId}) => {
    const [subjects,setSubjects]= useState([]);
    useEffect(()=>{
        getSubjects();
    },[]);

    const getSubjects =async()=>{
        const data = await subjectServices.getAllSubjects();
        console.log(data.docs);
        console.log("data.docs");
        setSubjects(data.docs.map((doc => ({...doc.data(),id:doc.id}))));
    };

    const deleteHandler = async(id) =>{
        await subjectServices.deleleSubject(id);
        getSubjects();
    }
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
    return (
        <div >
            <Button variant="dark edit" onClick={getSubjects}>Refresh List</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Eng</th>
                        <th>Thai</th>
                        <th>modify</th>
                    </tr>
                </thead>
                <tbody>
                {subjects.map((doc,index)=>{
                    return(
                        <tr key={doc.id}>    
                            <td>{index+1}</td>
                            <td>{doc.subjectCode}</td>
                            <td>{doc.subjectEng}</td>
                            <td>{doc.subjectThai}</td>
                            <td>
                                <Button
                                variant="secondary"
                                className="edit"
                                onClick={(e) => getSubjectId(doc.id)}
                                >Edit
                                </Button>
                                <Button
                                variant="danger"
                                className="delete"
                                onClick={(e) => deleteHandler(doc.id)}
                                >Delete
                                </Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
            {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
        </div>
    );
};

export default ListSubject;