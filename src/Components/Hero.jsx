import React from "react";
import styled from "styled-components";
import hero from "../Assets/hero.jpg";
import HeroDesign from "../Assets/HeroDesign.png";

function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>

      <div className="content">
        <div className="sale">
          <img src={HeroDesign} alt=" Hero Design" />
          <h1>
            Chrismas Sale
            <span> 30% OFF</span>
          </h1>
        </div>
        <div className="info">
          <h2> RETAILER</h2>
          <em>We Server you best and hot! Sizzling hot :)</em>
          <button> ORDER NOW</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightnessw(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 10%;
      right: 2%;
      display: flex;
      flex-direction: column;
      align-items: flex-item;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 2rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }

      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
export default Hero;
