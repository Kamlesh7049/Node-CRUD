import { useState, useEffect } from "react";
import axios from "axios";
import myimg from "../images/del.png";
import myeditimg from "../images/edit.png";
import { useNavigate } from "react-router-dom";
const Delete=()=>{
const [mydata, setMydata]= useState([]);
const navigate= useNavigate();
const loadData=()=>{
    let api="http://localhost:8080/students/deletedisplay";
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
const myDel=(id)=>{
    let api="http://localhost:8080/students/recorddelete";
    axios.post(api, {myid:id}).then((res)=>{
        alert("Data deleted!!!");
    })
    loadData();
}

const myedit=(id)=>{
    navigate(`/edit/${id}`);
}


const ans=mydata.map((key)=>{
    return(
        <>
          <tr>
            <td> {key.rollno}</td>
            <td> {key.name}</td>
            <td> {key.city}</td>
            <td> {key.fees}</td>
            <td>
             <a href="#" onClick={()=>{myDel(key._id)}}>
             <img src={myimg} width="20" height="20" />
             </a>
           
            <a href="#" onClick={()=>{myedit(key._id)}}>
             <img src={myeditimg} width="20" height="20" />
             </a> 
            </td>
          </tr>
        </>
    )
})

useEffect(()=>{
    loadData();
}, [])


    return(
        <>
          <h1> Delete records</h1>
          <table>
            <tr>
                <th> Rollno</th>
                <th>Name</th>
                <th> City</th>
                <th> Fees</th>
                <th> </th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Delete;