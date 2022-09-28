import React from 'react'

import PropTypes from 'prop-types'

import './footer-b-g.css'

const FooterBG = (props) => {
  return (
    <div className={`footer-b-g-container ${props.rootClassName} `}>
      <footer className="footer-b-g-footer">
        <div className="footer-b-g-container1">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="footer-b-g-image"
          />
          <span className="footer-b-g-text">
            <span className="">© 2021 teleportHQ,</span>
            <br className=""></br>
            <span className=""> All Rights Reserved.</span>
            <span className="footer-b-g-text04"></span>
            <span className=""></span>
          </span>
          <div className="footer-b-g-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="footer-b-g-icon"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="footer-b-g-icon2"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="footer-b-g-icon4"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="footer-b-g-links-container">
          <div className="footer-b-g-container2">
            <div className="footer-b-g-container3">
              <span className="footer-b-g-text06">Product</span>
              <span className="footer-b-g-text07">Features</span>
              <span className="footer-b-g-text08">Pricing</span>
              <span className="footer-b-g-text09">Tutorials</span>
              <span className="footer-b-g-text10">Releases</span>
            </div>
            <div className="footer-b-g-container4">
              <span className="footer-b-g-text11">Company</span>
              <span className="footer-b-g-text12">About</span>
              <span className="footer-b-g-text13">Careers</span>
              <span className="footer-b-g-text14">Contact</span>
              <span className="footer-b-g-text15">Blog</span>
            </div>
          </div>
          <div className="footer-b-g-container5">
            <div className="footer-b-g-container6">
              <span className="footer-b-g-text16">Support</span>
              <span className="footer-b-g-text17">Terms of service</span>
              <span className="footer-b-g-text18">Privacy Policy</span>
              <span className="footer-b-g-text19">Legal</span>
              <span className="footer-b-g-text20">Help center</span>
            </div>
            <div className="footer-b-g-container7">
              <span className="footer-b-g-text21">Resources</span>
              <span className="footer-b-g-text22">Blog</span>
              <span className="footer-b-g-text23">Pricing</span>
              <span className="footer-b-g-text24">Service</span>
              <span className="footer-b-g-text25">Product</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

FooterBG.defaultProps = {
  rootClassName: '',
}

FooterBG.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterBG
