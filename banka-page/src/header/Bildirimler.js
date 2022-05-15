import React from "react";

const Bildirimler = () => {
    return (
        
        <div className="container p-5">
          
          <div className="row">
          
       <section className="p-4 w-100 bg-dark">
         <hr></hr>
       <h3 h3-light>Bildirimleriniz</h3>
      <div className="row justify-content-center ">
        <div className="col-xl-5 col-lg-6 mb-2">
          <div className="toast show fade text-white bg-info" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="info" data-mdb-autohide="false">
            <div className="toast-header text-white bg-info">
              <i className="fas fa-info-circle fa-lg me-2"></i>
              <strong className="me-auto" >MDBootstrap</strong>
              <small>11 dakika önce</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Kapatmak" _mstaria-label="112086"></button>
            </div>
            <div className="toast-body" >Merhaba Dünya! Bu bir tost mesajı.</div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 mb-2">
          <div className="toast show fade text-white bg-warning" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="warning" data-mdb-autohide="false">
            <div className="toast-header text-white bg-warning">
              <i className="fas fa-exclamation-triangle fa-lg me-2"></i>
              <strong className="me-auto" _msthash="3850600" _msttexthash="177905">MDBootstrap</strong>
              <small _msthash="3751930" _msttexthash="217646">11 dakika önce</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Kapatmak" _mstaria-label="112086"></button>
            </div>
            <div className="toast-body" _msthash="3041246" _msttexthash="902200">Merhaba Dünya! Bu bir tost mesajı.</div>
          </div>
        </div>
      </div>
      <div className="row mb-2 justify-content-center">
        <div className="col-xl-5 col-lg-6 mb-2">
          <div className="toast show fade text-white bg-success" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="success" data-mdb-autohide="false">
            <div className="toast-header text-white bg-success">
              <i className="fas fa-check fa-lg me-2"></i>
              <strong className="me-auto" _msthash="3850678" _msttexthash="177905">MDBootstrap</strong>
              <small _msthash="3752008" _msttexthash="217646">11 dakika önce</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Kapatmak" _mstaria-label="112086"></button>
            </div>
            <div className="toast-body" _msthash="3041324" _msttexthash="902200">Merhaba Dünya! Bu bir tost mesajı.</div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 mb-2">
          <div className="toast show fade text-white bg-danger" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="danger" data-mdb-autohide="false">
            <div className="toast-header text-white bg-danger">
              <i className="fas fa-exclamation-circle fa-lg me-2"></i>
              <strong className="me-auto" _msthash="3851094" _msttexthash="177905">MDBootstrap</strong>
              <small _msthash="3752411" _msttexthash="217646">11 dakika önce</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Kapatmak" _mstaria-label="112086"></button>
            </div>
            <div className="toast-body" _msthash="3041623" _msttexthash="902200">Merhaba Dünya! Bu bir tost mesajı.</div>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
    </div>
        </div>
        


    );
  }
  
  export default Bildirimler;