
import React, {Component} from 'react';
/*import {BrowserRouter as Router,
Route} from 'react-router-dom';
import Header from './Header';
import Kullanıcı from './Kullanıcı';
import  İslem from './İslem';
import Link from './Link';*/
import Layout from './Layout';
 

class App extends Component {
  
     render() {
    return (
      <>
      <div className='container'>
        <Layout>
        {this.props.children}
        </Layout>
        </div>
        <div className='container'>
          <Layout>{this.props.varligim}</Layout>
          </div>
          <div className='container'>
            <Layout>
            {this.props.profil}
            </Layout>
       </div>
       </>
      
    )
}
}
export default App;