import { antColors as ac, materialColors as mc } from 'src/styles/colors';

export const themeColors: Record<string, { main: string; mainBg: string }> = {
  indigo: { main: mc.indigo['400'], mainBg: mc.indigo['800'] },
  purple: { main: mc.purple['400'], mainBg: mc.purple['800'] },
  blue: { main: ac.blue['500'], mainBg: ac.blue['800'] },
  magenta: { main: ac.magenta['700'], mainBg: ac.magenta['900'] },
  green: { main: ac.green['700'], mainBg: ac.green['900'] },
};

export const getColor = () => {
  try {
    return localStorage.getItem('color') || 'indigo';
  } catch (err) {
    return 'indigo';
  }
};

export const setColor = (color: string) => {
  try {
    localStorage.setItem('color', color);
    location.reload();
  } catch (err) {}
};

export const toggleColor = () => {
  const color = getColor();
  const colors = Object.keys(themeColors);
  const colorIndex = colors.indexOf(color);
  const nextColor = colorIndex < colors.length - 1 ? colors[colorIndex + 1] : colors[0];
  setColor(nextColor);
};

export const currentColor = getColor();
export const currenMainColor = themeColors[currentColor];

export const getThemeMode = () => {
  try {
    return localStorage.getItem('theme') || 'light';
  } catch (err) {
    return 'light';
  }
};

export const setThemeMode = (color: string) => {
  try {
    localStorage.setItem('theme', color);
    location.reload();
  } catch (err) {}
};

export const toggleTheme = () => {
  const theme = getThemeMode();
  const themes = ['dark', 'light'];
  const colorIndex = themes.indexOf(theme);
  const nextColor = colorIndex < themes.length - 1 ? themes[colorIndex + 1] : themes[0];
  setThemeMode(nextColor);
};

export const currentTheme = getThemeMode();
