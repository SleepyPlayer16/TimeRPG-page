/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

function Landing() {
  return ( 
    <>
      <MainContainer>
        <NavContainer>
          <Logo src={require('../img/timeRPG.png')} alt='logo' />
        </NavContainer>
        <ImgContainer>
          <BackImage src={require('../img/timerpgImage.png')} alt='backimg'  />
          <TextContainer>
            <InfoText>What is Time RPG?</InfoText>
            <InfoTextTwo>
              Time RPG is a game about a girl called Liz, her mother 
              got a really strange disease that has no documented cure 
              because of how rare it is. Medicine for this disease used 
              to exist in the past, but since it became such a rare disease eventually, 
              knowledge of how the medicine was made slowly got lost to time. 
              There’s a legend  about a magical clock that resides deep within the Amser Forest, 
              those who find it will get the chance to have one of their wishes granted, Liz, 
              desperate to save her mother, went to the Amser
              Forest in search of the mythical clock. Will she be
              able to find the clock and finally find the cure for
              her mother’s disease?
              <PlayTextContainer>
                <DemoPlayText>PLAY THE DEMO RIGHT NOW</DemoPlayText>
              </PlayTextContainer>
            </InfoTextTwo>
          </TextContainer>
        </ImgContainer>
        <BackImageTwo src={require('../img/backLiz.png')} alt='backimg'  />
        <ItchFrame 
          frameborder="0" 
          src="https://itch.io/embed/904421" >
          <a href="https://sleepyplayer16.itch.io/voiceless">Voiceless V1.5 by SleepyPlayer16</a></ItchFrame>
          <DevContainer>
            <DevText>Developed by:</DevText>
            <DevTextTwo href='https://twitter.com/RealSleP16'> SleP16</DevTextTwo>
          </DevContainer>
      </MainContainer>
    </>
  )
}

const DevText = styled.text`
  color: white;
  font-family: 'Lucida Sans';
  font-weight: bold;
`
const DevTextTwo = styled.a`
  color: white;
  font-family: 'Lucida Sans';
  font-weight: bold;
  text-decoration: none;
`

const ItchFrame = styled.iframe`
  margin-top: 5%;
  margin-bottom: 10%;
  height: 167px;
  width: 50%;
  @media (max-width: 1440px) {
    margin-top: 15%;
  }
  @media (max-width: 912px) {
    margin-top: 18%;
  }
  @media (max-width: 620px) {
    margin-top: -5%;
    width: 90%;
  }
  @media (max-width: 604px) {
    margin-top: -20%;
    margin-bottom: 15%;
    width: 90%;
  }
  @media (max-width: 415px) {
    margin-top: 30%;
    width: 90%;
  }
  @media (max-width: 385px) {
    margin-top: 0%;
    width: 90%;
  }
  @media (max-width: 360px) {
    margin-top: -60%;
    width: 90%;
    margin-bottom: 15%;
  }
  @media (max-width: 280px) {
    margin-top: -10%;
    margin-bottom: 25%;
  }
`;
const NavContainer = styled.nav`
  padding: .4rem;
  background-color: #FFCC69;
  align-items: center;
  justify-content: center;
`;

const PlayTextContainer = styled.div`
  margin-top: 10%;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: calc(5% + 5vw);
  background-color: #218AE5;
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const DevContainer = styled.footer`
  background-color: #218AE5;
  padding: .4rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const MainContainer = styled.nav`
  overflow: hidden;
  position: relative;
`;

const Logo = styled.img`
  width: 200px;
  @media (max-width: 670px) {
    width: 200px;
  }
`
const ImgContainer = styled.div`
  overflow: hidden;
`
const TextContainer = styled.div`
  padding-top: 10%;
  @media (max-width: 1440px) {
    padding-top: 30%;
  }
  @media (max-width: 912px) {
    padding-top: 50%;
  }
  @media (max-width: 605px) {
    padding-top: 50%;
  }
  @media (max-width: 415px) {
    padding-top: 60%;
  }
  @media (max-width: 385px) {
    padding-top: 95%;
  }
  @media (max-width: 280px) {
    padding-top: 100%;
  }
`
const BackImage = styled.img`
  width: 100%;
  @media (max-width: 620px) {
    width: 200%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  @media (max-width: 361px) {
    width: 400%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`
const BackImageTwo = styled.img`
  z-index: -30;
  width: 50%;
  margin-left: 35%;
  position: absolute;
  @media (max-width: 1440px) {
    margin-top: 5%;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
  }
  @media (max-width: 620px) {
    width: 0px;
  }

`
const DemoPlayText = styled.text`
    text-shadow: 0px 7px 12px #000000;
    font-size: 4vw;
    font-family: lucida;
    color: white;
`
const InfoText = styled.text`
    text-shadow: 0px 7px 12px #000000;
    position: absolute;
    font-size: 4vw;
    font-family: lucida;
    color: white;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1010px) {
      top: 20%;
      font-size: 5vw;
    }
    @media (max-width: 550px) {
      top: 20%;
      font-size: 6vw;
    }
    @media (max-width: 385px) {
      font-size: 9vw;
      top: 20%;
    }
`
const InfoTextTwo = styled.text`
    text-shadow: 0px 7px 12px #000000;
    position: absolute;
    font-size: 1.5vw;
    font-family: lucida;
    text-align: justify;
    color: white;
    margin-top: 10%;
    width: 60%;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1440px) {
      top: 20%;
      margin-top: 22%;
      font-size: 2.5vw;
    }
    @media (max-width: 912px) {
      top: 20%;
      width: 85%;
      margin-top: 30%;
      font-size: 3.5vw;
    }
    @media (max-width: 605px) {
      margin-top: 25%;
      top: 20%;
      font-size: 3vw;
    }
    @media (max-width: 415px) {
      margin-top: 50%;
      width: 80%;
      top: 20%;
      font-size: 4.5vw;
    }
    @media (max-width: 385px) {
      margin-top: 55%;
      top: 20%;
      font-size: 4.5vw;
      width: 80%;
    }
    @media (max-width: 280px) {
      margin-top: 70%;
      top: 20%;
      font-size: 5.5vw;
      width: 80%;
    }
`
export default Landing;
