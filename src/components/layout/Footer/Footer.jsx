import './Footer.css';
import mailImg from './../../img/footer/mail.svg';
import logoImg from './../../img/header/nav/logo.svg';
import twitImg from './../../img/footer/social/1.png';
import faceImg from './../../img/footer/social/2.png';
import instImg from './../../img/footer/social/3.png';
import gitImg from './../../img/footer/social/4.png';

import visaImg from './../../img/footer/pay/visa.svg';
import masterImg from './../../img/footer/pay/master.svg';
import ppImg from './../../img/footer/pay/paypal.svg';
import apayImg from './../../img/footer/pay/apay.svg';
import gpayImg from './../../img/footer/pay/gpay.svg';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="container">

          <div className="footer__black">
            <div className="footer__black-title">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className="footer__black-form">
              <div className="footer__black-input-container">
                <input
                  type="text"
                  className="footer__black-input"
                  placeholder="Enter your email address"
                />
                <img className="footer__black-input-img" src={mailImg} alt="" />
              </div>
              <a href="#!" className="footer__black-btn btn">
                Subscribe to Newsletter
              </a>
            </div>

          </div>

          <div className="footer__row">

            <div className="foooter__info">
              <img className='footer__logo' src={logoImg} alt="" />
              <div className="footer__info-text t-60-op">
                We have clothes that suits your style and which
                you’re proud to wear. From women to men.
              </div>
              <div className="footer__info-logo">
                <img src={twitImg} alt="twiter" />
                <img src={faceImg} alt="facebook" />
                <img src={instImg} alt="instagramm" />
                <img src={gitImg} alt="github" />
              </div>
            </div>
            {/* company */}
            <div class="footer__info-company footer__info-column">
              <div class="footer__info-company-title footer__info-title">
                COMPANY
              </div>
              <ul>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Features</a></li>
                <li><a href="#!">Works</a></li>
                <li><a href="#!">Career</a></li>
              </ul>
            </div>
            {/* Help */}
            <div class="footer__info-help footer__info-column">
              <div class="footer__info-help-title footer__info-title">
                HELP
              </div>
              <ul>
                <li><a href="#!">Customer Support</a></li>
                <li><a href="#!">Delivery Details</a></li>
                <li><a href="#!">Terms & Conditions</a></li>
                <li><a href="#!">Privacy Policy</a></li>
              </ul>
            </div>
            {/* faq */}
            <div class="footer__info-faq footer__info-column">
              <div class="footer__info-faq-title footer__info-title">
                FAQ
              </div>
              <ul>
                <li><a href="#!">Account</a></li>
                <li><a href="#!">Manage Deliveries</a></li>
                <li><a href="#!">Orders</a></li>
                <li><a href="#!">Payments</a></li>
              </ul>
            </div>
            {/* resoures */}
            <div class="footer__info-resources footer__info-column">
              <div class="footer__info-resources-title footer__info-title">
                RESOURCES
              </div>
              <ul>
                <li><a href="#!">Free eBooks</a></li>
                <li><a href="#!">Development Tutorial</a></li>
                <li><a href="#!">How to - Blog</a></li>
                <li><a href="#!">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__end">
            <div className="footer__rights">
              Shop.co © 2000-2023, All Rights Reserved
            </div>
            <div className="footer__pay">
              <div class="footer__pay-logo">
                <a href="#!"><img className='footer__pay-img' src={visaImg} alt="" /></a>
              </div>
              <div class="footer__pay-logo">
                <a href="#!"><img className='footer__pay-img' src={masterImg} alt="" /></a>
              </div>
              <div class="footer__pay-logo">
                <a href="#!"><img className='footer__pay-img' src={ppImg} alt="" /></a>
              </div>
              <div class="footer__pay-logo">
                <a href="#!"><img className='footer__pay-img' src={apayImg} alt="" /></a>
              </div>
              <div class="footer__pay-logo">
                <a href="#!"><img className='footer__pay-img' src={gpayImg} alt="" /></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer >

  );
}

export default Footer;
