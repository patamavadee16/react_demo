import React, { useState } from 'react';
// import Papa from 'papaparse'
import "./AddCourse.css";
// import '../App.css';
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
        name[0].startsWith("นาย")? name[1]="a":name[0].startsWith("นางสาว")?name[1]="s":name[1]="p"
        values[2]= name[0]; //fname

        values[3]= name[1];//lastname

        const obj = csvHeader.reduce((object, header, index) => {
          object[header] = values[index];
          // console.log(object[header]);
          // console.log(obj);
          // console.log(values);
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
            // console.log(event.target.result);
            const text = event.target.result;
            // console.log(text)
            csvFileToArray(text);
          };
    
          fileReader.readAsText(file);
        }
      };
    
      const headerKeys = Object.keys(Object.assign({}, ...array));
    return (
        <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
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
        );
};

export default AddCourse;
// return (
//     <div>
//         <input type="file"
//         name='file'
//         accept='.csv'
//         style={{display:'block',margin:"10px auto"}}
//         ></input> 
//         <br />
//         <table style={{borderCollapse:"collapse",border:"1px solid black",margin:"5px auto"}}>
//             <thead>
//                 <tr>
//                     {columnArray.map((col,i)=>(
//                         <th style={{border:"1px solid blackg"}}key={i}>{col}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {values.map((v,i)=>(
//                 <tr key={i}>{v.map((value,i)=>(
//                     <td key={i}>{value}</td>
//                     ))
//                         }

//                 </tr>
//                 ))}
//             </tbody>
//             </table>
//     </div>
// );