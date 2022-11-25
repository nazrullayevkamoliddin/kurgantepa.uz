import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import './etc.css';
function Etc(props) {
    return (  
        <div className="etc">
            <div className="link">
                <a href="https://www.facebook.com/wwwkurgantepauz"><FaFacebookF/></a>
                <a href="https://t.me/wwwkurgantepauz"><FaTelegramPlane/></a>
                <a href="https://www.instagram.com/wwwkurgantepauz/"><ImInstagram/></a>
                <a href="https://www.youtube.com/channel/UC2HrCM4HbDMK3XjuJyL8AAw"><FaYoutube/></a>
            </div>
        </div>
    );
}

export default Etc;