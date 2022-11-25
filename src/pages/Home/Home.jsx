import React from 'react';
import style from './home.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import Navbar from '../../component/Navbar/Navbar.jsx'
const Home = () => {
  return (
    <div>   
      <div className={style.header}>
        <Navbar />
       
        <div className={style.mainHeader}>
        <hr className={style.hrr}/>
          <div className={style.mainHeader1}>
            <div className={style.mainText}>
              <h1 className={style.texth1}>
                Qo‘rg‘ontepa tumani hokimligi matbuot xizmati
              </h1>
            </div>
            <div className={style.mainLink}>
              <div className={style.link}>
                <FaFacebookF />
              </div>
              <hr />
              <div className={style.link}>
                <FaTelegramPlane />
              </div>
              <hr />
              <div className={style.link}>
                <AiOutlineMail />
              </div>

            </div>     
            <div className={style.mainParagraf}>
              <p>Iqtidorli yoshlarni aniqlash, tanlash, o‘qitish va tarbiyalash, yosh iste’dodlarni yanada
                qo‘llab-quvvatlash va rag‘batlantirish, darsliklar va o‘quv-uslubiy qo‘llanmalarni
                tayyorlash va nashr etishdagi muammolarni bartaraf qilish ishlarini sifat jihatidan
                yangi bosqichga ko‘tarish</p>
            </div>
          </div>
          <hr className={style.hrr1}/>
        </div>

        <div className={style.footerHeader}>
          <AiFillCaretRight className={style.arrow} />
          <div className={style.footerStatic}>
            <p> Aholi Soni </p>
            <h1 >  218,4  </h1>
            <p> ming kishi</p>
          </div>
          <hr className={style.line} />
          <AiFillCaretRight className={style.arrow} />
          <div className={style.footerStatic}>
            <p> Yoshlar Soni </p>
            <h1 > 72,4 </h1>
            <p>ming kishi</p>
          </div>
          <hr className={style.line} />
          <AiFillCaretRight className={style.arrow} />
          <div className={style.footerStatic}>
            <p> Tadbirkorlar soni </p>
            <h1 > 1271 </h1>
            <p>kishi </p>
          </div>
          <hr className={style.line} />
          <AiFillCaretRight className={style.arrow} />
          <div className={style.footerStatic}>
            <p> Mahallar soni </p>
            <h1> 1343 </h1>
            <p>ta mahalla</p>
          </div>
        </div>
        {/* <hr className={style.hrr}/> */}
      </div>
    </div>
  )
}

export default Home;