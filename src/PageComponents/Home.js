import React from "react";
import HeaderNav from "../HeaderComponent/HeaderNav";
import CardHome from "./CardHome";
import introVideo from "../VideoCom/vi.mp4"

const Home = () => {
  return (
    <div> 
      <HeaderNav />
      <video controls autoPlay loop muted className="video">
      <source src={introVideo} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
    </div>
  );
}
export default Home;