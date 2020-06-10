import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Footer.module.css';
import logo from '../../assets/img/Logo.svg';
import faceBook from '../../assets/img/faceBookIcon.png';
import camera from '../../assets/img/camera.png';

function Footer() {
  return (
    <div className={ styles.container }>
      <div className = "row">
        <div class="col-12 col-md-6 col-lg-3">
          <img src = { logo } />
          <div>
            <img className = { styles.icons } src = { faceBook }></img>
            <img className = { styles.icons } src = { camera }></img>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <label  className = { styles.title }>COMPANY</label>
          <div>
            <h1 className = { styles.link }><a>About Convert</a></h1>
            <h1 className = { styles.link }><a>Pricing</a></h1>
            <h1 className = { styles.link }><a>Contact Us</a></h1>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <label  className = { styles.title }>WHY CHOOSE US</label>
          <div>
            <h1 className = { styles.link }><a>Fraud & Security</a></h1>
            <h1 className = { styles.link }><a>FAQ</a></h1>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <label  className = { styles.title }>LEGAL</label>
          <div>
            <h1 className = { styles.link }><a>Terms & Conditions</a></h1>
            <h1 className = { styles.link }><a>Privacy Policy</a></h1>
          </div>
        </div>
      </div>
      <p style = {{borderBottom :'solid 1px rgba(196, 196, 196, 0.2)'}}></p>
      <div style = {{ textAlign : 'center'}}>
        <p  className = { styles.copywriter }>Copyright© 2020 Convert All Rights Reserved</p>
      </div>
    </div>    
  )
}

export default CSSModules( Footer, styles );