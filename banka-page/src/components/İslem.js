import React from 'react';

const İslem = (props) =>{
 
       return(
         
         <div className="row ">
             
            {props.varlik.map((varligim) => (
              <><div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Gelen Varlıklar</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{varligim.gelen}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Giden Varlıklar</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{varligim.gıden}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Alışveriş Harcamaları</p>

                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{varligim.alısveris}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Tüm İşlemlerim</p>

                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{varligim.tum}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                    
                      </div>
                    </div>
                    </div>
                    </div>
                </>

              ) 
               )
            }
            </div>
       )
      
          }

          export default İslem;