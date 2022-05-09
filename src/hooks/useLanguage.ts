/* eslint-disable global-require */
// import { ILanguageTemplate } from '@/interfaces/ILanguageTemplate';

const useLanguage = () => {
  // const language = 'en';
  const languages = ['en'];
  const dictionary = {};

  languages.forEach((language: string) => {
    dictionary[language] = require('/src/utils/language/languages/en.ts');
  });

  return dictionary;
};

export default useLanguage;
