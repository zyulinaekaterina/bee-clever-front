import React from 'react'

import { Helmet } from 'react-helmet'

import './mainpage.css'

const Mainpage = (props) => {
  return (
    <div className="mainpage-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mainpage-mainpage">
        <div className="mainpage-honeycomb">
          <img
            src="/external/polygon871514-dwsd.svg"
            alt="Polygon871514"
            className="mainpage-polygon87"
          />
          <img
            src="/external/polygon881514-z3o.svg"
            alt="Polygon881514"
            className="mainpage-polygon88"
          />
          <img
            src="/external/polygon891514-cpbr.svg"
            alt="Polygon891514"
            className="mainpage-polygon89"
          />
          <img
            src="/external/polygon901514-zcm.svg"
            alt="Polygon901514"
            className="mainpage-polygon90"
          />
          <img
            src="/external/polygon961514-3fg.svg"
            alt="Polygon961514"
            className="mainpage-polygon96"
          />
          <img
            src="/external/polygon1071514-x2ys.svg"
            alt="Polygon1071514"
            className="mainpage-polygon107"
          />
          <img
            src="/external/polygon1101515-c9ql.svg"
            alt="Polygon1101515"
            className="mainpage-polygon110"
          />
          <img
            src="/external/polygon1121515-79mf.svg"
            alt="Polygon1121515"
            className="mainpage-polygon112"
          />
          <img
            src="/external/polygon971515-0cb.svg"
            alt="Polygon971515"
            className="mainpage-polygon97"
          />
          <img
            src="/external/polygon991515-w4yk.svg"
            alt="Polygon991515"
            className="mainpage-polygon99"
          />
          <img
            src="/external/polygon911515-68v5.svg"
            alt="Polygon911515"
            className="mainpage-polygon91"
          />
          <img
            src="/external/polygon921515-bjz8.svg"
            alt="Polygon921515"
            className="mainpage-polygon92"
          />
          <img
            src="/external/polygon931515-mi4.svg"
            alt="Polygon931515"
            className="mainpage-polygon93"
          />
          <img
            src="/external/polygon941515-smgv.svg"
            alt="Polygon941515"
            className="mainpage-polygon94"
          />
          <img
            src="/external/polygon1001515-zee8.svg"
            alt="Polygon1001515"
            className="mainpage-polygon100"
          />
          <img
            src="/external/polygon1021516-puzn.svg"
            alt="Polygon1021516"
            className="mainpage-polygon102"
          />
          <img
            src="/external/polygon1031516-sphb.svg"
            alt="Polygon1031516"
            className="mainpage-polygon103"
          />
          <img
            src="/external/polygon1051516-o3w.svg"
            alt="Polygon1051516"
            className="mainpage-polygon105"
          />
          <img
            src="/external/polygon1061516-c0gl.svg"
            alt="Polygon1061516"
            className="mainpage-polygon106"
          />
          <img
            src="/external/polygon1131516-hxx.svg"
            alt="Polygon1131516"
            className="mainpage-polygon113"
          />
          <img
            src="/external/polygon1141516-hh9v.svg"
            alt="Polygon1141516"
            className="mainpage-polygon114"
          />
        </div>
        <div className="mainpage-minicourse">
          <img
            src="/external/photo1519-se26-300h.png"
            alt="Photo1519"
            className="mainpage-photo"
          />
          <img
            src="/external/name1519-w68h-200h.png"
            alt="Name1519"
            className="mainpage-name"
          />
          <a href="http://localhost:3000/coursepage">
            <span className="mainpage-text">
              <span>Course_name</span>
            </span>
          </a>
          <img
            src="/external/tag1519-3e1v-200h.png"
            alt="Tag1519"
            className="mainpage-tag"
          />
          <img
            src="/external/duration1519-nqen-200h.png"
            alt="Duration1519"
            className="mainpage-duration"
          />
          <img
            src="/external/cost1519-zuri-200h.png"
            alt="Cost1519"
            className="mainpage-cost"
          />
          <span className="mainpage-text02">
            <span>Стоимость:</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
          <span className="mainpage-text08">
            <span>Основные теги:</span>
            <br></br>
            <span> </span>
          </span>
          <span className="mainpage-text12">
            <span>Длительность:</span>
            <br></br>
            <span> </span>
          </span>
          <img
            src="/external/frame1511-hpm.svg"
            alt="Frame1511"
            className="mainpage-frame"
          />
        </div>
        <div className="mainpage-header">
          <div className="mainpage-logo">
            <img
              src="/external/image11518-6eav-200h.png"
              alt="image11518"
              className="mainpage-image1"
            />
            <span className="mainpage-text16">
              <span>BeeClever</span>
            </span>
          </div>
          <a href="http://localhost:3000">
            <div className="mainpage-btnlogout">
              <span className="mainpage-text18">
                <span>Log out</span>
              </span>
            </div>
          </a>
        </div>
        <span className="mainpage-text20">
          <span>
            Выбор тегов:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          src="/external/image61518-k43f-400h.png"
          alt="image61518"
          className="mainpage-image6"
        />
      </div>
    </div>
  )
}

export default Mainpage
