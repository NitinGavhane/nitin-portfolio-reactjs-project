import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">nitin gavhane...</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            
            <a href="https://www.linkedin.com/in/nitnsgavhane/" className="footer__social-link" target="_blank" rel="noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://twitter.com/NitinGavhane_" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="bx bxl-twitter"></i>
            </a>

            <a href="https://github.com/NitinGavhane" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="bx bxl-github"></i>
            </a>
                
            </div>

            <span className='footer__copy'>&#169; Copyrights 2024. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer