
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { link } from "../../cfg";
function AdminInter() {
    const { register, handleSubmit } = useForm();
    const [type, setType]=useState('news')
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("images", data.images[0]);
        formData.append('title', data.title)
        formData.append('about', data.about)
        const res = await fetch(link+"/api/base", { 
            method: "POST",
            body: formData
        }).then((res) => res.json());
        alert(res.data.message);
    };

    return ( 
        <div className="admin">
            <div className="inter">
                <div className="top">
                    <button className={type === 'news'?'active':null} onClick={()=>setType('news')}>YANGILIK</button>
                </div>
                    <form className="bottom" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            name="title"
                            placeholder="SARLAVHA"
                            type="text" {...register("title")} 
                        />

                        <textarea
                            disabled={type==='galery'?true:false}
                            name="about"
                            placeholder="BATAFSIL MA'LUMOT"
                            {...register("about")}
                        ></textarea>
                        <label className="fayl">

                            <p>RASM TANLANG</p>

                            <input
                                name="images"
                                accept="images/png, images/jpg, images/gif, images/jpeg"
                                type="file" {...register("images")}
                            />
                        </label>
                        <button type="submit">Tasdiqlash</button>
                    </form>
            </div>
        </div>
     );
}

export default AdminInter;