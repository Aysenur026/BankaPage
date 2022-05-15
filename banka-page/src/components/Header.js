import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
 
 class Header extends React.Component{
 
 render(){
  
       return(
          <>
              <header>
              <section>
           <nav className="navbar navbar-expand-lg navbar-dark">
             <div className="container-fluid gx-5">

               <div className="collapse navbar-collapse" >
                 <ul className="navbar-nav ">
                   <li className="nav-item active m-2">
                   <Link to="/"style={{color:"#9C6D1E"}}>Anasayfa</Link>
                   </li>
                   <li className="nav-item m-2">
                     <Link to="/Transfer"style={{color:"#9C6D1E"}}>Transferler ve Ödemeler</Link>
                   </li>
                   <li className="nav-item m-2">
                   <Link to="/Bildirimler"style={{color:"#9C6D1E"}}>Bildirimlerim</Link>
                   </li>
                   <li className="nav-item m-2">
                   <Link to="/Hakkimizda"style={{color:"#9C6D1E"}}>Hakkımızda</Link>
                   </li>
                   <li className="nav-item m-2">
                   <Link to="/Kayit"style={{color:"#9C6D1E"}}>Kayıt Ol</Link>
                   </li>
                 </ul>
               </div>
             </div>
             <input type="search search-width-lg-1" placeholder= "Arama" className="form-control" style={{width:"35rem"}} />
             <button type="button btn-secondary"style={{color:"#9C6D1E"}} className="btn" >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
               </svg><i className="bi bi-search"></i>
             </button>
           </nav>
         </section>
         <div className="px-4 py-5 my-5 text-center text-light">

           <img className="d-block mx-auto mb-4" src="https://i.pinimg.com/originals/47/7f/a4/477fa4df6509e5120468638e7ab14d22.png" alt="" width="100" height="100"></img>
            <h1 className="display-5 fw-bold-light"style={{color:"#9C6D1E"}}> AYBANK</h1>
            <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Sizlere hizmet etmekten mutluluk duyuyoruz...</p>
      

           <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
             <button className="btn btn-light btn-lg px-4 gap-3"><Link to="/Bireysel"style={{color:"#9C6D1E"}}>Bireysel</Link></button>
             <button className="btn btn-outline-light btn-lg px-4"><Link to="/Kurumsal"style={{color:"#9C6D1E"}}>Kurumsal</Link></button>
           </div>
           </div>
           </div>
           </header>
         <Footer> 
           
           </Footer></>

    
       )}

 }
 export default Header;