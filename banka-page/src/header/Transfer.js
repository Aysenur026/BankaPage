import React ,{ useState} from "react";
import{addDoc, collection} from "firebase/firestore";
import {auth, db} from "../firebase";
import{useNavigate} from "react-router-dom";
function Transfer  () {
    const [name,setName]=useState("")
    const [surname,setSurname]=useState("")
    const [tckn,setTckn]=useState("")
    const [iban,setIban]=useState("")
    const [banka,setBanka]=useState("")
    const [sube,setSube]=useState("")
    const [acıklama,setAcıklama]=useState("")


    const postCollection =collection(db,"transferPost")
     let navigate=useNavigate();

    const transferPost = async(event)=>{
      event.preventDefault();
       await addDoc(postCollection,{
        name,surname,tckn,iban,banka,sube,acıklama,
        author :{name:auth.currentUser.displayName, id:auth.currentUser.uid},
      });
       navigate("/transferbilgi");
    };
    
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
    
        <section className= " p-4 text-center pb-3 text-info">
            <div className="bg-dark border rounded-5">
        <form>
          <hr></hr>
        <h3>AyBank Transfer ve Ödeme Ekranına Hoşgeldiniz</h3>
  <div className="row ">
    <div className="col p-4">
      <div className="form-group col-md-10">
      <label className="form-label p-3">Ad</label>
        <input type="text" id="name" className="name" onChange={(event)=>{setName(event.target.value);}}/>
      </div>
    </div>
    <div className="col p-4">
      <div className="form-group col-md-10">
      <label className="form-label p-3" >Soyad</label>
        <input type="text" id="surname" className="surname" onChange={(event)=>{setSurname(event.target.value);}} />  
      </div>
    </div>
  </div>

  <div className="form-group col-md-12 ">
  <label className="form-label p-3" >TCKN</label>
    <input type="number" id="tckn" className="tckn"onChange={(event)=>{setTckn(event.target.value);}} />
  </div>


  <div className="form-group col-md-12">
  <label className="form-label p-3" >Transfer Iban No</label>
    <input type="number" id="iban" className="iban"onChange={(event)=>{setIban(event.target.value);}} />
  </div>


  <div className="form-group col-md-12">
  <label className="form-label p-3" >Transfer Banka Adı</label>
    <input type="text" id="banka" className="banka" onChange={(event)=>{setBanka(event.target.value);}}/>
    </div>

 
  <div className="form-group col-md-12">
  <label className="form-label p-3" >Transfer Şube Kodu</label>
    <input type="number" id="sube" className="sube" onChange={(event)=>{setSube(event.target.value);}} />
    </div>


  <div className="form-group col-md-12">
  <label className="form-label p-3">Açıklama Kısmı</label>
    <textarea className="acıklama" id="acıklama" rows="4"onChange={(event)=>{setAcıklama(event.target.value);}}></textarea>
    </div>
      
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" for="gridCheck" > Girdiğiniz Bilgileri Onaylıyor Musunuz? </label>
    </div>
  
  

  <button className="btn btn-primary btn-block form-group-center col-md-10 m-5" onClick={transferPost}>Gönder</button>
  <hr></hr>
</form>
</div>
</section>
</div>
</div></div>
    );
  }
  
  export default Transfer;