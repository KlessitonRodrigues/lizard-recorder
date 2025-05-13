import styled, { css } from 'styled-components';

import { animations, cssSize, gradients } from 'src/styles/utils';

export const Modal = styled.div<{ show: boolean }>(
  ({ show }) => css`
    display: ${show ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: 0.5s ${animations.fadeIn} ease-out;
    background-color: #5555;
    backdrop-filter: blur(12px);
    z-index: 2;
  `,
);

export const ModalHeader = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${cssSize(350)};
    padding: ${cssSize(4)};
    background-image: ${gradients.purple};
    color: #fff;
  `,
);

export const ModalContent = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    max-width: ${cssSize(350)};
    padding: ${cssSize(6)} 0 ${cssSize(10)};
    overflow: auto;
    animation: 0.5s ${animations.slideUp} ease-out;
  `,
);
