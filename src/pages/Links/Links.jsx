import React from 'react';
import style from './links.module.css';
import prezident from './images/img1.svg'
import parlament from './images/img2.svg'
import govuz from './images/img3.svg'
import wwwuz from './images/img4.svg'
import senat from './images/img5.svg'
import mygovuz from './images/img6.svg'
const Links = () => {
  return (
    <>
      <div className="container">
    
        <h2 className={style.title}>Foydali havolalar</h2>
        <div className={style.links}>
          <div className={style.center}>
            <div className={style.left}>
              <div className={style.box}>
                <a className={style.havola} href="https://prezident.uz" rel="noreferrer" target="_blank">
                  <div className={style.media}>
                    <div className={style.mediaimages}>
                      <img src={prezident} alt="" />
                    </div>
                    <div className={style.mediabody}>
                      O'ZBEKISTON RESPUBLIKASI PREZIDENTI MATBUOT XIZMATI
                    </div>
                  </div>

                </a>
                <a className={style.havola} rel="noreferrer" href="https://parliament.gov.uz" target="_blank">
                  <div className={style.media}>
                    <div className={style.mediaimages}>
                      <img src={parlament} alt="" />
                    </div>
                    <div className={style.mediabody}>
                    O'ZBEKISTON RESPUBLIKASI OLIY MAJLISI QONUNCHILIK PALATASI
                    </div>
                  </div>

                </a>
                <a className={style.havola} rel="noreferrer" href="https://gov.uz" target="_blank">
                  <div className={style.media}>
                    <div className={style.mediaimages}>
                      <img src={govuz} alt="" />
                    </div>
                    <div className={style.mediabody}>
                    O'ZBEKISTON RESPUBLIKASI HUKUMATI PORTALI
                    </div>
                  </div>

                </a>

              </div>
            </div>
            <div className={style.right}>
            <a className={style.havola} rel="noreferrer" href="https://prezident.uz" target="_blank">
                  <div className={style.media}>
                    <div className={style.mediaimages}>
                      <img src={wwwuz} alt="" />
                    </div>
                    <div className={style.mediabody}>
                      O'ZBEKISTON RESPUBLIKASI PREZIDENTI MATBUOT XIZMATI
                    </div>
                  </div>

                </a>
                <a className={style.havola} rel="noreferrer" href="https://parliament.gov.uz" target="_blank">
                  <div className={style.media}>
                    <div className={style.mediaimages}>
                      <img src={senat} alt="" />
                    </div>
                    <div className={style.mediabody}>
                    O'ZBEKISTON RESPUBLIKASI OLIY MAJLISI QONUNCHILIK PALATASI
                    </div>
                  </div>

                </a>
                <a className={style.havola} rel="noreferrer" href="https://gov.uz" target="_blank">
                  <div className={style.media}>
                    <div className={style.mediaimages}>
                      <img src={mygovuz} alt="" />
                    </div>
                    <div className={style.mediabody}>
                    O'ZBEKISTON RESPUBLIKASI HUKUMATI PORTALI
                    </div>
                  </div>

                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Links;