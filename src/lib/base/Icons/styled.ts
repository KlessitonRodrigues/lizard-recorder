import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Container = styled.span<{ size?: number }>(
  ({ size }) => css`
    display: inline-flex;
    font-size: ${cssSize(size || 6)};
    cursor: pointer;
  `,
);
