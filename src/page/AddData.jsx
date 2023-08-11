import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Add from "../components/Add";
import List from "../components/List";
import "./AddData.css";
const AddData = () => {
    const [bookId, setSubjectId] = useState("");
    const getSubjectIdHandler = (id) => {
      console.log("The ID of document to be edited: ", id);
      setSubjectId(id);};
    return (
      <div className="container-subject">
        <h1 className="titel"> Subject</h1>
        <div className="form-sub">
          <Row >
            <Col>
              <Add id={bookId} setSubjectId={setSubjectId}/>
            </Col>
          </Row>
        </div>
        <div className="table-sub">
          <Row>
            <Col>
              <List getSubjectId={getSubjectIdHandler}/>
            </Col>
          </Row>
        </div>
{/* <Container  >
        <Row >
          <Col>
            <Add id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container> */}
      {/* <Container classsName="table-sub" style={{ width: "400px" ,background:"pink"}}>
        <Row>
          <Col>
            <List getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container> */}
      {/* <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar> */}
    </div>
  );
};
export default AddData;