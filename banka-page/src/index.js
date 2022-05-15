import React from 'react';

import ReactDOM from 'react-dom';
import{BrowserRouter, Routes, Route} from "react-router-dom";

import Detay from './components/Detay';
import Header from './components/Header';
import Bıreysel from './header/Bıreysel';
import Kurumsal from './header/Kurumsal';
import Bildirimler from './header/Bildirimler';
import Transfer from './header/Transfer';
import Hakkımızda from './header/Hakkımızda';
import TransferBilgileri from './header/TransferBilgileri';
import KurumSignPage from './pages/KurumSignPage';
import Kayıt from './profil/Kayıt';
import KayıtSil from './profil/KayıtSilme';

ReactDOM.render(
    

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
        
        <Route path="/detay" element={< Detay/>} />
       
        
        <Route path='/bildirimler'element={< Bildirimler/>}/>
        <Route path='/transfer'element={< Transfer/>}/>
        
        <Route path='/transferbilgi' element={<TransferBilgileri/>}/>
        <Route path='/hakkimizda'element={< Hakkımızda/>}/>
          <Route path='/bireysel' element={<Bıreysel/>}/>
          <Route path='/kurumsal' element={<Kurumsal/>}/>
              <Route path='/kurumsalsayfa' element={<KurumSignPage/>}/>
       <Route path='/kayit' element={<Kayıt/>}/>
       <Route path='/kayitsil' element={<KayıtSil/>}/>
    </Routes>
  </BrowserRouter>,
document.getElementById('root')
);




