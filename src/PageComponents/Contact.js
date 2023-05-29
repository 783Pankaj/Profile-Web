import React from "react";
import HeaderNav from "../HeaderComponent/HeaderNav";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate()
    const backToHome=()=>{
        navigate('/')
    }
    const back=()=>{
        navigate(-1)
    }
    return (
        <>
            <HeaderNav />
            <section className="hero">
               <h2>
               <ul>
                    <li>
                        contact me : 123456789
                    </li>
                    <li>
                        Email : Pk35@gmail.com
                    </li>
                    
                </ul></h2> 
                <button onClick={()=>backToHome()}>Back to home</button>
                <br />
                <br />
                <button onClick={()=>back()}>Back</button>
            </section>
        </>
    );
}
export default Contact;