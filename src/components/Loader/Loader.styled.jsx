import styled from 'styled-components';
import goose from './goose.png';
import goose2x from './goose@2x.png';

export const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background: radial-gradient(#3e85f3, #e3f3ff);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const RockinGoose = styled.div`
  width: 25vw;
  height: 25vh;
  background-image: url(${goose});
  background-size: contain;
  background-repeat: no-repeat;

  animation: Animation 3s 0.25s infinite alternate forwards;

  @keyframes Animation {
    0% {
      transform: scale(1) rotate(0deg) perspective(0px) translate(0px, 20px);
    }
    10% {
      transform: scale(0.95) rotate(5deg) perspective(5px) translate(10px, 10px);
    }
    20% {
      transform: scale(0.9) rotate(13deg) perspective(10px) translate(20px, 0px);
    }
    30% {
      transform: scale(0.85) rotate(8deg) perspective(15px)
        translate(10px, -10px);
    }
    40% {
      transform: scale(0.8) rotate(4deg) perspective(20px) translate(0px, -20px);
    }
    50% {
      transform: scale(0.75) rotate(0deg) perspective(25px)
        translate(-10px, -15px);
    }
    60% {
      transform: scale(0.8) rotate(-5deg) perspective(20px)
        translate(-20px, -10px);
    }
    70% {
      transform: scale(0.85) rotate(-13deg) perspective(15px)
        translate(-15px, -5px);
    }
    80% {
      transform: scale(0.9) rotate(-8deg) perspective(10px)
        translate(-10px, 0px);
    }
    90% {
      transform: scale(0.95) rotate(-4deg) perspective(5px)
        translate(-5px, 10px);
    }
    100% {
      transform: scale(1) rotate(0) perspective(0px) translate(0px, 15px);
    }
  }

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${goose2x});
  }
`;
