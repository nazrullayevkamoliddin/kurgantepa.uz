import React from "react";
import style from "./about.module.css";
import AboutHokim1 from "../../assets/images/aboutHokim1.jpg";
import AboutHokim2 from "../../assets/images/aboutHokim2.jpg";
import Reveal from 'react-reveal/Reveal';

const About = () => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", fontSize: "3em", marginTop: "1em" }}>
        Tuman hokimi haqida
      </h2>
      <div className={style.aboutCnt}>
      <Reveal effect="fadeInUp">
        <div className={style.aboutCard}>
          <div className={style.aboutImgDiv}>
            <img src={AboutHokim2} alt="" />
          </div>
          <div className={style.aboutTextDiv}>
            <h1> Ta'lim </h1>
            <p>
              Elyor Nabijonov 1979-yil Qo‘rg‘ontepa tumanida tug‘ilgan bo‘lib,
              2000-yilda Andijon muhandislik-iqtisodiyot institutini, 2014-
              yilda esa Toshkent davlat iqtisodiyot universitetini tamomlagan.
            </p>
          </div>
        </div>
        </Reveal>
        <Reveal effect="fadeInUp">
        <div className={style.aboutCard2}>
          <div className={style.aboutTextDiv}>
            <h1> Ish faoliyati </h1>
            <p>
              Ish faoliyatini 2001-yil Tashqi iqtisodiy faoliyat Milliy banki
              Qo‘rg‘ontepa filiali mijozlarga xizmat ko‘rsatish sektori
              mutaxassisligidan boshlagan. Turli yillarda Qo‘rg‘ontepa tumani
              hokimligi moliya bo‘limi budjet iqtisodchisi,
              “O‘zsanoatqurilishbank” aksiyadorlik tijorat banki Shahrixon
              filiali ichki hisob-kitob sektori arxivariusi, buxgalteriya hisobi
              bo‘limi hisobchisi, iqtisodiy tahlil bo‘limi boshlig‘i
              o‘rinbosari, bankning Toshkent shahar mintaqaviy filiali
              kotibiyati mudiri, “OrientFinansbank” xususiy aksiyadorlik tijorat
              banki ijroya apparati ijro nazorati bo‘limi boshlig‘i
              o‘rinbosari—boshqaruv raisi o‘rinbosari yordamchisi, ijro
              intizomini nazorat qilish va bank xizmatchilari bo‘yicha dastlabki
              maslahat berish boshqarmasi boshlig‘i o‘rinbosari lavozimlarida
              ishlagan.
            </p>
          </div>
          <div className={style.aboutImgDiv}>
            <img src={AboutHokim1} alt="" />
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
