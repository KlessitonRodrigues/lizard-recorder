import ENJSON from 'src/public/i18n/en.json';
import PTJSON from 'src/public/i18n/pt.json';

const ENText = ENJSON as Utils.TranslationFile;
const PTText = PTJSON as Utils.TranslationFile;

export const getLanguage = () => {
  try {
    return localStorage.getItem('lang') || 'pt';
  } catch (err) {
    return 'pt';
  }
};

export const changeLanguage = (lang: string) => {
  try {
    localStorage.setItem('lang', lang);
    location.reload();
  } catch (err) {}
};

export const lang = getLanguage();

export const toggleLang = () => {
  const lang = getLanguage();
  const langs = ['pt', 'en'];
  const colorIndex = langs.indexOf(lang);
  const nextLang = colorIndex < langs.length - 1 ? langs[colorIndex + 1] : langs[0];
  changeLanguage(nextLang);
};

export const getText = (path: string) => {
  if (lang === 'pt') return PTText[path] || 'NO_TEXT';
  return ENText[path] || 'NO_TEXT';
};
