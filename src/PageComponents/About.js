import React from "react";
import HeaderNav from "../HeaderComponent/HeaderNav";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/')
    }
    const back = () => {
        navigate(-1)
    }
    const next = () => {
        navigate(+1)
    }
    return (
        <>
            <HeaderNav />
            <section className="hero">
                <h1>About Page</h1>
                <button onClick={() => backToHome()}>Back to Home</button>
                <br /> <br />
                <button onClick={() => back()}>Back</button>

                <button onClick={() => next()}>next</button>
            </section>
        </>
    );
}
export default About;