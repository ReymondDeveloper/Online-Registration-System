import { useState } from "react";
// import Navbar from './../assets/components/Navbar';
import  "./Navbar.css";
import axios from 'axios';
function Navbar (){

  const [name,setName] = useState("")

  const handleName = (e) =>{
    setName(e.target.value);
  } 

  const [email,setEmail] = useState("") 
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }


  const handleBtn = (e) =>{
    e.preventDefault();
    const student = {name,email}
    console.log(student);   
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New Student Added")
      setName('');
      setEmail('');
    })
  }
  
    
  return(
    <div className="box-container">
        <div className="box-left">
          <div className="box-right">
              <form>
                  <label className="logo-reg">Registration</label>
                  <div className="input-field">
                       {/* <label>Name</label> */}
                       <input type="text" placeholder="Name" onChange={handleName} value={name} />
                  </div>
                  
                  <div className="input-field">
                      {/* <label>Email</label> */}
                      <input type="text" placeholder="Email" onChange={handleEmail} value={email} />
                     
                  </div>
                  <div className="input-field">
                      <button className="btn" onClick={handleBtn} >Submit</button>
                  </div>
              
              </form>
                 
          </div>
        </div>
    </div>

  );
}
export default Navbar