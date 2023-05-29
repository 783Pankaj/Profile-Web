import React from "react";
import HeaderNav from "../HeaderComponent/HeaderNav";
import CardHome from "./CardHome";
import Images from "../Images/vi.mp4"

const Home = () => {
  return (
    <div> 
      <HeaderNav />

      <video controls  className="video">
      <source src="vimp4" type="mp4" />
      <source src="/video-example.mp4" type="video/mp4"
      />
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