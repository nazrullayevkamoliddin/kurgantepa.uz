import axios from 'axios';
import { useState } from 'react';
import cfg from '../../cfg';
import '../styles/panel.scss';

function AdminSign() {
    const [msg, setMsg]=useState('')
    const [state, setState]=useState({})

    function Submit(){
        if(state.login !== cfg.login || state.password !== cfg.password){
            setMsg('Login yoki parol noto\'g\'ri')
        }
        else{
            localStorage.setItem('admin', 'ok')
            setMsg('Kirish muvofaqqiyatli')
            window.location.reload()
        }
    }
    return ( 
        <>
        <div className="main">
            <div className="bir">

            </div>
            <div className="ikki">
                <div className="menu">
                    <h1>Admin panel</h1>
                </div>
            <div className="admin">
            <div className="sign">
                <p>{msg}</p>
                <h3>KIRISH</h3>
                <p>!!!DIQQAT!!!</p>
                <p>Kirish faqat masul hodimlar uchun</p>
                <div className="inps">
                    <input type="text" placeholder='LOGIN' onChange={e=>{setState({...state,login: e.target.value})}}/>
                    <input type="password" placeholder='PAROL' onChange={e=>{setState({...state,password: e.target.value})}}/>
                </div>
                <button onClick={()=>{Submit()}}>Kirish</button>
            </div>
        </div>
            </div>
        </div>
        
        </>
     );
}

export default AdminSign;