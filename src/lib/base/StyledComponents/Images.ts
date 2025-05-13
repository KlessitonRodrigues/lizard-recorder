import styled, { css } from "styled-components";

import { cssSize } from "src/styles/utils";

export const Image = styled.img<Props.CssProps>(
  ({ w, h }) => css`
    display: block;
    margin: auto;
    width: 100%;
    max-height: ${h ?? "100%"};
    max-width: ${w ?? "unset"};
  `
);

export const ImageContainer = styled.div<Props.CssProps>(
  ({ theme, w, h }) => css`
    width: 100%;
    max-height: ${h ?? "100%"};
    max-width: ${w ?? "unset"};
    box-shadow: ${theme.shadow.md};
    border-radius: ${theme.radius.sm};
    overflow: hidden;
  `
);

export const ImageFixed = styled.img<Props.CssProps>(
  ({ maxw, top, bottom, left, right }) => css`
    position: fixed;
    z-index: 0;
    height: 100%;
    ${top && "top: 0;"}
    ${bottom && "bottom: 0;"}
    ${left && "left: 0;"}
    ${right && "right: 0;"}
    ${maxw && `max-width: ${cssSize(maxw)};`}
    z-index: -1;
  `
);

export const Outdoor = styled.div<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.radius.md};
    position: relative;
    background-color: ${theme.colors.bg1};
    padding-top: ${cssSize(70)};
    z-index: 0;
    box-shadow: ${theme.shadow.sm};
    transition: 0.3s;

    &:hover {
      box-shadow: ${theme.shadow.md};
    }
  `
);

export const OutdoorImage = styled.div<Props.CssProps>(
  ({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: ${cssSize(120)};
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.8);
    transition: background-image 1s;
  `
);

export const OutdoorContent = styled.div<Props.CssProps>(
  () => css`
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    background-color: transparent;
    padding: ${cssSize(6)};
    z-index: 1;
  `
);

// clip-path: polygon(56% 0%, 100% 0%, 100% 100%, 41.4% 100%);
