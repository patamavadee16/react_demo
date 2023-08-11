import React,{useState,useEffect} from 'react';
import {Form,Alert,InputGroup,Button,ButtonGroup} from "react-bootstrap";
import subjectServices from '../services/subject.services';
import "../App.css"

const AddSubject = ({id,setSubjectId}) => {
    const [subjectCode,setSubjectCode] = useState("");
    const [subjectEng,setSubjectEng] = useState("");
    const [subjectThai,setSubjectThai] = useState("");
    const [flag,ssetFlag] = useState(true);
    const [message,setMessage] = useState({error:false,msg:""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (subjectCode === ""|| subjectEng === "" ||subjectThai==="" ){
            setMessage({error:true ,msg:"All fields are mandatory!"});
            return ;
        }
        const newSubject ={
           subjectCode,
           subjectEng,
           subjectThai,
        };
        console.log(newSubject);

        try {
            if(id !== undefined && id !==""){
                await subjectServices.updateSubject(id,newSubject);
                setSubjectId("");
                setMessage({error:false,msg:"Update successfully!"});
            }else{
                await subjectServices.addSubjects(newSubject);
                setMessage({error: false,msg:"New Book added sucessfully!"});
            }}catch (err){
                setMessage({error :true,msg:err.message});
            }
            setSubjectCode("");
            setSubjectEng("");
            setSubjectThai("");
        };
        const editHandler = async()=>{
            setMessage("");
            try {
                const docSnap = await subjectServices.getSubject(id);
                console.log("the record is:", docSnap.data());
                setSubjectCode(docSnap.data().subjectCode);
                setSubjectEng(docSnap.data().subjectEng);
                setSubjectThai(docSnap.data().subjectThai);
            } catch (err) {
                setMessage({error:true,msg:err.message});
            }
        }
        useEffect(()=>{
            console.log("the id here is : ", id);
            if(id !== undefined && id !== ""){
                editHandler();
            }
        },[id]);
        return (
                          <div className="p-4 box">
                {message?.msg && (
                  <Alert
                    variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}
                  >
                    {message?.msg}
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formSubjectCode">
                    <InputGroup>
                      <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="SubjectCode"
                        value={subjectCode}
                        onChange={(e) => setSubjectCode(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formSubjectEng">
                    <InputGroup>
                      <InputGroup.Text id="formSubjectEng">B</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="SubjectEng"
                        value={subjectEng}
                        onChange={(e) => setSubjectEng(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formSubjectThai">
                    <InputGroup>
                      <InputGroup.Text id="formSubjectThai">B</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="SubjectThai"
                        value={subjectThai}
                        onChange={(e) => setSubjectThai(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                        Add/ Update
                    </Button>
                </div>
                </Form>
              </div>
          
          );
};

export default AddSubject;