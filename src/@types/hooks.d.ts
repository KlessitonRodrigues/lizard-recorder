declare namespace Hooks {
  type ThemeColors = 'indigo' | 'blue' | 'purple' | 'magenta' | 'green';

  type UseThemeCtx = {
    isDark: boolean;
    color: ThemeColors;
    setDark: (value: boolean) => any;
    setColor: (value: ThemeColors) => any;
    toggleColor: () => void;
  };
}
