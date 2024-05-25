import React from 'react'

import { Helmet } from 'react-helmet'

import './entrance.css'

const Entrance = (props) => {
  return (
    <div className="entrance-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="entrance-entrance">
        <img
          src="/external/honeycomb1284-smwh-2000w.png"
          alt="honeycomb1284"
          className="entrance-honeycomb"
        />
        <div className="entrance-header">
          <div className="entrance-logo">
            <img
              src="/external/image11284-n8o3-200h.png"
              alt="image11284"
              className="entrance-image1"
            />
            <span className="entrance-text">
              <span>BeeClever</span>
            </span>
          </div>
          <div className="entrance-btnsignup">
            <span className="entrance-text02">
              <span>Sign up</span>
            </span>
          </div>
        </div>
        <input type="text" placeholder className="entrance-inputmail" />
        <span className="entrance-text04">
          <span>Пароль</span>
          <br></br>
          <span></span>
        </span>
        <div className="entrance-inputpass">
          <div className="entrance-frame7"></div>
        </div>
        <span className="entrance-text08">
          <span>Электронная почта</span>
        </span>
        <div className="entrance-btnsignin">
          <span className="entrance-text10">
            <span>Войти</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Entrance
