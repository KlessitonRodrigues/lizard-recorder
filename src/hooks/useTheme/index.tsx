import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { getLocalTheme, saveLocalTheme } from 'src/styles/theme';

// @ts-ignore
const ThemeCtx = createContext<Hooks.UseThemeCtx>(null);

const colors: Hooks.ThemeColors[] = ['indigo', 'purple', 'blue', 'magenta', 'green'];

const localTheme = getLocalTheme();

export const ThemeProvider = (props: PropsWithChildren) => {
  const [isDark, setDark] = useState(localTheme.mode === 'dark');
  const [color, setColor] = useState(localTheme.color);

  const toggleColor = () => {
    const nextColor = colors[colors.indexOf(color) + 1] || 'indigo';
    setColor(nextColor);
  };

  useEffect(() => {
    saveLocalTheme(isDark ? 'dark' : 'light', color);
  }, [isDark, color]);

  const context: Hooks.UseThemeCtx = {
    isDark,
    color,
    setDark,
    setColor,
    toggleColor,
  };

  const value = useMemo(() => context, [isDark, color]);

  return <ThemeCtx.Provider value={value}>{props.children}</ThemeCtx.Provider>;
};

export default () => useContext(ThemeCtx);
