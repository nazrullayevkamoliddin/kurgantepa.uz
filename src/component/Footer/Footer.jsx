import React from 'react'
import { TbRotateRectangle } from 'react-icons/tb';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {ImLocation2} from 'react-icons/im';
import {FaFacebookF} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';
import FtrLogo2 from '../../assets/images/humooo.PNG';
import style from './footer.module.css'
import Map1 from '../../pages/Map/Map1';
const Footer = () => {
  return (
    <div>
      <Map1/>
    <div className={style.Cntfuter}>
      <div className={style.FtBigcards}>
      <div className={style.CardsFuter}>
        <div className={style.FtCard1}>
          <h1>Ish Grafigi:</h1>
          <div className={style.Ftlittlcard}>
            <TbRotateRectangle className={style.Ico1}/>
            <h3>Dushanba – juma: <p>9:00 – 18:00</p></h3>
          </div>
          <div className={style.Ftlittlcard}>
            <TbRotateRectangle className={style.Ico1}/>
            <h3>Tushlik: <p>13:00 - 14:00</p></h3>
          </div>
          <div className={style.Ftlittlcard3}>
            <TbRotateRectangle className={style.Ico1}/>
            <h3>Dam olish kunlari: <p>shanba va </p> <p>yakshanba</p></h3>
    
          </div>
        </div>
        <hr />
        <div className={style.FtCard2}>
          <h1>Aloqa ma'lumotlari:</h1>
          <div className={style.FtlittlCard4}>
            <BsFillTelephoneFill className={style.Ico1}/>
            <a href="tel:+998998084567">+998 99 808 45 67</a>
          </div>
          <div className={style.FtlittlCard4}>
            <MdEmail className={style.Ico1}/>
            <a href="mailto:">abc@gmail</a>
          </div>
          <div className={style.FtlittlCard5}>
            <ImLocation2 className={style.Ico1}/>
            <p>ANDIJON VILOYATI QORG'ONTEPA XOKIMLIGI</p>
          </div>
        </div>
        <hr />
        <div className={style.FtCard3}>
          <h1>Ishonch telefoni:</h1>
          <div className={style.FtlittlCard4}>
            <BsFillTelephoneFill className={style.Ico1}/>
            <a href="tel:+998998084567">+998 99 808 45 67</a>
          </div>         
        </div>
      </div>
      </div>
      <div className={style.FtBigLink}>
        <div className={style.FtLinkDiv}>
          <div className={style.FtLinkleft}>
            <p>Onlayn foydalanuvchilar soni: </p>
            <a href="#/">Ma'lumotlardan foydalanish shartlari</a>
            <a href="#/">Bank rekvizitlari</a>
            <a href="#/">RRS</a>
            <p>Materialdan to'liq yoki qisman foydalanilganda, piima.uz manbasi ko'rsatilishi shart.</p>
            <h1>Ishlab chiqarilgan: <a href="academypro.netlify.app">Academy Pro</a></h1>
            <p>&copy; Academy Pro</p>
          </div>
          <div className={style.Ftrlogo2}>
            <img src={FtrLogo2} alt="" />
          </div>
          <div className={style.FtLinksDiv}>
            <div className={style.FtLinks}>
              <FaFacebookF className={style.IconLink}/>
              <p>"Facebook"dagi sahifa</p>
            </div>
            <div className={style.FtLinks}>
              <FaTelegramPlane className={style.IconLink}/>
              <p>"Telegram"dagi sahifa</p>
            </div>
            <div className={style.FtLinks}>
              <MdEmail className={style.IconLink}/>
              <p>Qayta aloqa</p>
            </div>
            <div className={style.FtLinks}>
              <AiOutlineInstagram className={style.IconLink}/>
              <p>"Instagram"dagi sahifa</p>
            </div>
            <div className={style.FtLinks}>
              <BsYoutube className={style.IconLink}/>
              <p>"Youtube"dagi sahifa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer;