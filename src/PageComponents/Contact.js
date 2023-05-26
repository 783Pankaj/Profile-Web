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
                <h1>Contact Page</h1>
                <button onClick={()=>backToHome()}>Back to home</button>
                <br />
                <br />
                <button onClick={()=>back()}>Back</button>
            </section>
        </>
    );
}
export default Contact;