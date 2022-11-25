import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import style from "./category.module.css";
import logo from "../../assets/images/gerb.png";

function Category(props) {
  const [category, setCategory] = useState("mahallalar");
  
  const changeCateg = (c) => {
    console.log("C", c);
    setCategory(c);
  };
  return (
    <>
    {}
      <div className="row">
        <hr className={style.hr}></hr>
        <div className="container">
          <div className={style.category}>
            <ul className={style.categories}>
              {["mahallalar", "shifoxonalar", "maktablar", "MTM lar"].map(
                function (categ, i) {
                  return (
                    <li
                      className={
                        style.categ +
                        " " +
                        (category === categ ? style.activeCateg : "")
                      }
                      key={i}
                      onClick={() => changeCateg(categ)}
                    >
                      <div className={style.text}>{categ}</div>
                      <div className={style.arrow}>
                        <FaChevronRight />
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
            <div className={style.items}>
              {category === "mahallalar" && (
                <>
                  <div className={style.box}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                      <div className={style.timeline}>
                        <img className={style.logos} src={logo} alt="" />
                        <div className={style.timelineitem}>
                          <span className={style.date}>Mahallar {item}</span>
                          <p className={style.desc}>Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {category === "shifoxonalar" && (
                <>
                  <div className={style.box}>
                    {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
                      <div className={style.timeline}>
                        <img className={style.logos} src={logo} alt="" />
                        <div className={style.timelineitem}>
                          <span className={style.date}>Shifoxonalar</span>
                          <p className={style.desc}>QVP {item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {category === "MTM lar" && (
                <>
                  <div className={style.box}>
                    {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
                      <div className={style.timeline}>
                        <img className={style.logos} src={logo} alt="" />
                        <div className={style.timelineitem}>
                          <span className={style.date}>MTM lar</span>
                          <p className={style.desc}>Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {category === "maktablar" && (
                <>
                  <div className={style.box}>
                    {Array.from({ length: 20 }).map((item, i) => (
                      <div className={style.timeline}>
                        <img className={style.logos} src={logo} alt="" />
                        <div className={style.timelineitem}>
                          <span className={style.date}>Maktab {i + 1}</span>
                          <p className={style.desc}>Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
