import React, { useState } from 'react';
import "./AddCourse.css";
const AddCourse = () => {

    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const fileReader = new FileReader();
    const handleOnChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const csvFileToArray = string => {
      const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
      csvHeader[2]="ชื่อ";
      csvHeader.push("นามสกุล");
      console.log(csvHeader)
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
      const array = csvRows.map(i => {
        const values = i.split(",");
        const name = values[2].split(" ");
        // name[0].startsWith("นาย")? name[1]="นาย":name[0].startsWith("นางสาว")?name[1]="นางสาว":name[1]=" "
        values[2]= name[0]; //fname
        values[3]= name[1];//lastname
        const obj = csvHeader.reduce((object, header, index) => {
          object[header] = values[index];
          return object;
        }, {});
        return obj;
      });
      setArray(array);
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (file) {
          fileReader.onload = function (event) {
            const text = event.target.result;
            csvFileToArray(text);
          };
          fileReader.readAsText(file);
        }
      };
    const headerKeys = Object.keys(Object.assign({}, ...array));
    return (
      <div style={{ textAlign: "start" }} className="container-course">
        <h1 className='titel'>CSV IMPORT</h1>
        <div className='container-form'>
          {/* <div className='container-form-grid'> */}
          <div className="form-grid">
            <div className="input-box">
              <label className='label-text'>course code:<input className="text-box"type="text" placeholder='0400000'/></label>
              <label className='label-text'>course name(Eng):<input className="text-box" type="text" placeholder='Compro'/></label>
              <label className='label-text'>course name(Thai):<input className="text-box"type="text" placeholder='คอมพิวเตอร์'/></label>
              <label className='label-text'>section:<input className="text-box"type="text" placeholder='1'/></label>
              <label className='label-text'>section id:<input className="text-box" type="text" placeholder='63146CPE1'/></label>
              <label className='label-text'>lec:<input className="text-box" type="text" placeholder='lec'/></label>
              <label className='label-file' ><input  type={"file"} id={"csvFileInput"} accept={".csv"} onChange={handleOnChange}/>  </label>
              <button className="btn-course"onClick={(e) => {handleOnSubmit(e);}}>IMPORT CSV</button>
            </div>
            <div className="tabel-box">
              <table className='table'>
                <thead>
                  <tr key={"header"}>{
                    headerKeys.map((key) => (
                    <th>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {array.map((item) => (
                  <tr key={item.id}>
                    {Object.values(item).map((val) => (
                    <td>{val}</td>
                    ))}
                  </tr>
                  ))}
                </tbody>
             </table>
            </div>
          </div >
          {/* </div> */}
        </div>
      </div>
    );
};
export default AddCourse;
