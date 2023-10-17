import React,{useState} from "react";
import { Row,Col } from "react-bootstrap";
import AddSubject from "../components/AddSubject.js";
import ListSubject from "../components/ListSubject.js";
import "./AddData.css";

const Subject = () => {
    const [subjectId,setSubjectId] = useState("");
    const getSubjectIdHandler=(id)=>{
        console.log("The ID of document to be edited : ",id);
        setSubjectId(id);
    }
    return (
        <div className="subject">
          <h1 className="title"> Subjectt</h1>
          <div className="form-sub">
            <Row>
              <Col>
                <AddSubject id={subjectId} setSubjectId={setSubjectId}/>
              </Col>
            </Row>
          </div>
          <div className="table-sub">
            <Row>
              <Col>
                <ListSubject getSubjectId={getSubjectIdHandler}/>
              </Col>
            </Row>
          </div>
        </div>
    );
};
export default Subject;
