import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const SelectBox = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${cssSize(2)};
    font-size: ${theme.fontSize.label};
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text1};
    border-radius: ${theme.radius.sm};
    box-shadow: ${theme.shadow.md};

    &:hover {
      background-color: ${theme.colors.bg4};
    }
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    color: ${theme.colors.text2};
    font-size: ${theme.fontSize.sm};
    font-weight: 600;

    &::-webkit-scrollbar {
      width: ${cssSize(2)};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.bg1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.white};
    }
  `,
);

export const SelectTitle = styled.div(
  () => css`
    min-width: max-content;
  `,
);

export const SelectItem = styled.option(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    font-family: sans-serif;
    font-weight: bold;
  `,
);
