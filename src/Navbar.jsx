import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate();
    function logout(e){
        e.preventDefault();
        localStorage.clear();
        navigate("/signup")
    }
    let auth = localStorage.getItem("user");
   let type=null;
    if(auth){
        if(JSON.parse(auth).type==="user"){
          type ="user";
        }else{
            type ="admin"
        }
    }
  return (
    <>
    <div className=''>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
 <h1 href="#" className="navbar-brand">E-Comm Store</h1>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
            
            <>
            {auth && type === "user"?
            
            <>
      <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
      <NavLink to="cart" className="nav-item nav-link">Cart</NavLink>
                </>  
            :type==="admin"?<div></div>
            :
            <>
                <NavLink to="signup" className="nav-item nav-link">Signup</NavLink>
            <NavLink to="signin" className="nav-item nav-link">Signin</NavLink>
            </>
         }
            </>
           
             </div>
            <div className="navbar-nav ms-auto">{auth?
                <NavLink onClick={logout} className="nav-item nav-link">Logout</NavLink>
            :<div></div>}</div>
            
        </div>
    </div>
</nav>
</div>
    </>
  )
}

export default Navbar