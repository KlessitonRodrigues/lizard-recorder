import { keyframes } from 'styled-components';

import { materialColors as mc } from './colors';

export const cssSize = (n: number) => `${(n * 0.2).toFixed(1)}rem`;

export const screenSize = {
  mobileS: 320,
  mobileM: 425,
  mobileL: 480,
  tablet: 768,
  laptopS: 900,
  laptopM: 1024,
  laptopL: 1280,
  desktopS: 1440,
  desktopM: 1980,
  desktopL: 2560,
};

export const animations = {
  fadeUp: keyframes`
    from { transform: translateY(3rem); opacity: 0; } 
    to { opacity: 1 }`,
  fadeLeft: keyframes`
    from { transform: translateX(3rem); opacity: 0; } 
    to { opacity: 1 }`,
  slideUp: keyframes`
    from { transform: translateY(12rem); opacity: 0.4; } 
    to { opacity: 1; }`,
  fadeIn: keyframes`
    from { opacity: 0; } 
    to { opacity: 1; }`,
  spinning: keyframes`
    to { transform: rotateZ(360deg); }`,
  halfSpinning: keyframes`
    to { transform: rotateZ(180deg); }`,
  fullWidth: keyframes`
    from { width: 0; }
    to { width: 100%; }`,
  progress: keyframes`
    0% { width: 0; }
    5% { width: 5%; }
    10% { width: 10%; }
    20% { width: 15%; }
    50% { width: 20%; }
    75% { width: 40%; }
    100% { width: 90%; }
  `,
};

export const gradients = {
  black: `linear-gradient(180deg, ${mc.grey['600']}, ${mc.grey['700']})`,
  white: `linear-gradient(180deg, ${mc.grey['200']}, ${mc.grey['300']})`,
  blue: `linear-gradient(180deg, ${mc.blue['500']}, ${mc.blue['600']})`,
  darkBlue: `linear-gradient(180deg, ${mc.blue['700']}, ${mc.blue['800']})`,
  purple: `linear-gradient(180deg, ${mc.purple['400']}, ${mc.purple['500']})`,
  darkPurple: `linear-gradient(180deg, ${mc.purple['600']}, ${mc.purple['700']})`,
  blueAndGreen: `linear-gradient(90deg, ${mc.blue['500']}, ${mc.green['500']})`,
};

export const isMobileScreen = () => {
  return window.innerWidth <= screenSize.tablet;
};

export const isEmbbedMobile = () => {
  const isBuiltIn = location.pathname.includes('.html');
  const isMobile = window.innerWidth <= screenSize.tablet;
  return isBuiltIn && isMobile;
};
