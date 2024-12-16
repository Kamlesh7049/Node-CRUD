import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [rno, setRno]=useState("");
    const [mydata, setMydata]=useState([]);
    const [myerr, setMyerr]= useState();
    const handleSubmit=()=>{
        let api="http://localhost:8080/students/datasearch";
        axios.post(api, {rollno:rno}).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }

    
const ans= mydata.map((key)=>(
    
        <>
          <tr>
            <td> {key.rollno} </td>
            <td> {key.name} </td>
            <td> {key.city} </td>
            <td> {key.fees} </td>
          </tr>
        </>
    )
)

    return(
        <>
          <h1> Search Page</h1>
          Enter Rollno : <input type="text" value={rno}
          onChange={(e)=>{setRno(e.target.value)}} />
          <button onClick={handleSubmit}> Search</button>
          <hr/>
          <table>
            <tr>
                <th> Rollno </th>
                <th> Name </th>
                <th> City </th>
                <th> Fees </th>
            </tr>
            {mydata.length>=1 ? ans : <h3> No record Found</h3>}
          </table>
          <hr />
        </>
    )
}
export default Search;