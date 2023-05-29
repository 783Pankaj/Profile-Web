import React from "react";
import HeaderNav from "../HeaderComponent/HeaderNav";
import { useNavigate } from "react-router-dom";
import Images from '../Images/Marktine.jpg'

const About = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/')
    }
    const back = () => {
        navigate(-1)
    }
    // const next = () => {
    //     navigate(+1)
    // }
    return (
        <>
            <HeaderNav />
            
                <img className="img" src={Images} alt="logo" />
            <section className="hero">
                <p>“The success of every websites now depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search engines then you are ahead among your competitors in terms of online sales.”</p>
                <button onClick={() => backToHome()}>Back to Home</button>
                <br /> <br />
                <button onClick={() => back()}>Back <> </></button>

                {/* <button onClick={() => next()}>next</button> */}
            </section>
        </>
    );
}
export default About;