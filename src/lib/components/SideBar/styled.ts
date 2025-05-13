import styled, { css } from 'styled-components';

import { RoundedBtn } from 'src/lib/base/StyledComponents/Buttons';
import { animations, cssSize, screenSize } from 'src/styles/utils';

const sidebarSizeOpen = 70;
const sidebarSize = 20;
const topOffset = 2;
const leftOffset = 2;

export const Container = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const SidebarBox = styled.aside<Props.CssProps>(
  ({ theme, active, hide }) => css`
    position: fixed;
    left: ${cssSize(2)};
    top: ${cssSize(2)};
    z-index: 2;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${cssSize(5)} 0;
    color: ${theme.colors.mainText};
    border-radius: ${theme.radius.lg};
    overflow: hidden;
    text-transform: capitalize;
    background-color: ${theme.colors.mainBg};
    transition: all 0.3s ease-out;

    a {
      text-decoration: none;
    }

    @media (max-width: ${screenSize.tablet}px) {
      height: 95%;
      top: ${cssSize(topOffset)};
      width: ${active ? cssSize(sidebarSizeOpen) : cssSize(sidebarSize)};
      ${!active && 'transform: translateX(-5rem);'};
    }

    @media (min-width: ${screenSize.tablet}px) {
      width: ${cssSize(sidebarSizeOpen)};
      ${hide && `width: ${cssSize(sidebarSize)};`}
      &:hover {
        width: ${cssSize(sidebarSizeOpen)};
      }
    }
  `,
);

export const SidebarItem = styled.div<Props.CssProps>(
  ({ theme, active, top }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(6)};
    padding: ${cssSize(4)} ${cssSize(6)};
    min-width: ${cssSize(sidebarSizeOpen)};
    cursor: pointer;
    ${active === false && `opacity: 0.7;`}

    &:hover {
      opacity: ${!active && 0.8};
    }

    strong {
      padding: ${cssSize(0.8)};
      ${top && `text-transform: uppercase;`}
    }

    .icon {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 115%;
        left: 0;
        width: ${active ? cssSize(8) : 0};
        height: ${cssSize(1.3)};
        background-color: ${theme.colors.mainText};
        transition: width 0.3s;
      }
    }
  `,
);

export const Content = styled.div<Props.CssProps>(
  ({ active }) => css`
    width: 100%;
    height: 100%;
    padding-left: ${active ? cssSize(sidebarSizeOpen + 2) : cssSize(sidebarSize + 2)};
    transition: 0.3s ease-out;
    ${active && `filter: brightness(0.4);`}

    @media (max-width: ${screenSize.tablet}px) {
      padding-left: 0;
      padding-top: ${cssSize(topOffset + 14)};
    }
  `,
);

export const MenuBtn = styled(RoundedBtn)(
  ({ theme, active }) => css`
    position: fixed;
    top: ${cssSize(topOffset)};
    left: ${cssSize(2)};
    z-index: 2;
    display: none;
    width: ${cssSize(16)};
    height: ${cssSize(16)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    transition: 0.3s ease-out;
    box-shadow: ${theme.shadow.md};
    ${active && `margin-left: ${cssSize(sidebarSizeOpen + leftOffset)};`}

    .icon-menu {
      animation: 0.5s ${animations.halfSpinning} ease-out reverse;
    }

    .icon-close {
      animation: 0.5s ${animations.halfSpinning} ease-out;
    }

    @media (max-width: ${screenSize.tablet}px) {
      display: flex;
    }
  `,
);
