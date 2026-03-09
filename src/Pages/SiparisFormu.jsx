import '/src/styles/SiparisFormu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React from 'react';


function SiparisFormu() {

  return (
    <>
      <header className="top-header">
        <img src= "/images/iteration-1-images/logo.svg" />
        <div className='div-link'>
          <Link to="/" className='link'>Anasayfa</Link>
          <span>-</span>
          <Link to="/siparis" className='link active'>Sipariş</Link>
        </div>
      </header>

      <main className="content">
        <div className='group16'>
          <h2>Position Absolute Acı Pizza</h2>
          <div className = "group15">
            <span>85.5₺</span>
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default SiparisFormu
