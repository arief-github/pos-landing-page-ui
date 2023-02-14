import styled from "styled-components";
import style from './Footer.module.css';

const FooterSection = styled.footer`
  margin-top: 100px;
  padding-top: 40px;
  background-color: #333;
  color: #fff;
  text-align: center;
  height: auto;

  p {
    margin: 0 auto;
    padding: 20px;
  }
`;

function Footer() {
  return (
      <FooterSection>
        <div className={style.footer__top}>
          <div className={ style.footer__logo }>
            <img src="/images/footer/logo.svg" alt="logo pt catur jaya solusi bersama"/>
            <p style={{ textAlign: 'center' }}>PT. Catur Jaya Solusi Bersama</p>
          </div>
          <div className={ style.footer__menu }>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Plan</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className={ style.footer__social_media }>
            <span>Follow Our Social Media</span>
            <ul>
              <li> <img src="/images/footer/twitter.svg" alt="gambar twitter"/></li>
              <li> <img src="/images/footer/fb.svg" alt="gambar facebook"/></li>
              <li> <img src="/images/footer/ig.svg" alt="gambar instagram"/></li>
            </ul>
          </div>
        </div>
        <p>Copyright 2023 | Point Of Sales by PT. Catur Jaya Solusi Bersama</p>
      </FooterSection>
  );
}

export default Footer;