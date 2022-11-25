import style from './maps.module.css'

const Map1 = () => {
    return (

        <div className={style.hamma}>
            <iframe title='map' width="100%" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=Qo%E2%80%99rg%E2%80%99ontepa%20tuman%20hokimligi&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div className={style.mapinfo}>
                <h3 className={style.title}>Bog'lanish</h3>
                <ul className={style.ulitem}>
                    <li className={style.liitem}>
                        <span className={style.roy}>Manzil:</span>
                        <p>Mustaqillik Ko'chasi, Qo'rg'ontepa, Andijon, Узбекистан</p>
                    </li>
                    <li className={style.liitem}>
                        <span className={style.roy}>Telefon:</span>
                        <a className={style.tel} href="#tel:+998998084567">(+99899) 808 45 67</a>
                    </li>
                    <li className={style.liitem}>
                        <span className={style.roy}>Ish kunlari:</span>
                        <p>Dushanba-juma
                            <span>
                                <span className={style.time}>09:00</span>
                                <span> - </span>
                                <span className={style.time}>19:00</span>
                            </span>
                        </p>
                    </li>
                    <li className={style.liitem}>
                        <span className={style.roy}>Transport:</span>
                        <p>Avtomobil, Avtobus, Tranvay</p>
                    </li>
                </ul>
            </div>
        </div>

    );
}
export default Map1;