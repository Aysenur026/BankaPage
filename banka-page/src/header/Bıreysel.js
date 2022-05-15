
import {auth,provider} from '../firebase';
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
function Bıreysel () {

  /*const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");*/
   let navigate =useNavigate();
  const loginGoogle = (e)=>{
    e.preventDefault();
    signInWithPopup(auth,provider)
    .then(()=>{
      navigate("/");
    })
  }
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
    
    <section className= " p-4 text-center pb-4 text-info ">
        <div className="bg-dark border rounded-5">
            <form>
              <hr></hr>
             <h4>AyBank Ticari İnternet Şubesine Hoşgeldiniz</h4>
  <div className="form-group col-md-12 p-5">
    <div className="form-group col-md">
    <label for="inputNo">Email</label>
      <input type="text" className="loginEmail" id="loginEmail" placeholder="Email"/* value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}*//>
     
    </div>
    <div className="form-group col-md">
      <label for="inputPassword" >Parola</label>
      <input type="password" className="loginPassword" id="inputPassword4" placeholder="Parola"/*value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}*//>
    </div>
  </div>
  <div className="form-group col-md">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" for="gridCheck" > Beni kontrol edin. </label>
    </div>
  </div>
  <button className="btn btn-primary" onClick={loginGoogle}>Google ile Oturum Aç</button>
  <hr></hr>
</form>
         </div>
        </section>
            </div>

            </div>
            </div>
 

        );
    }
    
    export default Bıreysel;
