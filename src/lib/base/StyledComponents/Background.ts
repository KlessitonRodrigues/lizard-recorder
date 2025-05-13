import styled, { css } from "styled-components";

import { materialColors as mc } from "src/styles/colors";

export const BackgroundColor = styled.div<Props.CssProps>(
  ({ color }) => css`
    width: 100%;
    height: 100%;
    background-color: ${color};
  `
);

export const BackgroundImage = styled.div<Props.CssProps>(
  ({ src }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // filter: grayscale(1) brightness(0.5);
  `
);

export const GradidentBg = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${mc.deepOrange["100"]},
      ${mc.deepOrange["50"]}
    );
    background-size: 100% 100%;
    z-index: -1;
  `
);
