import { keyframes } from 'styled-components';

export const spin = keyframes`
  to { transform: rotate(360deg) }
`;

export const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  78% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

export const slideBottomToTop = keyframes`
  from {
    transform: translateY(330%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slidein = keyframes`
  from { width: 0%; }
  to   { width: 100%; }
`;
