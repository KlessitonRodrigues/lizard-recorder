import styled, { css } from "styled-components";

import { cssSize, screenSize } from "src/styles/utils";

const FlexItems = styled.div<Props.CssProps>(
  ({ w, h, maxw, maxh, p, m, fit, zIndex }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
    ${maxw && `max-width: ${cssSize(maxw)};`}
    ${maxh && `max-height: ${cssSize(maxh)};`}
    ${p && `padding: ${cssSize(p)};`}
    ${m && `margin: ${cssSize(m)};`}
    ${zIndex && `z-index: ${zIndex};`}
    ${fit && `width: fit-content;`}
  `
);

export const Row = styled(FlexItems)(
  ({ gap, left, right, top, bottom, wrap, stretch, responsive }) => css`
    gap: ${cssSize(gap ?? 2)};
    ${left && "justify-content: flex-start;"}
    ${right && "justify-content: flex-end;"}
    ${top && "align-items: flex-start;"}
    ${bottom && "align-items: flex-end;"}
    ${stretch && "align-items: stretch;"}
    ${wrap && "flex-wrap: wrap;"}

    @media (max-width: ${screenSize.laptopS}px) {
      ${responsive && "flex-direction: column;"}
      ${responsive && top && "justify-content: flex-start;"}
      ${responsive && bottom && "justify-content: flex-end;"}
      ${responsive && left && "align-items: flex-start;"}
      ${responsive && right && "align-items: flex-end;"}
    }
  `
);

export const Column = styled(FlexItems)(
  ({ gap, left, right, top, bottom }) => css`
    flex-direction: column;
    gap: ${cssSize(gap ?? 2)};
    ${top && "justify-content: flex-start;"}
    ${bottom && "justify-content: flex-end;"}
    ${left && "align-items: flex-start;"}
    ${right && "align-items: flex-end;"}
  `
);

export const Grid = styled.div<Props.CssProps>(
  ({ gap, rows, cols }) => css`
    width: 100%;
    display: grid;
    gap: ${cssSize(gap ?? 4)};
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);

    @media (max-width: ${screenSize.laptopM}px) {
      grid-template-columns: 1fr;
    }
  `
);
