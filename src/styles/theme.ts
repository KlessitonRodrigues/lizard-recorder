import {
  antColors as ant,
  materialColors as material,
} from "src/styles/colors";

import { cssSize } from "./utils";

export const getTheme = (dark: boolean, color: Hooks.ThemeColors) => {
  const colors: Record<Hooks.ThemeColors, any> = {
    indigo: { main: material.indigo["400"], mainBg: material.indigo["800"] },
    purple: { main: material.purple["400"], mainBg: material.purple["800"] },
    blue: { main: ant.blue["500"], mainBg: ant.blue["800"] },
    magenta: { main: ant.magenta["700"], mainBg: ant.magenta["900"] },
    green: { main: ant.green["700"], mainBg: ant.green["900"] },
  };

  const theme: Styles.Theme = {
    colors: {
      ...colors[color],
      mainText: material.grey["50"],
      bg1: ant.gray["100"],
      bg2: ant.gray["200"],
      bg3: ant.gray["400"],
      bg4: ant.gray["500"],
      text1: ant.gray["900"],
      text2: ant.gray["800"],
      text3: ant.gray["700"],
      text4: ant.gray["600"],
      gray: material.grey["500"],
      yellow: ant.yellow["800"],
      red: ant.red["800"],
      blue: ant.blue["500"],
      green: material.lightGreen["800"],
      white: material.white,
      black: ant.gray["1300"],
    },
    fontSize: {
      h1: "1.5rem",
      h2: "1.35rem",
      h3: "1.25rem",
      h4: "1.15rem",
      h5: "1.1rem",
      h6: "1rem",
      md: "1rem",
      sm: "0.95rem",
      xs: "0.9rem",
      label: "0.8rem",
    },
    shadow: {
      lg: "0 1px 7px 0 #0007",
      md: "0 1px 5px 0 #0005",
      sm: "0 1px 3px 0 #0003",
    },
    border: {
      lg: `solid 1px ${ant.gray["800"]}`,
      md: `solid 1px ${ant.gray["600"]}`,
      sm: `solid 1px ${ant.gray["500"]}`,
    },
    radius: {
      full: "50%",
      xl: cssSize(6),
      lg: cssSize(5),
      md: cssSize(4),
      sm: cssSize(3),
    },
  };

  if (dark) {
    theme.colors.bg1 = ant.gray["1300"];
    theme.colors.bg2 = ant.gray["1200"];
    theme.colors.bg3 = ant.gray["1000"];
    theme.colors.bg4 = ant.gray["900"];
    theme.colors.text1 = ant.gray["500"];
    theme.colors.text2 = ant.gray["600"];
    theme.colors.text3 = ant.gray["700"];
    theme.colors.text4 = ant.gray["800"];
    theme.colors.gray = ant.gray["600"];
    theme.colors.white = ant.gray["300"];
    theme.border.lg = `solid 1px ${ant.gray["800"]}`;
    theme.border.md = `solid 1px ${ant.gray["900"]}`;
    theme.border.sm = `solid 1px ${ant.gray["900"]}`;
  }

  return theme;
};

export const getLocalTheme = () => {
  const mode = localStorage.getItem("theme_mode") || "light";
  const color = localStorage.getItem("theme_color") || "indigo";
  return { mode, color } as {
    mode: "light" | "dark";
    color: Hooks.ThemeColors;
  };
};

export const saveLocalTheme = (
  mode: "light" | "dark",
  color: Hooks.ThemeColors
) => {
  if (mode) localStorage.setItem("theme_mode", mode);
  if (color) localStorage.setItem("theme_color", color);
};
