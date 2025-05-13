import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const StatusBar = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    width: 100%;
    height: ${cssSize(10)};
    background-color: ${theme.colors.black};
    opacity: ${active ? 0.65 : 0};
  `,
);
