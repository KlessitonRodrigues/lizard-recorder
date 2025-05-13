import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const AccordionContainer = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    width: 100%;
    border: ${theme.border.sm};
    border-radius: ${theme.radius.sm};
    padding: 0 ${cssSize(6)};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border: ${theme.border.md};
    }

    ${AccordionHeader} {
      .icon {
        transition: transform 0.5s;
        ${active && 'transform: rotateZ(90deg);'}
      }
    }

    ${AccordionContent} {
      ${active && `max-height: ${cssSize(150)};`}
    }
  `,
);

export const AccordionHeader = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${cssSize(4)} 0;
    gap: ${cssSize(4)};
  `,
);

export const AccordionContent = styled.div(
  () => css`
    height: 100%;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s;
  `,
);
