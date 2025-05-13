import styled, { css } from 'styled-components';

import { animations, cssSize, gradients, screenSize } from 'src/styles/utils';

export const Container = styled.div(() => css``);

export const FullScreen = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0009;
    color: ${theme.colors.white};
    z-index: 5;
  `,
);

export const Spinner = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${cssSize(8)};
    animation: ${animations.spinning} 0.3s infinite linear;
  `,
);

export const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-weight: bold;
  `,
);

export const LoadLine = styled.div(
  () => css`
    width: 100%;
    height: ${cssSize(3)};
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: transparent;
    z-index: 3;

    &:before {
      content: '';
      position: absolute;
      left: 0%;
      height: ${cssSize(2)};
      width: 0%;
      border-radius: ${cssSize(1)};
      background-image: ${gradients.blueAndGreen};
      animation: ${animations.progress} 5s linear forwards;
    }
  `,
);
