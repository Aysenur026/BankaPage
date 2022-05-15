import React, { useEffect, useState } from "react";
import {getDocs,collection} from "firebase/firestore";
import {db} from '../firebase';

function TransferBilgi(){
   
    const [postLists,setPostList] = useState([]);

    
    const postCollection =collection(db,"transferPost");
    
    useEffect(() => {
        const getPosts = async() =>{
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ));
        };
        getPosts();
    });


return(
 <div className="transferGet">
     {postLists.map((post)=> {
         return <div className="post">
             <div className="transfers">
               
             <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body"> 
                <div className="row">
                <hr></hr>
                <div className="row">
                <h3>AyBank Transfer ve Ödeme Bilgileri</h3>
                  <hr></hr>
                </div>
                  <div className="col-sm-3">
                    <p className="mb-0">Ad</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.name}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Soyad</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.surname}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">TCKN</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.tckn}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">İBAN NO</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.iban}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Banka Ad</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.banka}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Şube Kodu</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.sube}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Açıklama Notu</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{post.acıklama}</p>
                  </div>
                </div>
                <hr></hr>





             </div>
             </div>
             </div>
             </div>
             </div>
     
 })}
 </div>
 );


}
export default TransferBilgi;