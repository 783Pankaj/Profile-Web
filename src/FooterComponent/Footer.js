import React from "react";
import styled from "styled-components";
// import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              {/* <Button>Get Started</Button> */}
              <button>Get Started</button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Pankaj PaL</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Marktine. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

// const Wrapper = styled.section`
const Wrapper = styled.section`
.contact-short {
  max-width: 60vw;
  margin: auto;
   padding: 5rem 10rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10rem;
  box-shadow: 10px 10px 10px hsl(50, 50%, 10%);
  transform: translateY(50%);
}
.contact-short-btn {
  justify-self: end;
  align-self: center;
}

footer {
  padding: 14rem 0 9rem 0;
  background-color: hsl(0, 0%, 20%);

  h3 {
    color: hsl(50, 50%, 80%);
    margin-bottom: 2.4rem;
  }
  p {
    color: hsl(50, 40%, 100%);
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 3px solid hsl(70, 20%, 50%);

      .icons {
        color: hsl(0, 0%, 87%);
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section {
    padding-top: 1rem;

    hr {
      margin-bottom: 1rem;
      color:hsl(0, 0%, 87%);
      height: 0.1px;
    }
  }
}

@media screen and (min-width: 480px) { 
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid red;

    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }

  footer .footer-bottom--section {
    padding-top: 3.2rem;
  }
}
`;

export default Footer;