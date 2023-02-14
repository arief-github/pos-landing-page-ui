import React from "react";

import styles from './Hero.module.css';
import Button from "../generic/Button";

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero_title}>point of sales</h1>
      <p className={styles.hero_subtitle}>The POS Application helps manage your store</p>
      <div style={{ maxWidth: '100%', marginTop: 65 }}>
        <img src="/images/hero/dashboard.svg" alt="gambar dashboard"/>
        <img src="/images/hero/loginpage.svg" alt="gambar halaman login" className={ styles.showcase__login }/>
        <img src="/images/hero/masterdatapage.svg" alt="gambar halaman master data"/>
      </div>
      <div style={ { display: 'flex', gap: 30, marginTop: 65 } }>
          <Button backgroundcolor="#083D8B" color="#C6D4E8" bordercolor="#083D8B">Get Started</Button>
          <Button backgroundcolor="#FBB42F" color="#161616" bordercolor="#FBB42F">Contact Sale</Button>
      </div>
    </div>
  );
}

export default Hero;