import { createGlobalStyle, css } from "styled-components";

import "../public/fonts/roboto500.woff2";
import "../public/fonts/roboto700.woff2";
import "../public/fonts/caveat500.woff2";
import { cssSize, screenSize } from "./utils";
import { mcolor } from "./colors";

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${theme.fontSize.md};
      min-height: 100vh;
    }
    html,
    body {
      font-family: "Roboto", sans-serif;
      font-weight: normal;
      background-color: ${theme.colors.bg1};
      color: ${theme.colors.text4};
      overflow-x: hidden;
      transition: background 0.3s;
    }
    h1 {
      font-size: ${theme.fontSize.h1};
      font-weight: bolder;
    }
    h2 {
      font-size: ${theme.fontSize.h2};
      font-weight: bolder;
    }
    h3 {
      font-size: ${theme.fontSize.h3};
      font-weight: bolder;
    }
    h4 {
      font-size: ${theme.fontSize.h4};
    }
    h5 {
      font-size: ${theme.fontSize.h5};
    }
    h6 {
      font-size: ${theme.fontSize.h6};
    }
    p {
      font-size: ${theme.fontSize.md};
      line-height: 22px;
    }
    ul {
      list-style: none;
    }
    a {
      color: unset;
      text-decoration: underline;
    }
    b,
    small {
      color: ${theme.colors.main};
    }
    em {
      font-style: normal;
      font-weight: normal;
      font-size: ${theme.fontSize.sm};
    }
    mark {
      font-size: ${theme.fontSize.sm};
    }
    small {
      font-size: ${theme.fontSize.sm};
    }
    label > b {
      font-size: ${theme.fontSize.label};
    }
    button,
    select {
      min-height: ${cssSize(9)};
      display: flex;
      align-items: center;
      gap: ${cssSize(1)};
      padding: 0 ${cssSize(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${theme.radius.sm};
      cursor: pointer;
    }
    body::-webkit-scrollbar,
    div::-webkit-scrollbar {
      width: ${cssSize(3.5)};
    }
    body::-webkit-scrollbar-track,
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    body::-webkit-scrollbar-thumb,
    div::-webkit-scrollbar-thumb {
      background: ${theme.colors.main};
      border-radius: 0px;
    }
    body::-webkit-scrollbar-thumb:hover,
    div::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.mainBg};
    }
    #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .custom-bg {
      fill: ${theme.colors.mainBg};
    }

    // Font
    .text-caveat {
      font-family: "Caveat", sans-serif;
    }
    .text-caveat-white {
      font-family: "Caveat", sans-serif;
      color: ${theme.colors.white};
      line-height: 2.5rem;
    }
    .text-caveat-orange {
      font-family: "Caveat", sans-serif;
      color: ${mcolor.deepOrange["600"]};
    }
    .text-white {
      color: ${theme.colors.white};
    }

    @media (max-width: ${screenSize.tablet}px) {
      html {
        font-size: 15px;
      }
    }
  `
);
