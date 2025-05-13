import { cssSize } from "src/styles/utils";
import styled, { css } from "styled-components";

export const Card = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    padding: ${cssSize(8)};
    box-shadow: ${theme.shadow.sm};
    border-radius: ${theme.radius.md};
  `
);

export const CardYellow = styled(Card)(
  ({ theme }) => css`
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.white};
  `
);
