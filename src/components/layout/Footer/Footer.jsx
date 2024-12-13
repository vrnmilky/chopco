import './Footer.css';
import mailImg from './../../img/footer/mail.svg';

function Footer() {
  return (
    <footer className="footer">
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
        
      </div>
    </footer>

  );
}

export default Footer;
