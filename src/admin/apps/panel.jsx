import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/panel.scss'
import AdminInter from './inter';
import AdminSign from './sign-in';
function PanelADM() {
    const [loc,setLoc] = useState(localStorage.getItem('admin'))
    
    if(!loc){
        return(
            <AdminSign/>
        )
    }
    else if(loc === 'ok'){
        return(
            <AdminInter/>
        )
    }
}

export default PanelADM;