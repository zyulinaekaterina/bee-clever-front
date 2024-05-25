import React from 'react'

import { Helmet } from 'react-helmet'

import './frame1.css'

const Frame1 = (props) => {
  return (
    <div className="frame1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame1-frame1">
        <img
          src="/external/btntest1772-imn7-200h.png"
          alt="btntest1772"
          className="frame1-btntest"
        />
        <div className="frame1-header">
          <div className="frame1-btnsignin">
            <span className="frame1-text">
              <span>Sign in</span>
            </span>
          </div>
          <div className="frame1-logo">
            <img
              src="/external/image13378-61m-200h.png"
              alt="image13378"
              className="frame1-image1"
            />
            <span className="frame1-text02">
              <span>BeeClever</span>
            </span>
          </div>
        </div>
        <div className="frame1-frame">
          <img
            src="/external/honeycomb3381-hmbq-2000w.png"
            alt="honeycomb3381"
            className="frame1-honeycomb"
          />
          <span className="frame1-text04">
            <span className="frame1-text05">Прокачай свой скилл -</span>
            <br></br>
            <span className="frame1-text07">выбери курс,</span>
            <br></br>
            <span className="frame1-text09">
              который подходит
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>именно</span>
            <br></br>
            <span>ТЕБЕ</span>
          </span>
          <img
            src="/external/ellipse13383-2t5-400h.png"
            alt="Ellipse13383"
            className="frame1-ellipse1"
          />
          <img
            src="/external/nobeenohoneynoworknomoneylettering11911379photoroo3384-sqi8-500h.png"
            alt="nobeenohoneynoworknomoneylettering11911379Photoroo3384"
            className="frame1-nobeenohoneynoworknomoneylettering11911379-photoroo"
          />
        </div>
        <div className="frame1-btnsignup">
          <span className="frame1-text13">
            <span>Sign up</span>
          </span>
        </div>
        <span className="frame1-text15">
          <span>Регистрируйся и переходи к поиску курсов!</span>
        </span>
      </div>
    </div>
  )
}

export default Frame1
