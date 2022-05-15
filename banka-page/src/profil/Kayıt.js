
import React, { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";

import {auth} from '../firebase';

function Kayıt() {

  const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const register = async(e) =>{
   e.preventDefault();
      try{
  const user =await createUserWithEmailAndPassword(
       auth,
       email,
       password
       
       );
       console.log(user)
      }catch(error){
        console.log(error.message);
      }
 };
  
    return(
          <form>
        <section className="vh-100 gradient-custom">
          
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
      
                    <h2 className="fw-bold mb-2 text-uppercase">Kayıt Ol</h2>
                   
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="email" className="form-control form-control-lg"value={email} onChange={(e)=>setEmail(e.target.value)} />
                      <label className="form-label" >Email</label>
                    </div>
      
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="password" className="form-control form-control-lg"value={password} onChange={(e)=>setPassword(e.target.value)} />
                      <label className="form-label">Şifre</label>
                    </div>
      
                    <button className="btn btn-outline-light btn-lg px-5" onClick={register}>Kayıt Ol</button>
      
      
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
      </form>

    );


}

export default Kayıt;
