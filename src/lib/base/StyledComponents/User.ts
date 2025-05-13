import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Avatar = styled.div<Props.CssProps>(
  ({ theme, src }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: ${cssSize(30)};
    max-height: ${cssSize(45)};
    padding: ${cssSize(30)} ${cssSize(25)};
    border-radius: ${theme.radius.md};
    background-image: url(${src});
    background-size: cover;
  `,
);

export const AvatarBig = styled.div<Props.CssProps>(
  ({ theme, src }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: ${cssSize(40)};
    max-height: ${cssSize(40)};
    padding: ${cssSize(25)} ${cssSize(25)};
    background-color: ${theme.colors.bg2};
    background-image: url(${src});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${theme.radius.full};
    border: ${cssSize(2)} solid ${theme.colors.bg1};
  `,
);
