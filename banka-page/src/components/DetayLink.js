import React from "react";


const DetayLink = (props) =>{
 
    return(
      <div className="row">
          
         {props.alısveris.map((alısverisim) => (
         <div className ="col-lg-4" key={alısverisim.id}>
         <div className="card mb-5 text-dark" >
        <img className="card" src="https://bubilgi.net/wp-content/uploads/2018/07/siyah-arka-plan-2-buyuk.jpg" alt="card" width={'250px'} height={'230px'}></img>
         <div className="card-img-overlay">
           <div className="card-body">
           <p className="card-text">{alısverisim.name}</p>
           <p className="card-text">{alısverisim.name1}</p>
           <p className="card-text">{alısverisim.name2}</p>
           <p className="card-text">{alısverisim.name3}</p>
           </div>
           </div>
           </div>
           </div>
             ))}
           </div>
           
         )
         }
         export default DetayLink;
