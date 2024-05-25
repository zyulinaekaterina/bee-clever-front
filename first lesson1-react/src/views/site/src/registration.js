import React from 'react'

import { Helmet } from 'react-helmet'

import './registration.css'

const Registration = (props) => {
  return (
    <div className="registration-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="registration-registration">
        <img
          src="/external/honeycomb1282-jtwu-2000w.png"
          alt="honeycomb1282"
          className="registration-honeycomb"
        />
        <div className="registration-header">
          <div className="registration-logo">
            <img
              src="/external/image11282-q06c-200h.png"
              alt="image11282"
              className="registration-image1"
            />
            <span className="registration-text">
              <span>BeeClever</span>
            </span>
          </div>
          <div className="registration-btnsignin">
            <span className="registration-text02">
              <span>Sign in</span>
            </span>
          </div>
        </div>
        <input type="text" placeholder className="registration-inputname" />
        <input type="text" placeholder className="registration-inputmail" />
        <input type="text" placeholder className="registration-inputpass" />
        <span className="registration-text04">
          <span>Имя и Фамилия</span>
        </span>
        <span className="registration-text06">
          <span>Пароль</span>
          <br></br>
          <span></span>
        </span>
        <span className="registration-text10">
          <span>Электронная почта</span>
        </span>
        <div className="registration-btnsignup">
          <span className="registration-text12">
            <span>Регистрация</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Registration
