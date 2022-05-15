import React from "react";
import {auth,provider}from "../firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
function Kurumsal() {

  let navigate =useNavigate();
   const signInWithGoogle =() =>{
 
    signInWithPopup (auth,provider)
    .then(() => {
     navigate("/kurumsalsayfa");
    });
  };
     
    const userOut =() => {
      signOut(auth).then(()=>{
        localStorage.clear();
        navigate("/")
      })
    };
   
 
    return (
        <div className="Kurumsal">
            <div className="row">
            <div className="col-lg-8">

            <section className= " p-4 text-center pb-4 text-info ">
               <div className="bg-dark border rounded-5">
            
              <hr></hr>
            <h4>AyBank Ticari İnternet Şubesine Hoşgeldiniz</h4>

             <button className= "btn btn-primary" onClick={signInWithGoogle}>Google ile giriş yap</button>
             <button className="btn btn-primary m-4" onClick={userOut}>Oturumu Kapat</button>
                
            </div>
            </section>
            </div>
            </div>
            </div>

        );
    }
    
    export default Kurumsal;
