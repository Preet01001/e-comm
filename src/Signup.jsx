import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  let[username,setUsername]=useState("");
  let[password,setPassword]=useState("");
  let[type,setype]=useState("user");
  let navigateto = useNavigate();

  function sbmt(e){
    e.preventDefault();
    let data = {username,password,type};
    fetch("http://localhost:1010/signup",{
      method:"post",
      body:JSON.stringify(data),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then((res)=>{
      res.json()
    .then((data)=>{
      console.log(data.result)
      if(data.result==="userhai"){
        alert("user already exists")
      }else{
        localStorage.setItem("user",JSON.stringify(data.userdata));
        localStorage.setItem("token",JSON.stringify(data.auth));
        alert("signup completed")
        navigateto("/")
        console.log(data)
      } 
    })
    })
   
  }

  return (
    <>
        <form className='m-5' onSubmit={sbmt}>
  <div className="form-group">
    <label htmlFor="exampleDropdownFormEmail2">Username</label>
    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="exampleDropdownFormEmail2" placeholder="username"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleDropdownFormPassword2">Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary mt-3">Sign up</button>
</form>
    </>
  )
}

export default Signup