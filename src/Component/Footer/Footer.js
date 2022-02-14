import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

export default function Footer () {
    const {t} = useTranslation();
    return (
      <div>
          <div className="row">
            <div className="col-md-3"></div>
                <div className="col-md-6 footer-contact">
                    <h4 className="text-primary">What's Next?</h4>
                    <h2>Let's Connect</h2>
                    <p>If you are interested in working on a project or have any questions, please leave an email and I will get back to you as soon as possible.</p>
                    <a href="mailto:cheikabassben@gmail.com" className="btn btn-warring border text-white my-4">Say Hello 👋</a>
                    <div className='col text-center profile-socieal-links'>
                        <a href='https://www.facebook.com/abasscheik.ben'>
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href='https://twitter.com/abasscheik1'>
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href='https://github.com/abass-dev'>
                          <i className="fa fa-github"></i>
                        </a>
                        <a href='https://github.com/abass-dev?tab=repositories'>
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a href='mailto:cheikabassben@gmail.com'>
                          <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            <div className="col-md-3"></div>
            <p className="copyright">Copyright © 2021 by Abass Dev, All right reserved</p>
          </div>
      </div>
    );
  }