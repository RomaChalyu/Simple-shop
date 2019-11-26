import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="content__wrapper g-container">
        <div className="footer__content">
          <h4>HELP/INFO</h4>
          <p className="footer__text">FAQ</p>
          <p className="footer__text">Size Guide</p>
          <p className="footer__text">Delivery Information</p>
          <p className="footer__text">Payment methods</p>
        </div>
        <div className="footer__content">
          <h4>ABOUT US</h4>
          <p className="footer__text">About us</p>
          <p className="footer__text">Customer reviews</p>
          <p className="footer__text">Blog</p>
          <p className="footer__text">Careers</p>
        </div>
      </div>
      <div className="footer__social-networks">
        <h4 className="social-networks__text">We are in social networks:</h4>
        <div className="link-social-networks__wrapper">
          <link href="*" className="instagram" />
          <link href="*" className="facebook" />
          <link href="*" className="YouTube" />
        </div>
      </div>
    </div>
  )
}

export default Footer
