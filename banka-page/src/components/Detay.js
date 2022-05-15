import React from 'react';
import İslem from './İslem';

class Detay extends React.Component {

state={

    varlik:[
      {
           "id":3,
           "gelen":"+5.000 TL",
           "gıden":"-1.750 TL",
           "alısveris":"-1.000 TL",
           "tum":"5000 TL , 2.750 TL",
       },
        ]
      }
  
    render() {
      return(
        <div className="container">
        <div className="row">
        <div className="col-lg-12 p-5">

        <İslem
          varlik={this.state.varlik} />
          </div>
        </div>
        
      </div>

     
      );
    }
  }
  
    
    export default Detay;